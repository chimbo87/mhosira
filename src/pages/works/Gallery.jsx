import React, { useState, useEffect } from "react";
import { Spin, Pagination } from "antd";
import "./Gallery.css";
import { BiFilterAlt } from "react-icons/bi";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import shop01 from "../../assets/product01.jpeg";
import shop02 from "../../assets/product02.jpeg";
import shop00 from "../../assets/product03.jpeg";
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
import shop22 from "../../assets/products/product01.jpeg";

import shop23 from "../../assets/products/product02.jpg";
import shop24 from "../../assets/products/product03.jpg";
import shop25 from "../../assets/products/product04.jpeg";
import shop26 from "../../assets/products/product05.jpeg";
import shop27 from "../../assets/products/product06.jpeg";
import shop28 from "../../assets/products/product07.jpeg";
import shop29 from "../../assets/products/product08.jpeg";
import shop30 from "../../assets/products/product09.jpeg";
import shop31 from "../../assets/products/product10.jpeg";
import shop32 from "../../assets/products/product16.jpeg";
import shop33 from "../../assets/products/product11.jpeg";
import shop34 from "../../assets/products/product12.jpeg";
import shop35 from "../../assets/products/product13.jpeg";
import shop36 from "../../assets/products/product14.jpeg";
import shop37 from "../../assets/products/product15.jpeg";
import shop38 from "../../assets/products/product16.jpeg";
import shop39 from "../../assets/products/product17.jpeg";
import shop40 from "../../assets/products/product18.jpeg";
import shop41 from "../../assets/products/product19.jpeg";
import shop42 from "../../assets/products/product20.jpeg";
import shop43 from "../../assets/products/product21.jpeg";
import shop44 from "../../assets/products/product22.jpeg";
import shop45 from "../../assets/products/product23.jpeg";
import shop46 from "../../assets/products/product24.jpeg";
import shop47 from "../../assets/products/product25.jpeg";
import shop48 from "../../assets/products/product26.jpeg";
import shop49 from "../../assets/products/product27.jpeg";
import shop50 from "../../assets/products/product28.jpeg";
import shop51 from "../../assets/products/product29.jpeg";
import shop52 from "../../assets/products/product30.jpeg";
import shop53 from "../../assets/products/product31.jpeg";
import shop54 from "../../assets/products/product32.jpeg";
import shop55 from "../../assets/products/product33.jpeg";
import shop56 from "../../assets/products/product34.jpeg";
import shop57 from "../../assets/products/fold01.jpeg";
import shop58 from "../../assets/products/fold02.jpeg";
import shop59 from "../../assets/products/fold03.jpeg";
import shop60 from "../../assets/products/fold04.jpeg";
import shop61 from "../../assets/products/fold05.jpeg";
import shop62 from "../../assets/products/fold06.jpeg";

