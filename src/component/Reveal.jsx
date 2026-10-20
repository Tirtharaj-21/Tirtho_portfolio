import React from "react";
import useInView from "../hooks/useInView";
import styles from "../styling/reveal.module.css";

const Reveal = ({ children, direction = "up", delay = 0, className = "" }) => {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${styles[direction]} ${
        inView ? styles.visible : ""
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default Reveal;
