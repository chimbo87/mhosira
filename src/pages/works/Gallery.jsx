import React, { useState, useEffect } from "react";
import { Spin } from "antd";
import "./Gallery.css";
import { BiFilterAlt } from "react-icons/bi";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import shop01 from "../../assets/product01.jpeg";
import shop02 from "../../assets/product02.jpeg";
import shop03 from "../../assets/shop03.jpeg";
import shop04 from "../../assets/product04.jpeg";
import shop05 from "../../assets/product05.jpeg";
import shop06 from "../../assets/product06.jpeg";
import shop07 from "../../assets/product07.jpeg";
import shop08 from "../../assets/product08.jpeg";
import shop09 from "../../assets/product09.jpeg";
import shop10 from "../../assets/shop10.jpeg";
import shop12 from "../../assets/shop12.jpeg";
import shop16 from "../../assets/shop16.jpeg";
import shop18 from "../../assets/shop18.jpeg";
import shop20 from "../../assets/shop20.jpeg";
import shop15 from "../../assets/shop15.jpeg";
import shop17 from "../../assets/shop17.jpeg";
import shop19 from "../../assets/shop19.jpeg";
import shop21 from "../../assets/shop21.jpeg";
import shop11 from "../../assets/shop11.jpeg";
import shop13 from "../../assets/shop13.jpg";
import shop14 from "../../assets/shop14.jpeg";
import shop22 from "../../assets/shop02.jpeg";

