import React from "react";
import "../styling/service.css";
import mentor from "../Removbg/mentor.png";
import fsd from "../Removbg/full s dev.png";
import web from "../Removbg/web.png";
const Service = () => {
  const servicesData = [
    {
      id: 1,
      title: "Web Development",
      icon: web,
      description:
        "I build modern, scalable, and responsive web applications using cutting-edge technologies. From crafting intuitive user interfaces to developing robust backend systems, I ensure high performance and seamless user experiences.",
      points: [
        "Responsive & Mobile  Design",
        "RESTful API Development",
        "Database Integration & Optimization",
      ],
    },
    {
      id: 2,
      title: "Full-Stack Application Development",
      icon: fsd,
      description:
        "I develop complete end-to-end applications, handling both frontend and backend with a strong focus on performance, scalability, and clean architecture. From idea to deployment, I deliver production-ready solutions.",
      points: [
        "Java & Spring Boot Development",
        "Modern JavaScript (React, Node.js)",
        "System Design & Database Architecture",
      ],
    },
    {
      id: 3,
      title: "Tutoring & Mentorship",
      icon: mentor,
      description:
        "I provide personalized guidance to help students and beginners master programming and web development with clarity and confidence.",
      points: [
        "Programming Fundamentals & Problem Solving",
        "Frontend & Backend Web Development",
        "Data Structures & Algorithms",
      ],
    },
  ];
  return (
    <section id="service">
      <div className="container">
        <h2>Services & Aspirations</h2>
        <p>
          Ready to contribute my skills and passion for technology to create
          impactful solutions.
        </p>
        <div className="child-container">
          {servicesData.map((data) => (
            <div className="box" key={data.id}>
              <div className="pic">
                <img src={data.icon} alt={data.title} />
              </div>
              <h3>{data.title}</h3>
              <p>{data.description}</p>
              <ul key={data.id}>
                {data.points.map((point, index) => (
                  <li key={index}> {point} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
