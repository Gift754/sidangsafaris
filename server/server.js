const express = require('express');
const axios = require('axios');
const router = express.Router();

const {
  MPESA_CONSUMER_KEY,
  MPESA_CONSUMER_SECRET,
  MPESA_SHORTCODE,
  MPESA_PASSKEY,
  MPESA_CALLBACK_URL
} = process.env;

// Get OAuth token
async function getToken() {
  const auth = Buffer.from(`${MPESA_CONSUMER_KEY}:${MPESA_CONSUMER_SECRET}`).toString('base64');
  const res = await axios.get('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials', {
    headers: { Authorization: `Basic ${auth}` }
  });
  return res.data.access_token;
}

// STK Push endpoint
router.post('/stkpush', async (req, res) => {
  const { phone, amount } = req.body;
  try {
    const token = await getToken();
    const timestamp = new Date()
      .toISOString()
      .replace(/[^0-9]/g, '')
      .slice(0, 14);

    const password = Buffer.from(
      `${MPESA_SHORTCODE}${MPESA_PASSKEY}${timestamp}`
    ).toString('base64');

    const payload = {
      BusinessShortCode: MPESA_SHORTCODE,
      Password: password,
      Timestamp: timestamp,
      TransactionType: 'CustomerPayBillOnline',
      Amount: amount,
      PartyA: phone,
      PartyB: MPESA_SHORTCODE,
      PhoneNumber: phone,
      CallBackURL: MPESA_CALLBACK_URL,
      AccountReference: 'SidangSafaris',
      TransactionDesc: 'Safari Booking'
    };

    const mpesaRes = await axios.post(
      'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
      payload,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    if (mpesaRes.data.ResponseCode === "0") {
      res.json({ success: true });
    } else {
      res.json({ success: false, message: mpesaRes.data.ResponseDescription });
    }
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ success: false, message: 'M-Pesa request failed.' });
  }
});

module.exports = router;