import React, { useEffect, useState } from "react";
import "../styling/home.css";
import portpic from "../assets/Picture.jpeg";
import cv from "../TIRTHARAJ_GOSWAMI.pdf";

const ROLES = ["ECE Graduate", "Web Developer", "Tech Enthusiast"];

// Icons that orbit around the photo (Font Awesome brand icons, already loaded in index.html)
const ORBIT_ICONS = [
  { icon: "fa-react", color: "#38bdf8", label: "React" },
  { icon: "fa-js", color: "#eab308", label: "JavaScript" },
  { icon: "fa-java", color: "#e76f00", label: "Java" },
  { icon: "fa-node-js", color: "#22a05a", label: "Node.js" },
  { icon: "fa-html5", color: "#e34f26", label: "HTML5" },
];

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Types a word, pauses, deletes it, then moves to the next one.
function useTypewriter(words) {
  const [text, setText] = useState("");

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer;

    const tick = () => {
      const word = words[wordIndex];
      charIndex += deleting ? -1 : 1;
      setText(word.slice(0, charIndex));

      let delay = deleting ? 45 : 95;
      if (!deleting && charIndex === word.length) {
        delay = 1500; // pause on the full word
        deleting = true;
      } else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 350;
      }
      timer = setTimeout(tick, delay);
    };

    timer = setTimeout(tick, 1000);
    return () => clearTimeout(timer);
  }, [words]);

  return prefersReducedMotion() ? words.join(" | ") : text;
}

const Home = () => {
  const typed = useTypewriter(ROLES);

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // 3D tilt: the photo leans towards the mouse pointer
  const handleTilt = (e) => {
    const box = e.currentTarget;
    const tilt = box.firstElementChild;
    if (!tilt) return;
    const rect = box.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    tilt.style.transform = `rotateY(${x * 22}deg) rotateX(${-y * 22}deg) scale(1.04)`;
  };

  const resetTilt = (e) => {
    const tilt = e.currentTarget.firstElementChild;
    if (tilt) tilt.style.transform = "";
  };

  return (
    <section className="home" id="home">
      {/* Decorative animated background blobs */}
      <span className="blob blob-1" aria-hidden="true" />
      <span className="blob blob-2" aria-hidden="true" />

      {/* Left Content */}
      <div className="home-content">
        <span className="tag-btn anim anim-1">
          <i className="tag-dot" aria-hidden="true" />
          Welcome to my portfolio
        </span>

        <h1 className="anim anim-2">
          Hi, I'm <span className="wave">👋</span>
          <br />
          <span className="name-gradient">Tirtharaj Goswami</span>
        </h1>

        <h3 className="designation anim anim-3">
          {/* full text for screen readers / SEO; the typed text is decorative */}
          <span className="sr-only">
            ECE Graduate | Web Developer | Tech Enthusiast
          </span>
          <span aria-hidden="true">
            <span className="typed">{typed}</span>
            <span className="cursor" />
          </span>
        </h3>

        <p className="anim anim-4">
          I build modern web applications, explore new technologies, and
          continuously challenge myself to grow as a developer.
        </p>

        <div className="home-buttons anim anim-5">
          <a
            className="primary-btn"
            href="https://github.com/Tirtharaj-21"
            target="_blank"
            rel="noreferrer"
          >
            View Github
          </a>

          <button
            type="button"
            className="secondary-btn"
            onClick={scrollToContact}
          >
            Contact Me
          </button>

          <a className="download" href={cv} download="TIRTHARAJ_GOSWAMI.pdf">
            <i className="fa-solid fa-download"></i>Download cv
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div
        className="home-image anim-image"
        onMouseMove={handleTilt}
        onMouseLeave={resetTilt}
      >
        <div className="image-tilt">
          {/* glowing conic ring */}
          <div className="image-ring" aria-hidden="true" />

          {/* orbiting tech icons */}
          <div className="orbit" aria-hidden="true">
            {ORBIT_ICONS.map((item, i) => (
              <span
                key={item.icon}
                className="orbit-item"
                style={{ "--a": `${i * (360 / ORBIT_ICONS.length)}deg` }}
              >
                <span className="orbit-icon" title={item.label}>
                  <i
                    className={`fa-brands ${item.icon}`}
                    style={{ color: item.color }}
                  />
                </span>
              </span>
            ))}
          </div>

          <div className="image-float">
            <img src={portpic} alt="Tirtharaj Goswami" />
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <a className="scroll-hint" href="#about" aria-label="Scroll to About">
        <span />
      </a>
    </section>
  );
};

export default Home;
