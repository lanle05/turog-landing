import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

//Pages
const Home = React.lazy(() => import("./pages/Home"));

//Components
const Navbar = React.lazy(() => import("./components/Navbar"));
const Footer = React.lazy(() => import("./components/Footer"));

function App() {
  
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App
