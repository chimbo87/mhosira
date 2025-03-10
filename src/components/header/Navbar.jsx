import React, { useState } from "react";
import "./Navbar.css";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import userlogo from "../../assets/mobilelogo.png";
import { useNavigate, useLocation } from "react-router-dom";

import { MdLocationPin } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FiFacebook } from "react-icons/fi";
import { TbBrandTiktok } from "react-icons/tb";
import { MdCall } from "react-icons/md";

function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname);

  const handleNavClick = (path) => {
    setActiveItem(path);
    setIsNavCollapsed(true);
    navigate(path);
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div id="nav-top-box">
          <div id="nav-top-wrap">
            <div id="nav-top-card">
              <small>
                <MdEmail /> mobilelandx@gmail.com
              </small>
            </div>
            <div id="nav-top-card">
              <small id="nav-top-cardsmall">
                <MdLocationPin /> Cnr Cameron & J Moyo, Dubai mall shop #F1
              </small>
            </div>
            <div id="nav-top-card">
              <small id="nav-top-cardsmall">
                <MdCall /> +26377 360 9855 /{" "}
              </small>
              <small id="nav-top-cardsmall"> +26371 367 6303</small>
            </div>
            <div id="nav-top-card">
              <small>
                <a
                  href="https://www.instagram.com/mobileland_investments?igsh=MWUyMWd6d2ZkYWRlZQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram style={{color:"green"}}/>
                </a>{" "}
                <a
                  href="https://www.facebook.com/Mobileland.zw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiFacebook style={{color:"green"}}/>
                </a>{" "}
                <a
                  href="https://wa.me/263773609855?text=Hello%20MobilelandInvestments,%20I%20would%20like%20to%20enquire%20about%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp style={{color:"green"}}/>
                </a>
              </small>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div id="logo-box">
            <img
              src={userlogo}
              alt="logo"
              onClick={() => handleNavClick("/")}
            />
          </div>
          <div id="nav-chat-btn">
            <button
              onClick={() =>
                window.open(
                  "https://wa.me/263773609855?text=Hello%20MobilelandInvestments,%20I%20would%20like%20to%20enquire%20about%20your%20services",
                  "_blank"
                )
              }
            >
              Let's Chat <FaWhatsapp />
            </button>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsNavCollapsed(!isNavCollapsed)}
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={!isNavCollapsed}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li
                className={`nav-item ${activeItem === "/" ? "active" : ""}`}
                onClick={() => handleNavClick("/")}
              >
                <a
                  className="nav-link"
                  aria-current="page"
                  href="#"
                  id="nav-link"
                >
                  home
                </a>
              </li>
              <li
                className={`nav-item ${
                  activeItem === "/services" ? "active" : ""
                }`}
                onClick={() => handleNavClick("/services")}
              >
                <a
                  className="nav-link"
                  aria-current="page"
                  href="#"
                  id="nav-link"
                >
                  services
                </a>
              </li>
              <li
                className={`nav-item ${
                  activeItem === "/about" ? "active" : ""
                }`}
                onClick={() => handleNavClick("/about")}
              >
                <a
                  className="nav-link"
                  aria-current="page"
                  href="#"
                  id="nav-link"
                >
                  about
                </a>
              </li>
              <li
                className={`nav-item ${
                  activeItem === "/our-shop" ? "active" : ""
                }`}
                onClick={() => handleNavClick("/our-shop")}
              >
                <a
                  className="nav-link"
                  aria-current="page"
                  href="#"
                  id="nav-link"
                >
                  shop
                </a>
              </li>
            </ul>
            <div id="nav-btn">
              <button
                onClick={() =>
                  window.open(
                    "https://wa.me/263773609855?text=Hello%20MobilelandInvestments,%20I%20would%20like%20to%20enquire%20about%20your%20services",
                    "_blank"
                  )
                }
              >
                Let's Chat
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
