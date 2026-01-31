import React from "react";
import Hero from "../widgets/Home/Hero";
import About from "../widgets/Home/About";
import Stats from "../widgets/Home/Stats";
import Offerings from "../widgets/Home/Offerings";
import Testimonials from "../widgets/Home/Testimonials";
import FAQ from "../widgets/Home/FAQ";
import Mission from "../widgets/Home/Mission";
import Blog from "../widgets/Home/Blog";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      <Offerings />
      <Testimonials />
      <FAQ />
      <Mission />
      <Blog />
    </>
  );
}

export default Home;
