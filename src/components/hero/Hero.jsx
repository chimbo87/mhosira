import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import { useNavigate } from "react-router-dom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import banner01 from "../../assets/home01.jpeg";
import banner02 from "../../assets/service02.jpeg";
import banner03 from "../../assets/home03.jpeg";
import "./Hero.css";

function Hero() {
  const navigate = useNavigate();
  const slides = [
    {
      id: 1,
      title: "Efficient Freight Solutions for a Global Marketplace",
      description:
      "We provide efficient, reliable, and cost-effective freight solutions tailored to meet your needs.",
      image: banner02,
    },
    {
      id: 2,
      title: "Premium Phones & Accessories That Fit Your Style",
      description:  "Discover our curated collection of phones, cases, and accessories from trusted brands",
      image: banner01,
    },
    {
      id: 3,
      title: "Expert Phone Repair When You Need It Most",
      description:  "Professional repairs, certified technicians, and same-day service to get you back connected",
      image: banner03,
    },
  ];
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-[full]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${slide.image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div id="hero-box-container">
                <div id="hero-banner">
                  <h1>{slide.title}</h1>
                  <p>{slide.description}</p>
                  <button   onClick={() => {
                  navigate("/our-shop");
                }}>Our Shop</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Hero;
