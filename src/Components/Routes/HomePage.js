import React from "react";
import mgsCover from "../../images/mgs-cover.png";
import Section01 from "../HomePageContent/Section01";
import Section02 from "../HomePageContent/Section02";
import Section03 from "../HomePageContent/Section03";
import Section04 from "../HomePageContent/Section04";
import Section05 from "../HomePageContent/Section05";
import Section06 from "../HomePageContent/Section06";
import Section07 from "../HomePageContent/Section07";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.BackgroundDiv}></div>
      <img
        className={styles.Cover}
        src={mgsCover}
        alt='MGS Mapua Gaming Society'
      />
      <Section01 />
      <Section02 />
      <Section03 />
      <Section04 />
      <Section05 />
      <Section06 />
      <Section07 />
    </div>
  );
};

export default HomePage;
