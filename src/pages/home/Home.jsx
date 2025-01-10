import React from "react";
import Hero from "../../components/hero/Hero";
import Offer from "../../components/offer/Offer";
import Mission from "../../components/mission/Mission";
import Testimonial from "../../components/testimonials/Testimonial";
import Shop from "../../components/shop/Shop";

function Home() {
  return (
    <>
      <Hero />
      <Offer />
      <Mission />
      <Shop/>
      <Testimonial />
    
    </>
  );
}

export default Home;
