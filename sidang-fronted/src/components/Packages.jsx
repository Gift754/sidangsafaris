import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import MaasaiMara from "../assets/images/general/maasai-mara.jpg";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "../styles/Packages.css";
import Book from "../assets/icons/pointer.png";

const packages = [
  {
    title: "Maasai Mara",
    image: MaasaiMara,
    desc: "Explore Kenya’s Wildlife Paradise With Chrisrob Tours & Travel Ltd",
    price: "KES 950",
    rating: 4.8,
  },
  {
    title: "Maasai Mara",
    image: MaasaiMara,
    desc: "Explore Kenya’s Wildlife Paradise With Chrisrob Tours & Travel Ltd",
    price: "KES 950",
    rating: 4.8,
  },
  {
    title: "Maasai Mara",
    image: MaasaiMara,
    desc: "Explore Kenya’s Wildlife Paradise With Chrisrob Tours & Travel Ltd",
    price: "KES 950",
    rating: 4.8,
  },
  {
    title: "Maasai Mara",
    image: MaasaiMara,
    desc: "Explore Kenya’s Wildlife Paradise With Chrisrob Tours & Travel Ltd",
    price: "KES 950",
    rating: 4.8,
  },
  {
    title: "Maasai Mara",
    image: MaasaiMara,
    desc: "Explore Kenya’s Wildlife Paradise With Chrisrob Tours & Travel Ltd",
    price: "KES 950",
    rating: 4.8,
  },
  {
    title: "Maasai Mara",
    image: MaasaiMara,
    desc: "Explore Kenya’s Wildlife Paradise With Chrisrob Tours & Travel Ltd",
    price: "KES 950",
    rating: 4.8,
  },
];

function Packages() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  // Wait for refs to exist before initializing Swiper
  useEffect(() => {
    setSwiperReady(true);
  }, []);

  return (
    <div className="Packages">
      <p className="tags">Explore Our Offers</p>
      <h2 className="tags">Recommended Packages</h2>

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
          {packages.map((pkg, index) => (
            <SwiperSlide key={index}>
              <div className="package-card">
                <img src={pkg.image} alt={pkg.title} className="package-img" />
                <div className="package-content">
                  <div className="rating-card">
                    <h3 className="package-name">{pkg.title}</h3>
                    <div className="rate">
                      <FaStar className="star" /> {pkg.rating}
                    </div>
                  </div>
                  <p className="package-description">{pkg.desc}</p>
                  <ul className="package-list">
                    <li>Visit a Maasai Village</li>
                    <li>Park Fees & Government Taxes</li>
                    <li>Airport Pick-up and Escort</li>
                  </ul>
                  <div className="package-footer">
                    <div>
                      <p className="price-label">Per Person</p>
                      <p className="price-value">{pkg.price}</p>
                    </div>
                    <button className="book-btn">
                      Book Now{" "}
                      <img src={Book} alt="Book Icon" className="book" />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* ✅ Custom controls below */}
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

export default Packages;
