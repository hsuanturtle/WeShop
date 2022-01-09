import React, { useLayoutEffect } from "react";
import FeaturedProducts from "../components/FeaturedProducts";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
const HomePage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Contact/>
    </main>
  );
};

export default HomePage;
