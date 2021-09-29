import React from "react";
import Section03 from "../HomePageContent/Section03";
import styles from "./TeamPage.module.scss";
const TeamPage = () => {
  return (
    <div className={styles.TeamPage}>
      <div className={styles.BackgroundDiv}></div>

      <Section03 />
    </div>
  );
};

export default TeamPage;
