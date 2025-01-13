import React, { useState } from "react";
import "./ProductDetails.css";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

function ProductDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const { product } = location.state || {};
  const [currentSlide, setCurrentSlide] = useState(0);

  // If no product data is found, show error and back button
  if (!product) {
    return (
      <div className="container" id="product-details-box">
        <div id="product-details-headbtn">
          <button onClick={() => navigate("/our-shop")}>
            <FaLongArrowAltLeft /> Back
          </button>
        </div>
        <div id="product-details-card">
          <p>Product not found</p>
        </div>
      </div>
    );
  }

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="container" id="product-details-box">
      <div id="product-details-headbtn">
        <button onClick={() => navigate("/our-shop")}>
          <FaLongArrowAltLeft /> Back
        </button>
      </div>
      <div id="product-details-card">
        <div style={{ position: "relative", width: "100%" }}>
          <img
            src={product.images[currentSlide]}
            alt={`${product.productName} - View ${currentSlide + 1}`}
          />

          {/* Only show navigation if there are multiple images */}
          {product.images.length > 1 && (
            <>
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
                {product.images.map((_, index) => (
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
                          : "rgba(29, 47, 97, 0.5)",
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      padding: 0,
                    }}
                  />
                ))}
              </div>

              {/* Thumbnail Preview */}
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  justifyContent: "center",
                  marginTop: "30px",
                }}
              >
                {product.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                      cursor: "pointer",
                      border:
                        currentSlide === index
                          ? "2px solid #1d2f61"
                          : "2px solid transparent",
                      borderRadius: "4px",
                    }}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <p id="product-brand">{product.productName}</p>
        <div className="price-container">
          {product.oldPrice && product.oldPrice > product.price && (
            <p id="product-old-price">Was ${product.oldPrice.toFixed(2)}</p>
          )}
          <p id="product-price">${product.price.toFixed(2)}</p>
        
        </div>
        <small>{product.description}</small>
        {/* <div className="product-meta">
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Product ID:</strong> {product.id}</p>
        </div> */}
        <button>Order Now</button>
      </div>
    </div>
  );
}

export default ProductDetails;
