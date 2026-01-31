import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import React, { useEffect } from "react";

//Pages
const Home = React.lazy(() => import("./pages/Home"));
const Esi = React.lazy(() => import("./pages/Services/EnterpriseSystemsImplementation"));
const Eai = React.lazy(() => import("./pages/Services/EnterpriseApplicationIntegration"));
const Iam = React.lazy(() => import("./pages/Services/IdentityAccessManagement"));
const About = React.lazy(() => import("./pages/Company/About"));

//Layouts
const HomeLayout = React.lazy(() => import("./app/layouts/HomeLayout"));
const ServiceLayout = React.lazy(() => import("./app/layouts/ServiceLayout"));

function ScrollToTop() {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    if (hash) return;

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, search, hash]);

  return null;
}

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route element={<HomeLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route element={<ServiceLayout />}>
            <Route path="/enterprise-systems-implementation" element={<Esi />} />
            <Route path="/enterprise-application-integration" element={<Eai />} />
            <Route path="/identity-access-management" element={<Iam />} />
            <Route path="/company/about" element={<About />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
