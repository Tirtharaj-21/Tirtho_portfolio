import React from "react";
import styles from "../styling/education.module.css";

const Education = () => {
  const education = [
    { year: "2025 - 2022", title: "Btech Degree" },
    { year: "2022 - 2019", title: "Diploma Degree" },
    { year: "2019 - 2017", title: "High School Degree" },
  ];

  const experience = [
    { year: "2026 - 2025", title: "Java Full Stack Developer " },
    { year: "2024(Oct) - 2024(Jun)", title: "Mern Stack Developer" },
  ];

  // Reusable Section Component
  const Section = ({ title, data }) => {
    return (
      <div className={styles.section}>
        <h2>{title}</h2>

        <div className={styles.timeline}>
          {data.map((item, index) => (
            <div key={index} className={styles.cardWrapper}>
              <div className={styles.dot}></div>

              <div className={styles.card}>
                <p>{item.year}</p>

                <h3>{item.title}</h3>

                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className={styles.educationSection} id="education">
      <div className={styles.container}>
        <Section title="EDUCATION" data={education} />

        <Section title="INTERNSHIP" data={experience} />
      </div>
    </section>
  );
};

export default Education;
