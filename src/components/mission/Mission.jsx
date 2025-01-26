import React from "react";
import banner01 from "../../assets/home03.jpeg";
import { useNavigate } from "react-router-dom";
import LazyLoad from "react-lazyload";
import "./Mission.css";

function Mission() {
  const navigate = useNavigate();
  return (
    <div className="container" style={{ marginTop: "20px" }}>
      <div class="row">
        <div class="col-lg-6 col-md-12">
          <div id="mission-card">
            <h5>MOBILELAND REPAIRS</h5>
            <h2>
              With over{" "}
              <i>
                <b>10 years</b>
              </i>{" "}
              of Service
            </h2>
            <p>
              As a trusted leader in mobile device solutions and freight
              services, we've built our reputation on excellence and
              reliability. Since 2007, we've successfully repaired over 20,000
              devices and delivered efficient, cost-effective freight solutions
              to businesses and individuals alike. Our certified technicians
              handle everything from cracked screens to complex motherboard
              issues with genuine parts and a solid warranty. 
            </p>
            <p id="mission-text-mobile">
            We’re committed to
              transparency, offering upfront pricing and the best care for your
              devices. In addition to repairs, we provide a wide range of
              freight services, including road, air, and sea transport, ensuring
              your goods are delivered on time and securely. Whether you need a
              device repaired or freight shipped, our experienced team is here
              to provide the perfect solution. Your satisfaction is our
              legacy—built through reliable service, one repair and shipment at
              a time.
            </p>
            <button
              onClick={() => {
                navigate("/about");
              }}
            >
              Read More
            </button>
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <LazyLoad>
            <div id="mission-card">
              <img src={banner01} alt="banner" />
            </div>
          </LazyLoad>
        </div>
      </div>
    </div>
  );
}

export default Mission;
