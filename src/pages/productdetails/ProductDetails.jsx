import React, { useState } from "react";
import "./ProductDetails.css";
import shop01 from "../../assets/product03.jpeg";
import shop02 from "../../assets/product02.jpeg";
import shop03 from "../../assets/product01.jpeg";
import shop04 from "../../assets/product04.jpeg";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function ProductDetails() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [shop01, shop02, shop03, shop04];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="container" id="product-details-box">
      <div id="product-details-headbtn">
        <button
          onClick={() => {
            navigate("/our-shop");
          }}
        >
          <FaLongArrowAltLeft /> Back
        </button>
      </div>
      <div id="product-details-card">
        <div style={{ position: "relative", width: "100%" }}>
          <img src={images[currentSlide]} alt="banner" />

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            style={{
              position: "absolute",
              left: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              border: "none",
              borderRadius: "50%",
              padding: "8px 12px",
              cursor: "pointer",
              zIndex: 1,
              width: "auto",
            }}
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              border: "none",
              borderRadius: "50%",
              padding: "8px 12px",
              cursor: "pointer",
              zIndex: 1,
              width: "auto",
            }}
          >
            ›
          </button>

          {/* Navigation Dots */}
          <div
            style={{
              position: "absolute",
              bottom: "-20px",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: "8px",
              zIndex: 1,
            }}
          >
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                style={{
                  width: currentSlide === index ? "24px" : "12px",
                  height: "12px",
                  borderRadius: "999px",
                  backgroundColor:
                    currentSlide === index
                      ? "#1d2f61"
                      : "rgba(29, 47, 97, 0.5)", // Updated colors
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>

        <p id="product-brand">Iphone X</p>
        <p id="product-price">$120.00</p>
        <small>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ad,
          fuga aperiam, sequi at sit esse omnis repellat consequuntur quasi,
          corrupti voluptatibus nemo enim distinctio itaque quia saepe rerum
          vitae.Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Sapiente ad, fuga aperiam, sequi at sit esse omnis repellat
          consequuntur quasi, corrupti voluptatibus nemo enim distinctio itaque
          quia saepe rerum
        </small>
        <button>Order Now</button>
      </div>
    </div>
  );
}

export default ProductDetails;
