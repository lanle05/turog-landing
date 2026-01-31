import DefaultHero from "../../app/services/DefaultHero";
import TeamSection from "../../widgets/Company/About/TeamSection";
import AboutUsSection from "../../widgets/Company/About/AboutUsSection";
import Gallery from "../../widgets/Company/About/Gallery";

const About = () => {
  return (
    <>
      <DefaultHero
        title="About Us"
        subtitle="TUROG Technologies excels in navigating businesses through the ever-evolving digital landscape. We offer services in digital strategy consulting, custom software development, web and mobile app development, digital marketing, and cloud solutions to help companies achieve their business goals swiftly and efficiently. Our expert team specialises in enhancing digital capabilities and optimising investments."
        imageSrc="/services/eai/hero-image.webp"
      />
      <AboutUsSection />
      <TeamSection />
      <Gallery />
    </>
  );
};

export default About;
