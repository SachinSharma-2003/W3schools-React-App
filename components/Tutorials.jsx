import React from "react";
import { Link } from "react-router-dom";

const tutorialLinks = [
  { name: "HTML", path: "/html" },
  { name: "CSS", path: "/css" },
  { name: "JavaScript", path: "/javascript" },
  { name: "Python", path: "/python" },
  { name: "SQL", path: "/sql" },
  { name: "Java", path: "/java" },
  { name: "PHP", path: "/php" },
  { name: "React", path: "/react" },
  { name: "Bootstrap", path: "/bootstrap" },
  { name: "Excel", path: "/excel" },
  { name: "jQuery", path: "/jquery" },
  { name: "DSA", path: "/dsa" },
  { name: "Git", path: "/git" },
  { name: "MongoDB", path: "/mongodb" },
  { name: "AI", path: "/ai" },
  { name: "Gen AI", path: "/genai" },
  { name: "R", path: "/r" },
  { name: "TypeScript", path: "/typescript" },
];

const Tutorials = () => {
  return (
    <div>
      {/* ✅ Navbar */}
      <nav id="nav-home">
        <Link to="/"><img src="w3schools.png" alt="Logo" id="logo" /></Link>
        <Link to="/" className="nav-item">Tutorials</Link>
        <Link to="/exercises" className="nav-item">Exercises</Link>
        <Link to="/certificates" className="nav-item">Certificates</Link>
        <Link to="/services" className="nav-item">Services</Link>

        <div id="nav-actions">
          <Link to="/upgrade" className="nav-item2"><img src="star.png" alt="star" />Upgrade</Link>
          <Link to="/get-certified" className="nav-item2"><img src="cart.png" alt="cart" />Get Certified</Link>
          <Link to="/signin">
            <button id="nav-signin"><img src="person.png" alt="" />Sign in</button>
          </Link>
        </div>
      </nav>

      {/* ✅ Hero section */}
      <div>
        <h1 className="hero-title">Learn to Code</h1>
        <h2 className="hero-sub-title">With the world's largest web developer site.</h2>
      </div>

      <input type="text" id="search" placeholder="Search our tutorials, e.g. HTML" />
      <button id="search-button">
        <img src="search-icon.png" alt="search-icon" id="search-icon" />
      </button>

      {/* ✅ Tutorials buttons */}
      <nav>
        <ul>
          {tutorialLinks.map((item, index) => (
            <button key={index} className="nav-button">
              <li><Link to={item.path}>{item.name}</Link></li>
            </button>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Tutorials;
