import React from "react";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Stats from "../components/Home/Stats";
import Offerings from "../components/Home/Offerings";
import Testimonials from "../components/Home/Testimonials";
import FAQ from "../components/Home/FAQ";
import Mission from "../components/Home/Mission";
import Blog from "../components/Home/Blog";

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
