import React from "react";
import styles from "./Section04.module.scss";

const Section04 = () => {
  return (
    <div className={styles.Section04}>
      <h1 data-aos='fade-down' data-aos-delay='100'>
        ARE YOU COMPETITIVE TO JOIN OUR ESPORTS TEAM?
      </h1>

      <p data-aos='fade-left' data-aos-delay='200'>
        We are currently recruiting Mapuan players, trainees and manager
        apprentices that are competitive and dedicated to join the team.
      </p>

      <a
        className={styles.aTag}
        // data-aos='fade-up'
        // data-aos-delay='300'
        href='https://www.facebook.com/mapuagamingsociety/posts/931560494094885'
        target='_blank'
        rel='noreferrer'
      >
        MORE INFO
      </a>
    </div>
  );
};

export default Section04;