function Gallery() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeButton, setActiveButton] = useState(1);

  const Products = [
    {
      id: 13,
      image: shop11,
      images: [shop13, shop14],
      productName: " Sewing Machine",
      price: 140.5,
      oldPrice: 230.0,
      category: "industrial machines",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta est dolorum ut quis debitis in reiciendis! Nostrum sit repudiandae, vel officia nisi cupiditate sed sunt suscipit voluptatibus quaerat ab iusto!",
    },
    {
      id: 12,
      image: shop17,
      images: [shop15, shop19, shop21],
      productName: "Samsung Z fold",
      price: 240.0,
      oldPrice: 300.0,
      category: "phone",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta est dolorum ut quis debitis in reiciendis! Nostrum sit repudiandae, vel officia nisi cupiditate sed sunt suscipit voluptatibus quaerat ab iusto!",
    },
    {
      id: 1,
      image: shop01,
      images: [shop01, shop02, shop03, shop04], 
      productName: "Huawei P30 LCD",
      price: 6.99,
      oldPrice: 8.99,
      category: "lcd",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta est dolorum ut quis debitis in reiciendis! Nostrum sit repudiandae, vel officia nisi cupiditate sed sunt suscipit voluptatibus quaerat ab iusto!",
    },
    // {
    //   id: 15,
    //   image: shop22,
    //   images: [shop22], 
    //   productName: "Phone Covers",
    //   price: 6.99,
    //   oldPrice: 8.99,
    //   category: "cover",
    //   description:
    //     "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta est dolorum ut quis debitis in reiciendis! Nostrum sit repudiandae, vel officia nisi cupiditate sed sunt suscipit voluptatibus quaerat ab iusto!",
    // },
    {
      id: 2,
      image: shop02,
      images: [shop02, shop03, shop04, shop05],
      productName: "Sony EarPhones",
      price: 5.99,
      oldPrice: 12.0,
      category: "earphones",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta est dolorum ut quis debitis in reiciendis! Nostrum sit repudiandae, vel officia nisi cupiditate sed sunt suscipit voluptatibus quaerat ab iusto!",
    },
    {
      id: 3,
      image: shop03,
      images: [shop03, shop04, shop05, shop06],
      productName: "Samsung Wireless Headphones",
      price: 12.99,
      oldPrice: 20.0,
      category: "earphones",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta est dolorum ut quis debitis in reiciendis! Nostrum sit repudiandae, vel officia nisi cupiditate sed sunt suscipit voluptatibus quaerat ab iusto!",
    },
    {
      id: 4,
      image: shop04,
      images: [shop04, shop05, shop06, shop07],
      productName: "LG Wireless HeadPhones",
      price: 15.99,
      oldPrice: 10.0,
      category: "earphones",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta est dolorum ut quis debitis in reiciendis! Nostrum sit repudiandae, vel officia nisi cupiditate sed sunt suscipit voluptatibus quaerat ab iusto!",
    },
    {
      id: 5,
      image: shop05,
      images: [shop05, shop06, shop07, shop08],
      productName: "Iphone X",
      price: 124.0,
      oldPrice: 150.3,
      category: "phone",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta est dolorum ut quis debitis in reiciendis! Nostrum sit repudiandae, vel officia nisi cupiditate sed sunt suscipit voluptatibus quaerat ab iusto!",
    },
    {
      id: 6,
      image: shop06,
      images: [shop06, shop07, shop08, shop09],
      productName: "Samsung A2 LCD",
      price: 5.5,
      oldPrice: 8.9,
      category: "lcd",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta est dolorum ut quis debitis in reiciendis! Nostrum sit repudiandae, vel officia nisi cupiditate sed sunt suscipit voluptatibus quaerat ab iusto!",
    },
    {
      id: 11,
      image: shop16,
      images: [shop16, shop18, shop20],
      productName: "Overlocking Sewing Machine",
      price: 220.5,
      oldPrice: 300.0,
      category: "industrial machines",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta est dolorum ut quis debitis in reiciendis! Nostrum sit repudiandae, vel officia nisi cupiditate sed sunt suscipit voluptatibus quaerat ab iusto!",
    },
    {
      id: 7,
      image: shop07,
      images: [shop07, shop08, shop09, shop10],
      productName: "Multi-Single Usd Cable",
      price: 10.0,
      oldPrice: 12.0,
      category: "charger",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta est dolorum ut quis debitis in reiciendis! Nostrum sit repudiandae, vel officia nisi cupiditate sed sunt suscipit voluptatibus quaerat ab iusto!",
    },
    {
      id: 8,
      image: shop08,
      images: [shop08, shop09, shop10, shop01],
      productName: "Samsung Quick Charger",
      price: 4.55,
      oldPrice: 8.7,
      category: "charger",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta est dolorum ut quis debitis in reiciendis! Nostrum sit repudiandae, vel officia nisi cupiditate sed sunt suscipit voluptatibus quaerat ab iusto!",
    },
    {
      id: 9,
      image: shop09,
      images: [shop09, shop10, shop01, shop02],
      productName: "Huawei Laptop Charger",
      price: 12.5,
      oldPrice: 14.0,
      category: "charger",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta est dolorum ut quis debitis in reiciendis! Nostrum sit repudiandae, vel officia nisi cupiditate sed sunt suscipit voluptatibus quaerat ab iusto!",
    },
    {
      id: 10,
      image: shop10,
      images: [shop10, shop12],
      productName: "T-shirt Printing Machine",
      price: 320.5,
      oldPrice: 380.0,
      category: "industrial machines",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta est dolorum ut quis debitis in reiciendis! Nostrum sit repudiandae, vel officia nisi cupiditate sed sunt suscipit voluptatibus quaerat ab iusto!",
    },
   
 
  ];

  const handleButtonClick = (buttonId, category) => {
    setActiveButton(buttonId);
    filterProducts(category);
  };

  const filterProducts = (category) => {
    if (!category || category === 'all') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => 
        product.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredProducts(filtered);
    }
  };

  useEffect(() => {
    // Simulate API call with setTimeout
    const fetchProducts = () => {
      setTimeout(() => {
        setProducts(Products);
        setFilteredProducts(Products);
        setLoading(false);
      }, 200);
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <Spin size="large" tip="Loading products..." />
      </div>
    );
  }

  return (
    <div className="container" id="gallery-box">
      <div id="gallery-box-filterbtns">
        <button
          className={activeButton === 1 ? "active" : ""}
          onClick={() => handleButtonClick(1, 'all')}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BiFilterAlt style={{ fontSize: "20px", marginRight: "10px" }} />
          Filter All
        </button>
        <button
          className={activeButton === 2 ? "active" : ""}
          onClick={() => handleButtonClick(2, 'phone')}
        >
          Phones
        </button>
        <button
          className={activeButton === 3 ? "active" : ""}
          onClick={() => handleButtonClick(3, 'charger')}
        >
          Chargers
        </button>
        <button
          className={activeButton === 4 ? "active" : ""}
          onClick={() => handleButtonClick(4, 'lcd')}
        >
          LCDs
        </button>
        <button
          className={activeButton === 5 ? "active" : ""}
          onClick={() => handleButtonClick(5, 'cover')}
        >
          Phone Covers
        </button>
        <button
          className={activeButton === 6 ? "active" : ""}
          onClick={() => handleButtonClick(6, 'industrial machines')}
        >
          Industrial Machines
        </button>
      </div>

      <div className="row g-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-6 col-lg-3">
            <div
              id="products-inner-card"
              onClick={() => {
                navigate(`/product-details/${product.id}`, { 
                  state: { product } 
                });
              }}
            >
              <img
                src={product.image} // Use the original image property for thumbnails
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
                <div id="price-tag">
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