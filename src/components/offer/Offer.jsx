import React from "react";
import { GiAutoRepair } from "react-icons/gi";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { BsCart4 } from "react-icons/bs";
import "./Offer.css";

function Offer() {
  return (
    <div className="container">
      <div class="row">
        <div class="col-lg-4 col-md-4">
          <div id="offer-card">
           
            <GiAutoRepair  id="offer-card-icon"/>
            <h5>Phone Repair</h5>
          </div>
        </div>
        <div class="col-lg-4 col-md-4">
          <div id="offer-card">
        
            <HiOutlineDevicePhoneMobile id="offer-card-icon"/>
            <h5>Cell Phones & Accessories</h5>
          </div>
        </div>
        <div class="col-lg-4 col-md-4">
          <div id="offer-card">
            
            <BsCart4 id="offer-card-icon"/>
            <h5>Freight Services</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;
