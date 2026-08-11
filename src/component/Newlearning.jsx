import React from "react";
import "../styling/Newlearning.css";
import Azure from "../Removbg/Azure.png";
import AWS from "../Removbg/AWS.png";
import Docker from "../Removbg/Docker.png";
import rocket from "../Removbg/rocket.png";
const techStack = [
  { name: "Docker", icon: <img src={Docker} alt="Docker" /> },
  { name: "AWS", icon: <img src={AWS} alt="Aws" /> },
  { name: "Azure", icon: <img src={Azure} alt="Azure" /> },
];

const Newlearning = () => {
  return (
    <section id="currently-learning" className="learning-section">
      <div className="image">
        <img src={rocket} alt="rocket" width="90" />
        <h2 className="learning-title">Currently Learning</h2>
      </div>
      <p className="learning-subtitle">
        Actively expanding my skillset with modern technologies and cloud
        platforms
      </p>

      <div className="learning-container">
        {techStack.map((tech, index) => (
          <div key={index} className="learning-card">
            <div className="icon">{tech.icon}</div>
            <h4>{tech.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Newlearning;
