import React from "react";
import styles from "./Section01.module.scss";
const Section01 = () => {
  return (
    <div className={styles.Section01}>
      <div className={styles.Section01Content}>
        <h1 data-aos='fade-left'>
          "Redefining the view about gamers. Helping the gaming community in any
          way possible."
        </h1>
        <br />
        <p data-aos='fade-left' data-aos-delay='100'>
          -MAPÚA UNIVERSITY’S ESPORTS AND GAMING ORGANIZATION
        </p>
      </div>
      <button
      //  data-aos='fade-up' data-aos-delay='200'
      >
        Learn More
      </button>
    </div>
  );
};

export default Section01;
