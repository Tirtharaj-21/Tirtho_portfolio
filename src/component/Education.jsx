import React from "react";
import styles from "../styling/education.module.css";
import Reveal from "./Reveal";

const education = [
  {
    year: "Jun 2022 - Jun 2025",
    title: "B.Tech in Electronics & Communication Engineering",
    desc: "RCC Institute of Information Technology, Kolkata | 7.8 CGPA",
  },
  {
    year: "Jul 2019 - Jun 2022",
    title: "Diploma in Electronics & Telecommunication Engineering",
    desc: "Central Calcutta Polytechnic | 9.1 CGPA",
  },
  {
    year: "2017 - 2019",
    title: "High School",
    desc: "Dr.Shyamaprasad Mukherjee Institution ",
  },
];

const internship = [
  {
    year: "Mar 2025 - Dec 2025",
    title: "Java Full Stack Developer Trainee",
    desc: "QSpiders, Kolkata | Core Java, JDBC, Hibernate, Spring Boot and SQL. Built MVC mini-projects with CRUD operations and REST APIs.",
  },
  {
    year: "Jun 2024 - Oct 2024",
    title: "Industrial Trainee, Web Development",
    desc: "NIIT | Built responsive pages with HTML, CSS and JavaScript, and learned UI/UX fundamentals.",
  },
];

const Section = ({ title, data, direction }) => (
  <div className={styles.section}>
    <Reveal direction="up">
      <h2>{title}</h2>
    </Reveal>

    <div className={styles.timeline}>
      {data.map((item, index) => (
        <Reveal
          key={index}
          direction={direction}
          delay={index * 150}
          className={styles.cardWrapper}
        >
          <div className={styles.dot}></div>

          <div className={styles.card}>
            <p>{item.year}</p>
            <h3>{item.title}</h3>
            <span>{item.desc}</span>
          </div>
        </Reveal>
      ))}
    </div>
  </div>
);

const Education = () => (
  <section className={styles.educationSection} id="education">
    <div className={styles.container}>
      <Section title="EDUCATION" data={education} direction="left" />
      <Section title="INTERNSHIP" data={internship} direction="right" />
    </div>
  </section>
);

export default Education;
