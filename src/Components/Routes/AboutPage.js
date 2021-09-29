import React from "react";
import styles from "./AboutPage.module.scss";
import genAssemble from "../../images/general-assembly.jpg";
import Section01 from "../AboutPageContent/Section01";

const AboutPage = () => {
  return (
    <div className={styles.AboutPage}>
      <div className={styles.BackgroundDiv}></div>

      <div className={styles.Cover}>
        <img src={genAssemble} alt='MGS Mapua Gaming Society' />
      </div>
      <Section01 />
    </div>
  );
};

export default AboutPage;
