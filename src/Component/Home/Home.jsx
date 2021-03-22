import React, { Fragment } from "react";
import Footer from "./Footer";
import Listing from "./Listing";
import Header from "./Header";
import HeroSecton from "./HeroSection";
import Testimonial from "./Testimonal";
import Venue from "./Venue";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSecton />
      <Venue />
      <Testimonial />
      <Listing />
      <Footer />
    </Fragment>
  );
};

export default Home;
