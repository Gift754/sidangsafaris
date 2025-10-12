import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "../styles/Reviews.css";
import Profile from "../assets/images/general/profile.png";

const reviews = [
  {
    message:
      "We had an amazing time on our trip to Kenya with Sidan Adventures. The tour was well-organised and the guides were very knowledgable.",
    image: Profile,
    name: "Abala Diana",
  },
  {
    message:
      "We had an amazing time on our trip to Kenya with Sidan Adventures. The tour was well-organised and the guides were very knowledgable.",
    image: Profile,
    name: "Abala Diana",
  },
  {
    message:
      "We had an amazing time on our trip to Kenya with Sidan Adventures. The tour was well-organised and the guides were very knowledgable.",
    image: Profile,
    name: "Abala Diana",
  },
  {
    message:
      "We had an amazing time on our trip to Kenya with Sidan Adventures. The tour was well-organised and the guides were very knowledgable.",
    image: Profile,
    name: "Abala Diana",
  },
  {
    message:
      "We had an amazing time on our trip to Kenya with Sidan Adventures. The tour was well-organised and the guides were very knowledgable.",
    image: Profile,
    name: "Abala Diana",
  },
  {
    message:
      "We had an amazing time on our trip to Kenya with Sidan Adventures. The tour was well-organised and the guides were very knowledgable.",
    image: Profile,
    name: "Abala Diana",
  },
];

function Reviews() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    setSwiperReady(true);
  }, []);

  return (
    <div className="Reviews">
      <p className="tags tag">Hear from our Previous Clients</p>
      <h2 className="tags">What our customers say about us.</h2>
      {swiperReady && (
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={3}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          pagination={{
            el: paginationRef.current,
            clickable: true,
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.params.pagination.el = paginationRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
            swiper.pagination.init();
            swiper.pagination.update();
          }}
          breakpoints={{
            300: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index} className="swipe">
              <div className="review-card">
                <p className="message">{review.message}</p>
                <img src={review.image} alt="profile" className="profile" />
                <p className="name">{review.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <div className="custom-controls">
        <button ref={prevRef} className="custom-prev">
          <FaArrowLeft className="arrow" />
        </button>
        <div ref={paginationRef} className="custom-pagination"></div>
        <button ref={nextRef} className="custom-next">
          <FaArrowRight className="arrow" />
        </button>
      </div>
    </div>
  );
}

export default Reviews;
