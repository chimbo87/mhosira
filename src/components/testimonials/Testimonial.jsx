import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { IoMdStar } from "react-icons/io";
import { LuClock4 } from "react-icons/lu";
import { BsGear } from "react-icons/bs";
import { AiOutlineUsergroupAdd } from "react-icons/ai";

import "./Testimonial.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Sarah Jaiors",
    role: "Glen View, Harare",
    quote:
      "After cracking my iPhone 13 Pro screen, I was devastated. The team fixed it within 2 hours and it looks brand new! The price was fair and the service was professional. Definitely coming back!",
    rating: 5,
  },
  {
    name: "Michael Musi",
    role: "Msasa, Harare",
    quote:
      "Had an issue with my Samsung Galaxy not charging properly. They diagnosed the problem quickly and replaced the charging port. Been working perfectly for 3 months now. Great service",
    rating: 4,
  },
  {
    name: "Emily Tinashe",
    role: "Gutu, Chivhu",
    quote:
      "Cannot recommend them enough! My phone had water damage and other shops said it couldn't be fixed. These guys managed to save all my data and get my phone working again. True professionals!",
    rating: 5,
  },
  {
    name: "David Smith",
    role: "Muti, Marondera",
    quote:
      "Quick, reliable, and honest service. They fixed my iPad's broken home button in under an hour and even cleaned the device for free. The warranty they offer gives great peace of mind",
    rating: 4,
  },
  {
    name: "Lisa Tumi",
    role: "Kwekwe",
    quote:
      "My Google Pixel was stuck in a boot loop and I thought I'd lost everything. Their technician not only fixed the issue but explained what caused it and how to prevent it. Very knowledgeable team!",
    rating: 5,
  },
  {
    name: "James Banda",
    role: "Glen, Shamva",
    quote:
      "Best phone repair shop in town! They replaced my OnePlus battery and screen protector. The prices are reasonable, and the quality is excellent. The staff is friendly and explains everything clearly.",
    rating: 4,
  },
];

function Testimonial() {
  return (
    <div className="container">
      <div id="testimony-top">
        <div id="testimony-top-card">
          <h2>
            Join thousands of satisfied customers who trust us with their
            devices every day
          </h2>
          <p>
            From quick repairs to quality parts, we deliver expert service with
            a personal touch. Our certified technicians have successfully
            restored over 3,000 devices, giving your gadgets the care they
            deserve at prices you can trust.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-4">
          <div id="testimonial-offer">
            <LuClock4 id="testimonial-offer-icon" />
            <h4>10+ Years</h4>
            <p>Experience</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-4">
          <div id="testimonial-offer">
            <BsGear id="testimonial-offer-icon" />
            <h4>2000+ Projects</h4>
            <p>Completed</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-4">
          <div id="testimonial-offer">
            <AiOutlineUsergroupAdd id="testimonial-offer-icon" />
            <h4>200+ Happy</h4>
            <p>Customers</p>
          </div>
        </div>
      </div>
      <div id="testimonial-header">
        <h4>What Our Clients Say About Us</h4>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="pb-12"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div class="row" id="testimonial-card">
                <div id="testimonial-card-star">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <IoMdStar key={i} id="testimonial-rate-star" />
                  ))}
                </div>
                <p id="testimonial-quote">"{testimonial.quote}"</p>
                <div id="testimonial-card-user">
                  <h5>{testimonial.name}</h5>
                  <p>
                    <i>{testimonial.role}</i>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonial;
