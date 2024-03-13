import './App.css';
import Home from "./home.js";
import About from "./about.js";
import Portfolio from './portfolio.js';
import Blogs from './blogs.js';
import Contact from './contact.js';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Portfolio />
      <Blogs />
      <Contact />

    </div>
  );
}

export default App;
