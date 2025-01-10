import React, { useState, useEffect } from "react";
import { Spin } from "antd";
import "./Gallery.css";
import { BiFilterAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Products from "../../components/products/Productdata";

function Gallery() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [activeButton, setActiveButton] = useState(null);
  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

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
      <div id="shops-terms">
        <h5>
          Upgrade your phone with the latest accessories – style, protection,
          and performance all in one place! <span id="gallery-small">Discover quality products that make
          your device stand out</span>
        </h5>
      </div>
      <div className="row g-4">
        {products.map((product) => (
          <div key={product.id} className="col-6 col-lg-3">
            <div id="products-inner-card" onClick={() => {
                  navigate("/product-details");
                }}>
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
                <small
                  style={{
                    marginRight: "10px",
                    textDecoration: "line-through",
                    color: "#666",
                  }}
                >
                  was ${product.oldPrice.toFixed(2)}
                </small>
                <small style={{ color: "#f1975b", fontFamily: "Raleway" }}>
                  <b>now ${product.price.toFixed(2)}</b>
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
