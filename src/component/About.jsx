import React from "react";
import "../styling/about.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Heading */}
        <div className="about-header">
          <h1>About Me</h1>
          <p>
            Full Stack Developer skilled in MERN and Java technologies, with a
            strong focus on building real-world, user-centric applications. I
            have developed multiple projects including a job portal, e-commerce
            website, and real-time chat system, gaining hands-on experience in
            APIs, authentication, and responsive UI design. I'm driven by
            curiosity and problem-solving, always exploring better ways to write
            clean and scalable code. I'm eager to start my professional journey
            in a challenging environment where I can contribute and grow.
          </p>
        </div>

        {/* Journey */}
        <div className="about-journey">
          <h2>My Journey</h2>
          <p>
            My journey into tech began with curiosity and quickly turned into a
            passion for building real-world applications. With an engineering
            background, I explored different areas before focusing on full-stack
            development. I have built projects like a job portal, e-commerce
            platform, and real-time chat app, which strengthened my practical
            skills and problem-solving approach. While I briefly explored
            teaching, I realized my true interest lies in development. Now, I am
            focused on growing as a developer and contributing to impactful,
            user-centric solutions.
          </p>
        </div>

        {/* Hobbies + Goal */}
        <div className="hobbies-goal">
          <div className="card">
            <h3>Hobbies</h3>
            <ul>
              <li>Music</li>
              <li>Chess</li>
              <li>Movies</li>
            </ul>
          </div>

          <div className="card">
            <h3>Goal</h3>
            <ul>
              <li>Full-Stack Mastery</li>
              <li>Build real-world scalable apps</li>
              <li>Improve coding &amp; problem-solving</li>
              <li>Work on impactful projects</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
