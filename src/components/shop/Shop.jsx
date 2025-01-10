import React from "react";
import "./Shop.css";
import Products from "../../components/products/ProductData";
import { useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Shop() {
  const navigate = useNavigate();


  return (
    <div className="container" id="shop-page">
      <h4>Check out our latest products</h4>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {Products.map((product, index) => (
          <SwiperSlide key={index}>
            <div
              id="shop-page-card"
              onClick={() => {
                navigate("/our-shop");
              }}
            >
              <img src={product.image} alt={product.title} />
              <p>  {product.productName}</p>
              <div id="shop-card-price">
                <p id="shop-card-priceA"> was ${product.oldPrice.toFixed(2)}</p>
                <p id="shop-card-priceB">
                now ${product.price.toFixed(2)}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Shop;
