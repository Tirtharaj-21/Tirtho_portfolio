import React from "react";
import "../styling/home.css";
import portpic from "../assets/Picture.jpeg";

const Home = () => {
  return (
    <section className="home" id="home">
      {/* Left Content */}
      <div className="home-content">
        <button className="tag-btn">Welcome to my portfolio</button>

        <h1>
          Hi, I'm <br />
          <span>Tirtharaj Goswami</span>
        </h1>

        <h3>ECE Graduate | Web Developer | Tech Enthusiast</h3>

        <p>
          I build modern web applications, explore new technologies, and
          continuously challenge myself to grow as a developer.
        </p>

        <div className="home-buttons">
          <button className="primary-btn">
            <a
              href="https://github.com/Tirtharaj-21"
              target="_blank"
              rel="noreferrer"
            >
              View Github
            </a>
          </button>
          <button
            className="secondary-btn"
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact Me
          </button>

          <div className="download">
            <a href="./src/TIRTHARAJ_GOSWAMI.PDF" download>
              <i className="fa-solid fa-download"></i>Download cv
            </a>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="home-image">
        <img src={portpic} alt="portfolio" />
      </div>
    </section>
  );
};

export default Home;
