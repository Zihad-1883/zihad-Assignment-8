
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const Homepage = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      {children}
      <Footer></Footer>
    </>
  );
};

export default Homepage;