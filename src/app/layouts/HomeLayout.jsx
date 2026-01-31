import { Outlet } from "react-router-dom";
import Header from "../../shared/header/Header";
import Footer from "../../shared/Footer";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeLayout;
