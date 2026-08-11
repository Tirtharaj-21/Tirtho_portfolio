import React from "react";
import style from "../styling/available.module.css";
import intern from "../Removbg/gift.png";
import freelance from "../Removbg/freelance.png";
import rocket from "../Removbg/rocket.png";
const Available = () => {
  const availableData = [
    {
      id: 1,
      title: "Internships",
      icon: intern,
      description:
        "Seeking internship opportunities to gain real-world experience and contribute to meaningful projects.",
    },
    {
      id: 2,
      title: "Freelance Projects",
      icon: freelance,
      description:
        "Available for freelance web development projects, from simple websites to complex applications.",
    },
    {
      id: 3,
      title: "Collaborations",
      icon: rocket,
      description:
        "Open to collaborating on innovative projects and contributing to open-source initiatives.",
    },
  ];
  return (
    <>
      <div className={style.availableContainer}>
        <h2>Available For</h2>
        <p>
          Eager to contribute to meaningful projects and grow as a developer
        </p>
        <div className={style.childContainer}>
          {availableData.map((data, ind) => (
            <div className={style.card} key={ind}>
              <div className={style.pic}>
                <img src={data.icon} alt="" />
              </div>
              <h3>{data.title}</h3>
              <p>{data.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Available;
