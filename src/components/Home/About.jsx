import React from "react";

const About = () => {
  return (
    <>
      <section className="about">
        <div className="about-section">
          <h1 className="about-section__head">About Us</h1>
          <p className="about-section__desc">
            TUROG Technologies excels in navigating businesses through the
            ever-evolving digital landscape. We offer services in digital
            strategy consulting, custom software development, web and mobile app
            development, digital marketing, and cloud solutions to help
            companies achieve their business goals swiftly and efficiently. Our
            expert team specializes in enhancing digital capabilities and
            optimizing investments.
          </p>
          <div className="about-section__image">
            <img
              src="/about/review.jpg"
              alt="man review"
              className="about-section__image-img"
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
