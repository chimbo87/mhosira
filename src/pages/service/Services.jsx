import React, { useState } from "react";
import "./Services.css";
import banner01 from "../../assets/service02.jpeg";
import banner03 from "../../assets/service.03.jpeg";
import banner02 from "../../assets/service01.jpeg";
import banner04 from "../../assets/home03.jpeg";
import { useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoArrowForward } from "react-icons/io5";
import { Input, Modal } from "antd";
const { TextArea } = Input;

function Services() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
                impedit incidunt, nesciunt harum distinctio in veritatis dolor
                dolorem corporis. Soluta, dicta esse. Optio amet omnis, dicta
                culpa voluptate facilis perferendis?
              </p>
              <button>Get A Quote <FaArrowRightLong /></button>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="service-card">
              <img src={banner02} alt="banner" />
              <h4>We Sell Phones & Accessories</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
                impedit incidunt, nesciunt harum distinctio in veritatis dolor
                dolorem corporis. Soluta, dicta esse. Optio amet omnis, dicta
                culpa voluptate facilis perferendis?
              </p>
              <button  onClick={() => {
                  navigate("/our-shop");
                }}>Shop With Us <FaArrowRightLong /></button>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="service-card">
              <img src={banner01} alt="banner" />
              <h4>We Do Freight Services</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
                impedit incidunt, nesciunt harum distinctio in veritatis dolor
                dolorem corporis. Soluta, dicta esse. Optio amet omnis, dicta
                culpa voluptate facilis perferendis?
              </p>
              <button  onClick={() => {
                  navigate("/our-shop");
                }}>Order With Us <FaArrowRightLong /></button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid" id="service-banner">
        <div className="container" id="service-banner-box">
          <h4>
            Minus impedit incidunt, nesciunt harum distinctio in veritatis dolor
            dolorem corporis. Soluta, dicta esse. Optio amet omnis, dicta culpa
            voluptate facilis perferendis?
          </h4>
          <button onClick={showModal}>
            Send Us Message <IoArrowForward />
          </button>
        </div>
      </div>
      <div className="container" id="why-us">
        <div class="row">
          <div class="col-lg-6 col-md-4">
            <div id="why-us-card">
              <h4>Why Choose Mobileland ?</h4>
              <ul>
                <li>Quality Assurance</li>
                <li>Fast Service delivery</li>
                <li>Affordable Payment</li>
                <li>We Reach Every Corner</li>
                <li>Fast Service delivery</li>
                <li>Quality Assurance</li>
                <li>We Reach Every Corner</li>
                <li>Fast Service delivery</li>
                <li>Quality Assurance</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6 col-md-4">
            <div id="why-us-card">
              <img src={banner03} alt="banner" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <Modal
          title="Get In Touch With Us"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div id="input-card">
            <div id="nav-input-card">
              <Input placeholder="Full Name" size="large" />
            </div>
            <div id="nav-input-card">
              <Input placeholder="Phone Number" size="large" />
            </div>
            <div id="nav-input-card">
              <TextArea rows={4} placeholder="Message" maxLength={6} />
            </div>
          </div>
        </Modal>
      </div>
      <div></div>
    </>
  );
}

export default Services;
