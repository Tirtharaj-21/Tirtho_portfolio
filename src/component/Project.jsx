import React from "react";
import style from "../styling/project.module.css";

import job from "../assets/indeed.JPG";
import ecommerce from "../assets/E-commerce.JPG";
import chat from "../assets/Real time chat.JPG";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Job Portal",
      image: job,
      description:
        "Job Portal is a full-stack web application developed using Java and Spring Boot that helps employers post job openings and allows job seekers to search and apply for jobs online.",
      github: "https://github.com/yourgithub/jobportal",
      video: "https://youtube.com/jobportal",
    },

    {
      id: 2,
      title: "E-commerce Website",
      image: ecommerce,
      description:
        "Developed a responsive E-commerce Website using React.js for product browsing, shopping cart management, and online shopping experience.",
      github: "https://github.com/yourgithub/ecommerce",
      video: "https://youtube.com/ecommerce",
    },

    {
      id: 3,
      title: "Real-Time Chat Application",
      image: chat,
      description:
        "Developed a real-time chat application using Java Socket Programming for instant communication between multiple users.",
      github: "https://github.com/yourgithub/chatapp",
      video: "https://youtube.com/chatapp",
    },
  ];

  return (
    <section id="project">
      <h1 className={style.heading}>My Projects</h1>

      {projects.map((project) => (
        <div className={style.innerbox} key={project.id}>
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

          <div className={style.btnbox}>
            <a href={project.github} target="_blank">
              <button>
                View <i className="fa-brands fa-github"></i>
              </button>
            </a>

            <a href={project.video} target="_blank">
              <button>Video</button>
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Project;
