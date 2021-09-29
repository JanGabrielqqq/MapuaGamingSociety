import React from "react";
import styles from "./TeamShowcase.module.scss";

const TeamShowcase = (props) => {
  // map when more than three teams
  return (
    <>
      <div className={styles.team}>
        <img src={props.data.logo1} alt={props.data.team1} />
        <h3>{props.data.team1}</h3>
        <p>{props.data.subtext1}</p>
      </div>
      {props.data.team2 !== undefined && (
        <div className={styles.team}>
          <img src={props.data.logo2} alt={props.data.team2} />
          <h3>{props.data.team2}</h3>
          <p>{props.data.subtext2}</p>
        </div>
      )}
    </>
  );
};

export default TeamShowcase;
