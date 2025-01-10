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
              <MdOutlinePhone  id="team-icons"/>
              <AiOutlineWhatsApp  id="team-icons"/>
              <MdOutlineMail id="team-icons"/>
              </div>
              <p>C. Mhosira</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="team-card">
              <img src={person02} alt="person" />
              <h6>Marketing Manager</h6>
              <div id="team-card-icons">
              <MdOutlinePhone  id="team-icons"/>
              <AiOutlineWhatsApp  id="team-icons"/>
              <MdOutlineMail id="team-icons"/>
              </div>
              <p>Jane Doe</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="team-card">
              <img src={person01} alt="person" />
              <h6>Marketing Manager</h6>
              <div id="team-card-icons">
              <MdOutlinePhone  id="team-icons"/>
              <AiOutlineWhatsApp  id="team-icons"/>
              <MdOutlineMail id="team-icons"/>
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
                Question 1
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                first item's accordion body.
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
               Where are you located ?
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                second item's accordion body. Let's imagine this being filled
                with some actual content.
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
                Accordion Item #3
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                third item's accordion body. Nothing more exciting happening
                here in terms of content, but just filling up the space to make
                it look, at least at first glance, a bit more representative of
                how this would look in a real-world application.
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
                Accordion Item #3
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                third item's accordion body. Nothing more exciting happening
                here in terms of content, but just filling up the space to make
                it look, at least at first glance, a bit more representative of
                how this would look in a real-world application.
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
                Accordion Item #3
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                third item's accordion body. Nothing more exciting happening
                here in terms of content, but just filling up the space to make
                it look, at least at first glance, a bit more representative of
                how this would look in a real-world application.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
