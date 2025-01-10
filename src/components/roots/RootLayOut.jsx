import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../header/Navbar";
import Footer from "../footer/Footer";

function RootLayOut() {
  return (
    <div>
      <div>
        <div>
       <Navbar/>
          <ScrollRestoration />
        </div>
        <main>
          <Outlet />
          <Footer/>
        </main>
      </div>
    </div>
  );
}

export default RootLayOut;
