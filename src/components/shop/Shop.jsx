import React from "react";
import "./Shop.css";
import shop01 from "../../assets/product01.jpeg";  
import shop02 from "../../assets/product02.jpeg";  
import shop03 from "../../assets/product03.jpeg";  
import shop04 from "../../assets/product04.jpeg";  
import shop05 from "../../assets/product05.jpeg";  
import shop06 from "../../assets/product06.jpeg";  
import shop07 from "../../assets/product07.jpeg";  
import shop08 from "../../assets/product08.jpeg";  
import shop09 from "../../assets/product09.jpeg"; 
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
  const Products = [
    {
        id: 1,
        image: shop01,  // Use the imported image
        productName: "Huawei P30 LCD",
        price: 6.99,
        oldPrice: 8.99,
        description: "High-quality wireless headphones with noise cancellation and 30-hour battery life."
    },
    {
        id: 2,
        image: shop02,  // Use the imported image
        productName: "Sony EarPhones",
        price: 5.99,
        oldPrice: 12.00,
        description: "Feature-rich smartwatch with heart rate monitoring, GPS, and water resistance."
    },
    {
        id: 3,
        image: shop03,  // Use the imported image
        productName: "Samsung Wireless Headphones",
        price: 12.99,
        oldPrice: 20.00,
        description: "Durable laptop backpack with multiple compartments and USB charging port."
    },
    {
        id: 4,
        image: shop04,  // Use the imported image
        productName: "LG Wireless HeadPhones",
        price: 15.99,
        oldPrice: 10.00,
        description: "RGB mechanical keyboard with customizable switches and multimedia controls."
    },
    {
        id: 5,
        image: shop05,  // Use the imported image
        productName: "Iphone X",
        price: 124.00,
        oldPrice: 150.30,
        description: "RGB mechanical keyboard with customizable switches and multimedia controls."
    },
    {
        id: 6,
        image: shop06,  // Use the imported image
        productName: "Samsung A2 LCD",
        price: 5.50,
        oldPrice: 8.90,
        description: "RGB mechanical keyboard with customizable switches and multimedia controls."
    },
    {
        id: 7,
        image: shop07,  // Use the imported image
        productName: "Multi-Single Usd Cable",
        price: 10.00,
        oldPrice: 12.00,
        description: "RGB mechanical keyboard with customizable switches and multimedia controls."
    },
    {
        id: 8,
        image: shop08,  // Use the imported image
        productName: "Samsung Quick Charger",
        price: 4.55,
        oldPrice: 8.70,
        description: "RGB mechanical keyboard with customizable switches and multimedia controls."
    },
    {
        id: 9,
        image: shop09,  // Use the imported image
        productName: "Huawei Laptop Charger",
        price: 12.50,
        oldPrice: 14.00,
        description: "RGB mechanical keyboard with customizable switches and multimedia controls."
    },
    
];

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