function Gallery() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeButton, setActiveButton] = useState(1);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 20; // Number of items per page

  const Products = [
    {
      id: 13,
      image: shop11,
      images: [shop11,shop13, shop14],
      productName: "Straight Stich Sewing Machine",
      price: 380.00,
      oldPrice: 230.0,
      category: "industrial machines",
      description:
        "The Straight Stitch Sewing Machine is a high-quality, durable sewing solution. We will bring it directly from China and deliver it quickly through our mobileland freight services.",
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
        "Experience the future of mobile technology with the Z Fold series. Unfold a stunning display, seamless multitasking, and a sleek design that fits perfectly in your pocket. Elevate your smartphone experience like never before",
    },
    {
      id: 1,
      image: shop01,
      images: [shop01,shop26, shop27],
      productName: "Samsung S6 LCDs",
      price: 20.00,
      oldPrice: 8.99,
      category: "lcd",
      description:
        "The Samsung S6 LCD offers a high-resolution display with vibrant colors and sharp clarity, perfect for replacing your damaged screen and restoring your device to its original brilliance.",
    },
    {
      id: 15,
      image: shop22,
      images: [shop22,shop56],
      productName: "Vynl Cutter & Plotter",
      price: 500.00,
      oldPrice: 8.99,
      category: "industrial machines",
      description:
        "The Vinyl Cutter & Plotter delivers precise, clean cuts for various materials, ideal for creating custom designs, signs, and decals with professional-grade accuracy",
    },
    // {
    //   id: 2,
    //   image: shop02,
    //   images: [shop02, shop03],
    //   productName: "Sony EarPhones",
    //   price: 5.99,
    //   oldPrice: 12.0,
    //   category: "earphones",
    //   description:
    //     "Enjoy seamless sound with our Wireless Earphones, offering high-quality audio, long battery life, and a tangle-free experience for ultimate convenience on the go. Our Non-Wireless Earphones provide clear, crisp sound with a reliable wired connection, perfect for users who prefer a stable and uninterrupted listening experience.",
    // },
    // {
    //   id: 3,
    //   image: shop03,
    //   images: [shop03, shop04, shop05, shop06],
    //   productName: "All Brands Wireless Earphones",
    //   price: 7.00,
    //   oldPrice: 20.0,
    //   category: "earphones",
    //   description:
    //     "Our Non-Wireless Earphones provide clear, crisp sound with a reliable wired connection, perfect for users who prefer a stable and uninterrupted listening experience.",
    // },
    // {
    //   id: 4,
    //   image: shop04,
    //   images: [shop04, shop00],
    //   productName: " Wireless HeadPhones",
    //   price: 15.99,
    //   oldPrice: 10.0,
    //   category: "earphones",
    //   description:
    //     "Experience superior sound quality and freedom with our Wireless Headphones, offering long-lasting battery life and a comfortable fit for an immersive listening experience",
    // },
    // {
    //   id: 5,
    //   image: shop05,
    //   images: [shop05, shop06, shop07, shop08],
    //   productName: "Iphone X",
    //   price: 124.0,
    //   oldPrice: 150.3,
    //   category: "phone",
    //   description:
    //     "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta est dolorum ut quis debitis in reiciendis! Nostrum sit repudiandae, vel officia nisi cupiditate sed sunt suscipit voluptatibus quaerat ab iusto!",
    // },
    {
      id: 6,
      image: shop06,
      images: [shop06, shop26, shop27, shop28],
      productName: "Samsung s7 LCDs",
      price: 25.00,
      oldPrice: 8.9,
      category: "lcd",
      description:
        "The Samsung S7 LCD offers a vibrant, high-definition display that restores your phone’s screen to its original quality, ensuring sharp visuals and an immersive viewing experience",
    },
    {
      id: 11,
      image: shop16,
      images: [shop16, shop18, shop20, shop46, shop47],
      productName: "Overlocking Sewing Machine",
      price: 400.00,
      oldPrice: 300.0,
      category: "industrial machines",
      description:
        "The Overlocking Sewing Machine provides professional-grade stitching with precision, perfect for finishing seams, preventing fraying, and creating clean, durable edges on various fabrics",
    },
    {
      id: 7,
      image: shop07,
      images: [shop07, shop08, shop09],
      productName: "Phone Chargers",
      price: 5.00,
      oldPrice: 12.0,
      category: "charger",
      description:
        "Our high-quality charger ensures fast, efficient charging for your devices, offering reliable performance and durability for everyday use.",
    },
    // {
    //   id: 8,
    //   image: shop08,
    //   images: [shop08, shop09, shop10, shop01],
    //   productName: "Samsung Quick Charger",
    //   price: 4.55,
    //   oldPrice: 8.7,
    //   category: "charger",
    //   description:
    //     "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta est dolorum ut quis debitis in reiciendis! Nostrum sit repudiandae, vel officia nisi cupiditate sed sunt suscipit voluptatibus quaerat ab iusto!",
    // },
    // {
    //   id: 9,
    //   image: shop09,
    //   images: [shop09, shop10, shop01, shop02],
    //   productName: "Huawei Laptop Charger",
    //   price: 12.5,
    //   oldPrice: 14.0,
    //   category: "charger",
    //   description:
    //     "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta est dolorum ut quis debitis in reiciendis! Nostrum sit repudiandae, vel officia nisi cupiditate sed sunt suscipit voluptatibus quaerat ab iusto!",
    // },
    // {
    //   id: 10,
    //   image: shop10,
    //   images: [shop10, shop12],
    //   productName: "T-shirt Printing Machine",
    //   price: 320.5,
    //   oldPrice: 380.0,
    //   category: "industrial machines",
    //   description:
    //     "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta est dolorum ut quis debitis in reiciendis! Nostrum sit repudiandae, vel officia nisi cupiditate sed sunt suscipit voluptatibus quaerat ab iusto!",
    // },

    {
      id: 16,
      image: shop23,
      images: [shop23,shop24],
      productName: "S20 LCDs",
      price: 75.00,
      oldPrice: 380.0,
      category: "lcd",
      description:
        "The Samsung S20 LCD delivers vibrant colors and sharp clarity, restoring your device’s display to its original brilliance with high-definition visuals and touch sensitivity.",
    },
    {
      id: 17,
      image: shop52,
      images: [shop52, shop53,shop54],
      productName: "Embroidering Machines",
      price: 1800.00,
      oldPrice: 380.0,
      category: "industrial machines",
      description:
        "Our Embroidering Machines offer precise, high-quality stitching for creating detailed, intricate designs on various fabrics, perfect for both professional and personal use",
    },
    {
      id: 18,
      image: shop49,
      images: [ shop49,shop50, shop51],
      productName: "Cloth Cutter Machines",
      price: 300.00,
      oldPrice: 380.0,
      category: "industrial machines",
      description:
        "Our Cloth Cutter Machines provide fast, precise cutting for various fabrics, enhancing productivity and ensuring clean, accurate edges for your sewing and crafting projects",
    },
    {
      id: 19,
      image: shop10,
      images: [shop10,shop48, shop12],
      productName: "T-shirt Printing Machine",
      price: 320.5,
      oldPrice: 380.0,
      category: "industrial machines",
      description:
        "The T-shirt Printing Machine allows you to easily print high-quality, vibrant designs on fabric, perfect for custom apparel and personalized clothing with professional results",
    },
    {
      id: 20,
      image: shop39,
      images: [shop40, shop39],
      productName: "Samsung S8 LCDs",
      price: 50.00,
      oldPrice: 380.0,
      category: "lcd",
      description:
        "The Samsung S8 LCD delivers vibrant colors and sharp clarity, restoring your device’s display to its original brilliance with high-definition visuals and touch sensitivity.",
    },
    {
      id: 21,
      image: shop37,
      images: [shop38, shop37],
      productName: "Samsung S10 LCD",
      price: 70.00,
      oldPrice: 380.0,
      category: "lcd",
      description:
        "The Samsung S10 LCD delivers vibrant colors and sharp clarity, restoring your device’s display to its original brilliance with high-definition visuals and touch sensitivity.",
    },
    {
      id: 22,
      image: shop28,
      images: [shop31,shop28],
      productName: "Samsung S9 LCD",
      price: 55.00,
      oldPrice: 380.0,
      category: "lcd",
      description:
        "The Samsung S9 LCD delivers vibrant colors and sharp clarity, restoring your device’s display to its original brilliance with high-definition visuals and touch sensitivity.",
    },
    {
      id: 23,
      image: shop29,
      images: [ shop29,  shop34, shop32],
      productName: "Samsung S10+ LCD",
      price: 85.00,
      oldPrice: 380.0,
      category: "lcd",
      description:
        "Upgrade your device with a high-quality LCD screen replacement, offering vibrant display clarity and durability. Restore your phone to its best with our reliable, easy-to-install screens",
    },
    {
      id: 24,
      image: shop34,
      images: [ shop30,  shop31, shop32],
      productName: "Samsung S20 LCD",
      price: 320.5,
      oldPrice: 380.0,
      category: "lcd",
      description:
        "Upgrade your device with a high-quality LCD screen replacement, offering vibrant display clarity and durability. Restore your phone to its best with our reliable, easy-to-install screens",
    },
    {
      id: 25,
      image: shop35,
      images: [ shop30,  shop31, shop32],
      productName: "Samsung S20+ LCD",
      price: 80.00,
      oldPrice: 380.0,
      category: "lcd",
      description:
        "Upgrade your device with a high-quality LCD screen replacement, offering vibrant display clarity and durability. Restore your phone to its best with our reliable, easy-to-install screens",
    },
    {
      id: 26,
      image: shop35,
      images: [ shop35,  shop31, shop32],
      productName: "Samsung S20 ultra LCDs",
      price: 85.00,
      oldPrice: 380.0,
      category: "lcd",
      description:
        "Upgrade your device with a high-quality LCD screen replacement, offering vibrant display clarity and durability. Restore your phone to its best with our reliable, easy-to-install screens",
    },
    {
      id: 27,
      image: shop35,
      images: [ shop31,  shop35, shop32],
      productName: "Samsung S21 LCDs",
      price: 70.00,
      oldPrice: 380.0,
      category: "lcd",
      description:
        "Upgrade your device with a high-quality LCD screen replacement, offering vibrant display clarity and durability. Restore your phone to its best with our reliable, easy-to-install screens",
    },
    {
      id: 28,
      image: shop30,
      images: [ shop30,  shop31, shop33],
      productName: "Samsung S21+ LCDs",
      price: 75.00,
      oldPrice: 380.0,
      category: "lcd",
      description:
        "Upgrade your device with a high-quality LCD screen replacement, offering vibrant display clarity and durability. Restore your phone to its best with our reliable, easy-to-install screens",
    },
    {
      id: 29,
      image: shop35,
      images: [ shop30,  shop32, shop32],
      productName: "Samsung S22 LCDs",
      price: 100,
      oldPrice: 380.0,
      category: "lcd",
      description:
        "Upgrade your device with a high-quality LCD screen replacement, offering vibrant display clarity and durability. Restore your phone to its best with our reliable, easy-to-install screens",
    },

    //here

    {
      id: 30,
      image: shop32,
      images: [ shop30,  shop31, shop30],
      productName: "Samsung note 20 LCDs",
      price: 80.00,
      oldPrice: 380.0,
      category: "lcd",
      description:
        "Upgrade your device with a high-quality LCD screen replacement, offering vibrant display clarity and durability. Restore your phone to its best with our reliable, easy-to-install screens",
    },
    {
      id: 31,
      image: shop35,
      images: [ shop32,  shop32, shop30],
      productName: "Samsung S23 ultra LCDs",
      price: 130.00,
      oldPrice: 380.0,
      category: "lcd",
      description:
        "Upgrade your device with a high-quality LCD screen replacement, offering vibrant display clarity and durability. Restore your phone to its best with our reliable, easy-to-install screens",
    },









    {
      id: 32,
      image: shop57,
      images: [ shop57,  shop59, shop58],
      productName: "Samsung Z fold 1",
      price: 320.5,
      oldPrice: 380.0,
      category: "phone",
      description:
        "Experience the future of mobile technology with the Z Fold series. Unfold a stunning display, seamless multitasking, and a sleek design that fits perfectly in your pocket. Elevate your smartphone experience like never before",
    },
    {
      id: 33,
      image: shop59,
      images: [ shop57,  shop60, shop58],
      productName: "Samsung Z fold 2",
      price: 320.5,
      oldPrice: 380.0,
      category: "phone",
      description:
        "Experience the future of mobile technology with the Z Fold series. Unfold a stunning display, seamless multitasking, and a sleek design that fits perfectly in your pocket. Elevate your smartphone experience like never before",
    },
    {
      id: 34,
      image: shop60,
      images: [ shop57,  shop59, shop61],
      productName: "Samsung Z fold 3",
      price: 320.5,
      oldPrice: 380.0,
      category: "phone",
      description:
        "Experience the future of mobile technology with the Z Fold series. Unfold a stunning display, seamless multitasking, and a sleek design that fits perfectly in your pocket. Elevate your smartphone experience like never before",
    },
    {
      id: 35,
      image: shop58,
      images: [ shop60,  shop59, shop61],
      productName: "Samsung Z fold 4",
      price: 320.5,
      oldPrice: 380.0,
      category: "phone",
      description:
        "Experience the future of mobile technology with the Z Fold series. Unfold a stunning display, seamless multitasking, and a sleek design that fits perfectly in your pocket. Elevate your smartphone experience like never before",
    },
    {
      id: 36,
      image: shop59,
      images: [ shop59,  shop61, shop58],
      productName: "Samsung Z fold 5",
      price: 320.5,
      oldPrice: 380.0,
      category: "phone",
      description:
        "Experience the future of mobile technology with the Z Fold series. Unfold a stunning display, seamless multitasking, and a sleek design that fits perfectly in your pocket. Elevate your smartphone experience like never before",
    },
   
   
  
  ];
  const handleButtonClick = (buttonId, category) => {
    setActiveButton(buttonId);
    filterProducts(category);
    setCurrentPage(1); // Reset to first page when filtering
  };

  const filterProducts = (category) => {
    if (!category || category === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
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

  // Get current products for pagination
  const indexOfLastProduct = currentPage * pageSize;
  const indexOfFirstProduct = indexOfLastProduct - pageSize;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Scroll to top of gallery when page changes
    document
      .getElementById("gallery-box")
      ?.scrollIntoView({ behavior: "smooth" });
  };

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
          onClick={() => handleButtonClick(1, "all")}
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
          onClick={() => handleButtonClick(2, "phone")}
        >
          Phones
        </button>
        {/* <button
          className={activeButton === 3 ? "active" : ""}
          onClick={() => handleButtonClick(3, "charger")}
        >
          Chargers
        </button> */}
        <button
          className={activeButton === 4 ? "active" : ""}
          onClick={() => handleButtonClick(4, "lcd")}
        >
          LCDs
        </button>
        {/* <button
          className={activeButton === 5 ? "active" : ""}
          onClick={() => handleButtonClick(5, "cover")}
        >
          Phone Covers
        </button> */}
        <button
          className={activeButton === 6 ? "active" : ""}
          onClick={() => handleButtonClick(6, "industrial machines")}
        >
          Industrial Machines
        </button>
      </div>

      <div className="row g-4">
        {currentProducts.map((product) => (
          <div key={product.id} className="col-6 col-lg-3">
            <div
              id="products-inner-card"
              onClick={() => {
                navigate(`/product-details/${product.id}`, {
                  state: { product },
                });
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
                <div id="price-tag">
                  <small><span>From</span>
                    <b> ${product.price.toFixed(2)}</b>
                  </small>
                  <FaLongArrowAltRight />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "2rem 0",
        }}
      >
        <Pagination
          current={currentPage}
          total={filteredProducts.length}
          pageSize={pageSize}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
}

export default Gallery;
