import React from "react";
import "./Footer.css";
import { GrLocation } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlinePhone } from "react-icons/md";
import { FiFacebook } from "react-icons/fi";
import { SlUserFollow } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { RiTiktokLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import userlogo from "../../assets/logo2.png";

function Footer() {
  return (
    <div className="container-fluid" id="footer-page">
      <h4>Get In Touch With Us</h4>
      <div class="row">
        <div class="col-lg-3 col-md-4">
          <div id="footer-page-card">
            <h5>
              <GrLocation /> Address
            </h5>
            <p>
              Cnr Cameron & J Moyo Road<br></br>Dubai Mall, Shop No# F1<br></br>Harare Zimbabwe
            </p>
          </div>
        </div>
        <div class="col-lg-3 col-md-4">
          <div id="footer-page-card">
            <h5>
              <HiOutlineMail /> Emails
            </h5>
            <p>
              mobilelandx@gmail.com<br></br>
              mhosirax@gmail.com<br></br>
            </p>
          </div>
        </div>
        <div class="col-lg-3 col-md-4">
          <div id="footer-page-card">
            <h5>
              <MdOutlinePhone /> Phone
            </h5>
            <p>
              +26377 360 9855<br></br> +26371 367 6303 <br></br> +26377 508 0424
            </p>
          </div>
        </div>
        <div class="col-lg-3 col-md-4">
          <div id="footer-page-card">
            <h5>
              <SlUserFollow /> Follow Us
            </h5>
            <img src={userlogo} alt="logo" />
            <div>
              <FiFacebook id="footer-icon" />
              <FaInstagram id="footer-icon" />
              <RiTiktokLine id="footer-icon" />
              <FaWhatsapp id="footer-icon" />
            </div>
          </div>
        </div>
      </div>
      <div id="footer-icons-cards" className="container">
        <p style={{color:"white", marginTop:"10px"}}> &copy; Mobileland 2025</p>
        <div id="footer-rtys">
          <small>
            Crafted by:
            <a
              href="https://wa.me/27677366141"
              target="_blank"
              style={{ color: "#f1975b", marginLeft:"5px"}}
            >
             CHIMBO
            </a>
          </small>
        </div>
      </div>
    </div>
  );
}

export default Footer;
