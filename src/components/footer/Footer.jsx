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
              <span></span>Address<span></span>
            </h5>
            <p>
              Cnr Cameron & J Moyo Road<br></br>Dubai Mall, Shop No# F1<br></br>
              Harare Zimbabwe
            </p>
          </div>
        </div>
        <div class="col-lg-3 col-md-4">
          <div id="footer-page-card">
            <h5>
              <span></span>Emails<span></span>
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
              <span></span>Phone<span></span>
            </h5>
            <p>
              +26377 360 9855<br></br> +26371 367 6303 <br></br> +26377 508 0424
            </p>
          </div>
        </div>
        <div class="col-lg-3 col-md-4">
          <div id="footer-page-card">
            <h5>
              <span></span>Our Services<span></span>
            </h5>
            <p>
              Phone Repairs<br></br> Phone Accessories<br></br> Freight Services
            </p>
            {/* <img src={userlogo} alt="logo" />
            <div>
              <FiFacebook id="footer-icon" />
              <FaInstagram id="footer-icon" />
              <RiTiktokLine id="footer-icon" />
              <FaWhatsapp id="footer-icon" />
            </div> */}
          </div>
        </div>
      </div>
      <div id="footer-icons-cards" className="container">
        <div>
          <FiFacebook id="footer-icon" />
          <FaInstagram id="footer-icon" />
          <RiTiktokLine id="footer-icon" />
          <FaWhatsapp id="footer-icon" />
        </div>
        <small style={{ color: "#faebd7" }}>
          &copy; Mobileland 2025 Crafted by:
          <a
            href="https://wa.me/27677366141"
            target="_blank"
            style={{
              color: "#0b5d0b",
              marginLeft: "5px",
              border: "1px solid #faebd7",
              backgroundColor: "#faebd7",
              textDecoration: "none",
              borderRadius:"2px"
            }}
          >
            chimbo
          </a>
        </small>
      </div>
    </div>
  );
}

export default Footer;
