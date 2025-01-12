import React from "react";
import banner01 from "../../assets/home01.jpeg";
import person01 from "../../assets/person.jpeg";
import person02 from "../../assets/person02.jpeg";
import { MdOutlinePhone } from "react-icons/md";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { MdOutlineMail } from "react-icons/md";
import "./About.css";

function About() {
  return (
    <>
      <div className="container-fluid" id="about-page">
        <h4>About Us</h4>
      </div>
      <div className="container" id="about-page-box">
        <div class="row">
          <div class="col-lg-6 col-md-4">
            <div id="about-page-card">
              <h2>Who Are We ?</h2>
              <h3>
                Met consectetur adipisicing elit. Iste eius saepe sequi
                consectetur
              </h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
                eius saepe sequi consectetur ipsa! Fuga, et minima ea dicta
                quidem eaque quo. Cumque nam dolorum fugiat. Cupiditate magnam
                laborum culpa? Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Iste eius saepe sequi consectetur ipsa! Fuga,
                et minima ea dicta quidem eaque quo. Cumque nam dolorum fugiat.
                Cupiditate magnam laborum culpa?
              </p>
              <p id="about-small">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
                eius saepe sequi consectetur ipsa! Fuga, et minima ea dicta
                quidem eaque quo. Cumque nam dolorum fugiat. Cupiditate magnam
                laborum culpa? Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Iste eius saepe sequi consectetur ipsa! Fuga,
                et minima ea dicta quidem eaque quo. Cumque nam dolorum fugiat.
                Cupiditate magnam laborum culpa?
              </p>
            </div>
          </div>
          <div class="col-lg-6 col-md-4">
            <div id="about-page-card">
              <img src={banner01} alt="banner" />
            </div>
          </div>
        </div>
      </div>
      <div className="container" id="about-team-card">
        <h2>Meet Our Team Of Experts</h2>
        <div class="row">
          <div class="col-lg-4 col-md-4">
            <div id="team-card">
              <img src={person01} alt="person" />
              <h6>Chief Technical Officer</h6>
              <div id="team-card-icons">
                <MdOutlinePhone id="team-icons" />
                <AiOutlineWhatsApp id="team-icons" />
                <MdOutlineMail id="team-icons" />
              </div>
              <p>C. Mhosira</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="team-card">
              <img src={person02} alt="person" />
              <h6>Marketing Manager</h6>
              <div id="team-card-icons">
                <MdOutlinePhone id="team-icons" />
                <AiOutlineWhatsApp id="team-icons" />
                <MdOutlineMail id="team-icons" />
              </div>
              <p>Jane Doe</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="team-card">
              <img src={person01} alt="person" />
              <h6>Marketing Manager</h6>
              <div id="team-card-icons">
                <MdOutlinePhone id="team-icons" />
                <AiOutlineWhatsApp id="team-icons" />
                <MdOutlineMail id="team-icons" />
              </div>
              <p>John Doe</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container" id="asked-qtns">
        <h2>Frequent Asked Questions</h2>
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                How long does a typical phone repair take?
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Most repairs are completed within 1-2 hours, with complex
                repairs taking up to 24 hours. We prioritize quick turnaround
                while ensuring quality work. You'll receive regular updates
                about your repair status, and we'll notify you immediately once
                your device is ready for pickup.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Do you provide warranty on repairs?
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Yes, all our repairs come with a 90-day warranty covering both
                parts and labor. If you experience any issues related to our
                repair work within this period, we'll fix it free of charge.
                This warranty demonstrates our confidence in our work and
                commitment to your satisfaction.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                What types of payment methods do you accept?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                We accept multiple payment methods for your convenience,
                including cash, all major credit/debit cards, bank transfers,
                and mobile payment solutions. We also offer flexible payment
                plans for larger repairs or device purchases to make our
                services more accessible.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour"
              >
                Do you use original/genuine parts for repairs?
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Absolutely! We only use high-quality genuine or
                manufacturer-certified replacement parts for all our repairs.
                This ensures optimal performance, maintains your device's value,
                and provides long-lasting results. Each part comes with its own
                warranty for your peace of mind.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFive"
                aria-expanded="false"
                aria-controls="flush-collapseFive"
              >
                How does your freight service work?
              </button>
            </h2>
            <div
              id="flush-collapseFive"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Our freight service provides secure, tracked shipping for
                devices nationwide. Once you book a shipment, we provide
                protective packaging, real-time tracking, and insurance
                coverage. Most deliveries are completed within 2-3 business
                days, and you'll receive regular updates throughout the shipping
                process.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
