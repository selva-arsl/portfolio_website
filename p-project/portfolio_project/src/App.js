import React from "react";
import './App.css';
import Nav_bar from './navbar.js';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./home.js";
import About from "./about.js";
import Portfolio from './portfolio.js';
import Blogs from './blogs.js';
import Contact from './contact.js';

function App() {
  return (
    <div className="App">


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>





      <Nav_bar />
      {/* <Home />
      <About />
      <Portfolio />
      <Blogs />
      <Contact /> */}

    </div>
  );
}

export default App;
