import React from "react";
import acadArena from "../../images/acadarena.png";
import styles from "./Section05.module.scss";

const Section05 = () => {
  return (
    <div className={styles.Section05}>
      <h1 data-aos='fade-down' data-aos-delay='100'>
        AFFILIATIONS
      </h1>
      <div className={styles.Section05Content}>
        <img data-aos='fade-left' data-aos-delay='200' src={acadArena} alt='' />
        <div className={styles.Section05Text}>
          <h2 data-aos='fade-right' data-aos-delay='200'>
            3-STAR ALLIANCE MEMBER ORGANIZATION FOR ACADARENA
          </h2>
          <p data-aos='fade-right' data-aos-delay='200'>
            ACADARENA is the leading organization for Campus Gaming and Esports
            Education in the Philippines and Southeast Asia. Mapúa Gaming
            Society has been a 3-star alliance member since 2020.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section05;
