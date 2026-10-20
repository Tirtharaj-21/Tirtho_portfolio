import React from "react";
import styles from "../styling/experience.module.css";
import Reveal from "./Reveal";
import useInView from "../hooks/useInView";

const experience = [
  {
    period: "Feb 2026 - Aug 2026",
    role: "Java Backend Developer",
    company: "Techoxileo, Kolkata",
    project: "Shipcarte: Enterprise Logistics & Shipment Management Platform",
    points: [
      "Developed and enhanced backend features for a production-grade logistics platform using Java 21, Spring Boot, Spring Data JPA, Hibernate, MySQL and REST APIs.",
      "Automated Bill of Lading and Invoice generation with dynamic PDFs (Thymeleaf, Flying Saucer, iText), replacing manual document creation.",
      "Built and maintained RESTful APIs for shipment, invoice and order management, integrated with database-driven business logic.",
      "Implemented audit event tracking with dynamic event summaries and shipment lifecycle history for better traceability and reporting.",
      "Resolved production issues by analysing application logs, validating API responses and optimising database interactions.",
    ],
    tech: [
      "Java 21",
      "Spring Boot",
      "JPA / Hibernate",
      "MySQL",
      "REST APIs",
      "Thymeleaf",
      "iText",
    ],
  },
];

const Experience = () => {
  const [lineRef, lineVisible] = useInView(0.1);

  return (
    <section className={styles.section} id="experience">
      <Reveal direction="up">
        <h2 className={styles.title}>EXPERIENCE</h2>
      </Reveal>

      <div className={styles.timeline} ref={lineRef}>
        <span
          className={`${styles.line} ${lineVisible ? styles.lineGrow : ""}`}
        />

        {experience.map((item, i) => (
          <Reveal
            key={i}
            direction={i % 2 === 0 ? "left" : "right"}
            delay={i * 150}
            className={styles.item}
          >
            <span className={styles.dot} />
            <div className={styles.card}>
              <p className={styles.period}>{item.period}</p>
              <h3>{item.role}</h3>
              <h4>{item.company}</h4>
              <p className={styles.project}>{item.project}</p>
              <ul>
                {item.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
              <div className={styles.chips}>
                {item.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Experience;
