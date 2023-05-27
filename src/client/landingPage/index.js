import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import DoctorList from "./doctor/DoctorList";
import Home from "./home/Home";

function LandingPage() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/doctorDetails" element={<DoctorList />}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
