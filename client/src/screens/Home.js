import React from "react";
import { Header, Carousel, News, Footer } from "../components/mollecules";
import { Discover } from "../components/organismes";

function Home() {
  return (
    <div>
      <Header.LaptopHeader />
      <Carousel.Carousel />
      <Discover.Discover />
      <News.News />
      <Footer.laptopFooter />
    </div>
  );
}

export default Home;
