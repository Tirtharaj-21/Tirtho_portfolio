import React from "react";
import "../styling/skill.css";
import { data } from "../assets/data";

const Skills = () => {
  return (
    <section className="skills-section" id="skill">
      <div className="skills-header">
        <h1>My Skills</h1>
        <p>
          A comprehensive set of technical skills acquired through education,
          training, and hands-on project experience.
        </p>
      </div>

      <div className="skills-container">
        {data.map((category, index) => (
          <div className="skills-card" key={index}>
            <h3>{category.title}</h3>

            {category.skills.map((skill, i) => (
              <div key={i}>
                <div className="skill">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>

                <div className="bar">
                  <div style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
