import React from "react";
import Header from "./header";
import Slider from "./slider";
import Product from "./product";
import Footer from "./footer";

function Home(props) {
  return (
    <div>
      <Header />
      <Slider />
      <Product />
      <Footer />
    </div>
  );
}

export default Home;
