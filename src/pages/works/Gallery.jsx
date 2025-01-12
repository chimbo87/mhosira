import React, { useState, useEffect } from "react";
import { Spin } from "antd";
import "./Gallery.css";
import { BiFilterAlt } from "react-icons/bi";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import shop01 from "../../assets/product01.jpeg";
import shop02 from "../../assets/product02.jpeg";
import shop03 from "../../assets/product03.jpeg";
import shop04 from "../../assets/product04.jpeg";
import shop05 from "../../assets/product05.jpeg";
import shop06 from "../../assets/product06.jpeg";
import shop07 from "../../assets/product07.jpeg";
import shop08 from "../../assets/product08.jpeg";
import shop09 from "../../assets/product09.jpeg";

function Gallery() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [activeButton, setActiveButton] = useState(null);
  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  const Products = [
    {
      id: 1,
      image: shop01, // Use the imported image
      productName: "Huawei P30 LCD",
      price: 6.99,
      oldPrice: 8.99,
      description:
        "High-quality wireless headphones with noise cancellation and 30-hour battery life.",
    },
    {
      id: 2,
      image: shop02, // Use the imported image
      productName: "Sony EarPhones",
      price: 5.99,
      oldPrice: 12.0,
      description:
        "Feature-rich smartwatch with heart rate monitoring, GPS, and water resistance.",
    },
    {
      id: 3,
      image: shop03, // Use the imported image
      productName: "Samsung Wireless Headphones",
      price: 12.99,
      oldPrice: 20.0,
      description:
        "Durable laptop backpack with multiple compartments and USB charging port.",
    },
    {
      id: 4,
      image: shop04, // Use the imported image
      productName: "LG Wireless HeadPhones",
      price: 15.99,
      oldPrice: 10.0,
      description:
        "RGB mechanical keyboard with customizable switches and multimedia controls.",
    },
    {
      id: 5,
      image: shop05, // Use the imported image
      productName: "Iphone X",
      price: 124.0,
      oldPrice: 150.3,
      description:
        "RGB mechanical keyboard with customizable switches and multimedia controls.",
    },
    {
      id: 6,
      image: shop06, // Use the imported image
      productName: "Samsung A2 LCD",
      price: 5.5,
      oldPrice: 8.9,
      description:
        "RGB mechanical keyboard with customizable switches and multimedia controls.",
    },
    {
      id: 7,
      image: shop07, // Use the imported image
      productName: "Multi-Single Usd Cable",
      price: 10.0,
      oldPrice: 12.0,
      description:
        "RGB mechanical keyboard with customizable switches and multimedia controls.",
    },
    {
      id: 8,
      image: shop08, // Use the imported image
      productName: "Samsung Quick Charger",
      price: 4.55,
      oldPrice: 8.7,
      description:
        "RGB mechanical keyboard with customizable switches and multimedia controls.",
    },
    {
      id: 9,
      image: shop09, // Use the imported image
      productName: "Huawei Laptop Charger",
      price: 12.5,
      oldPrice: 14.0,
      description:
        "RGB mechanical keyboard with customizable switches and multimedia controls.",
    },
  ];
  useEffect(() => {
    // Simulate API call with setTimeout
    const fetchProducts = () => {
      setTimeout(() => {
        setProducts(Products);
        setLoading(false);
      }, 200);
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div class="loading-container">
        <Spin size="large" tip="Loading products..." />
      </div>
    );
  }

  return (
    <div className="container" id="gallery-box">
      <div id="gallery-box-filterbtns">
        <button
          className={activeButton === 1 ? "active" : ""}
          onClick={() => handleButtonClick(1)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BiFilterAlt style={{ fontSize: "20px", marginRight: "10px" }} />{" "}
          Filter All
        </button>
        <button
          className={activeButton === 2 ? "active" : ""}
          onClick={() => handleButtonClick(2)}
        >
          Phones
        </button>
        <button
          className={activeButton === 3 ? "active" : ""}
          onClick={() => handleButtonClick(3)}
        >
          Chargers
        </button>
        <button
          className={activeButton === 4 ? "active" : ""}
          onClick={() => handleButtonClick(4)}
        >
          LCDs
        </button>
        <button
          className={activeButton === 5 ? "active" : ""}
          onClick={() => handleButtonClick(5)}
        >
          Covers
        </button>
        <button
          className={activeButton === 6 ? "active" : ""}
          onClick={() => handleButtonClick(6)}
        >
          Covers
        </button>
        <button
          className={activeButton === 7 ? "active" : ""}
          onClick={() => handleButtonClick(7)}
        >
          Chargers
        </button>
        <button>Chargers</button>
      </div>

      <div className="row g-4">
        {products.map((product) => (
          <div key={product.id} className="col-6 col-lg-3">
            <div
              id="products-inner-card"
              onClick={() => {
                navigate("/product-details");
              }}
            >
              <img
                src={product.image}
                alt={product.productName}
                className="img-fluid"
              />
              <small
                style={{
                  textAlign: "center",
                  color: "#1d2f61",
                  display: "block",
                  marginTop: "8px",
                  marginBottom: "4px",
                }}
              >
                {product.productName}
              </small>
              <div className="pricing-info">
                {/* <small
                  style={{
                    marginRight: "10px",
                    textDecoration: "line-through",
                    color: "#666",
                  }}
                >
                  was ${product.oldPrice.toFixed(2)}
                </small> */}
                <div id="price-tag">
                  {" "}
                  <small>
                    <b>${product.price.toFixed(2)}</b>
                  </small>
                  <FaLongArrowAltRight />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
