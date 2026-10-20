import React from "react";
import style from "../styling/project.module.css";
import Reveal from "./Reveal";

import job from "../assets/indeed.JPG";
import ecommerce from "../assets/E-commerce.JPG";
import chat from "../assets/Real time chat.JPG";

const projects = [
  {
    id: 1,
    title: "Job Portal (Indeed Clone)",
    image: job,
    description:
      "Full-stack job portal where recruiters post openings and job seekers search and apply. Includes authentication, role-based access control for recruiters and job seekers, and separate user dashboards, backed by REST APIs and a PostgreSQL database.",
    tech: ["React.js", "Spring Boot", "PostgreSQL", "REST APIs"],
    github: "https://github.com/Tirtharaj-21/job-portal-frontend",
    live: "https://job-portal-frontend-nine-sooty.vercel.app/",
  },
  {
    id: 2,
    title: "E-commerce Website",
    image: ecommerce,
    description:
      "Responsive e-commerce website for browsing products, managing a shopping cart and an online shopping experience.",
    tech: ["React.js"],
    github: "https://github.com/Tirtharaj-21/E-commerce",
    live: "https://e-commerce-psi-lime-19.vercel.app/login",
  },
  {
    id: 3,
    title: "Real-Time Chat Application",
    image: chat,
    description:
      "Real-time chat application using Java Socket Programming for instant communication between multiple users.",
    tech: ["Java", "Socket Programming"],
    github: "https://github.com/Tirtharaj-21/Real_time_chat-Application",
  },
];

const Project = () => {
  return (
    <section id="project" className={style.section}>
      <Reveal direction="up">
        <h1 className={style.heading}>My Projects</h1>
      </Reveal>

      <div className={style.grid}>
        {projects.map((project, index) => (
          <Reveal
            key={project.id}
            direction={index % 2 === 0 ? "left" : "right"}
            delay={index * 120}
            className={style.innerbox}
          >
            <h3 className={style.head}>{project.title}</h3>

            <div className={style.mainbox}>
              <img
                src={project.image}
                alt={project.title}
                className={style.image}
              />
            </div>

            <div className={style.description}>
              <span>Description:</span>
              <p>{project.description}</p>
            </div>

            <div className={style.tech}>
              {project.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>

            <div className={style.btnbox}>
              <a href={project.github} target="_blank" rel="noreferrer">
                <button>
                  View <i className="fa-brands fa-github"></i>
                </button>
              </a>

              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer">
                  <button>Live</button>
                </a>
              )}

              <a href={project.video} target="_blank" rel="noreferrer">
                {/* <button>Video</button> */}
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Project;
