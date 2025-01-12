import React, { useState } from "react";
import "./Services.css";
import banner01 from "../../assets/service02.jpeg";
import banner03 from "../../assets/service.03.jpeg";
import banner02 from "../../assets/service01.jpeg";
import banner04 from "../../assets/home03.jpeg";
import { useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoArrowForward } from "react-icons/io5";


function Services() {
  const navigate = useNavigate();

  return (
    <>
      <div className="container-fluid" id="service-page">
        <h4>Our Services </h4>
      </div>
      <div className="container">
        <div class="row">
          <div class="col-lg-4 col-md-4">
            <div id="service-card">
              <img src={banner04} alt="banner" />
              <h4>Cell Phone Repairs</h4>
              <p>
                Expert repairs for all major brands and models. From cracked
                screens to battery replacements, water damage to software issues
                - we fix it all with quality parts and same-day service in most
                cases
              </p>
              <button>
                Get A Quote <FaArrowRightLong />
              </button>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="service-card">
              <img src={banner02} alt="banner" />
              <h4>We Sell Phones & Accessories</h4>
              <p>
                Browse our curated selection of new and certified pre-owned
                phones, plus all the accessories you need. Get competitive
                prices on trusted brands, with warranties and expert guidance
                included.
              </p>
              <button
                onClick={() => {
                  navigate("/our-shop");
                }}
              >
                Shop With Us <FaArrowRightLong />
              </button>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="service-card">
              <img src={banner01} alt="banner" />
              <h4>We Do Freight Services</h4>
              <p>
                Safe and reliable shipping of your devices from China. Whether
                you're sending a single phone or bulk electronics, our tracked
                shipping solutions ensure your items arrive securely and on
                time.
              </p>
              <button
                onClick={() => {
                  navigate("/our-shop");
                }}
              >
                Order With Us <FaArrowRightLong />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid" id="service-banner">
        <div className="container" id="service-banner-box">
          <h4>
            From quick repairs to quality parts and reliable shipping, we
            deliver expert service with a personal touch. Our certified
            technicians have successfully restored over 3,000 devices, and our
            trusted freight service ensures safe delivery from China.
          </h4>
          <button  onClick={() =>
                window.open(
                  "https://wa.me/263773609855?text=Hello%20MobilelandInvestments,%20I%20would%20like%20to%20enquire%20about%20your%20services",
                  "_blank"
                )
              }>
            Send Us Message <IoArrowForward />
          </button>
        </div>
      </div>
      <div className="container" id="why-us">
        <div id="why-us-card">
          <h4>Why Choose Mobileland?</h4>
          <ul>
            <li>
              Quality Assurance - All repairs backed by our satisfaction
              guarantee
            </li>
            <li>
              Fast Service Delivery - Most repairs completed within 24 hours
            </li>
            <li>
              Affordable Payment - Competitive pricing with flexible payment
              options
            </li>
            <li>
              Nationwide Coverage - We reach every corner through our freight
              service
            </li>
            <li>
              Certified Technicians - Expert team trained in latest repair
              techniques
            </li>
            <li>
              Genuine Parts - Only authentic components used for all repairs
            </li>
            <li>
              Free Diagnostics - Detailed assessment before any repair work
            </li>
            <li>
              Warranty Protection - Extended warranty on all repairs and
              products
            </li>
            <li>Customer Support - Dedicated team available 7 days a week</li>
          </ul>
        </div>

        <div id="why-us-card">
          <img src={banner03} alt="banner" />
        </div>
      </div>

    
    </>
  );
}

export default Services;
