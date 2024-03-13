import React from "react";
import './App.css';
import Nav_bar from './navbar.js';
import Home from "./home.js";
import About from "./about.js";
import Portfolio from './portfolio.js';
import Blogs from './blogs.js';
import Contact from './contact.js';

function App() {
  return (
    <div className="App">
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
