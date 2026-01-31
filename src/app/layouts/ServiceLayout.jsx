import { Outlet } from "react-router-dom";
import Header from "../../shared/header/Header";
import Footer from "../../shared/Footer";
import ServiceCtaSection from "../../shared/services/ServiceCtaSection";

const ServiceLayout = () => {
  return (
    <>
      <Header variant="solid" />
      <Outlet />
      <ServiceCtaSection />
      <Footer />
    </>
  );
};

export default ServiceLayout;
