import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./pages/About";
import Error404 from "./pages/Error404";
import OurWork from "./pages/OurWork";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Donate from "./pages/Donate";

import OurStory from "./pages/OurStory";
import WhoWeAre from "./pages/WhoWeAre";

function App() {
  const location = useLocation();

  const hideHeaderAndFooter =
    location.pathname.includes("create-account") ||
    location.pathname.includes("login") ||
    location.pathname.includes("donate");

  return (
    <div className="">
      <ToastContainer />
      {!hideHeaderAndFooter && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<Signup />} />
        <Route path="/donate" element={<Donate />} />

        

        <Route path="/our-story" element={<OurStory />} />
        <Route path="/whoWeAre" element={<WhoWeAre />} />

        <Route path="*" element={<Error404 />} />
      </Routes>
      {!hideHeaderAndFooter && <Footer />}
    </div>
  );
}

export default App;
