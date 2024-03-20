import React from "react";
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Nav_bars from "./nav.js";
import Home from "./home.js";
import About from "./about.js";
import Portfolio from './portfolio.js';
import Blogs from './blogs.js';
import Contact from './contact.js';
import Footer from "./footer.js";


function App() {
  return (
    <div className="App">


      <BrowserRouter>
        <Nav_bars />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
