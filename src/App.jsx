import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";

import Footer from "./component/footer/Footer";
// import { About, Contact, Home, Media } from "./pages/index";
import About from "./pages/aboutUs/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Media from "./pages/media/Media";

function App() {
  return (
    <>
      <div>
        <Router>
          {<Navbar />}
          <Routes>
            {/* <Route element={<Layout />} /> */}
            <Route path="/" element={<Home />} />

            <Route path="/aboutUs" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/media" element={<Media />} />
          </Routes>
          {<Footer />}
        </Router>
      </div>
    </>
  );
}

export default App;
