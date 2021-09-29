import React from "react";
import styles from "./NoPageFound.module.scss";
const NoPageFound = () => {
  return (
    <div className={styles.NoPageFound}>
      <div className={styles.BackgroundDiv}></div>
      <h1>Error 404: </h1>
      <h1>No Page Found</h1>
      <p>
        The page you are looking for does'nt exist or is still under
        development. please go back to the home page..
      </p>
    </div>
  );
};

export default NoPageFound;
