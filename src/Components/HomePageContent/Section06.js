import React from "react";
import styles from "./Section06.module.scss";

const Section06 = () => {
  return (
    <div className={styles.Section06}>
      <div data-aos='fade' data-aos-delay='100' className={styles.Apply}>
        <h1 data-aos='fade-down' data-aos-delay='1000'>
          Want to join the org?
        </h1>
        <p data-aos='fade-right' data-aos-delay='1100'>
          The Membership Application for MGS is only open once every 3rd quarter
          of the current school year.
        </p>
        <button
        //  data-aos='fade-up' data-aos-delay='1200'
        >
          APPLY HERE
        </button>
      </div>
      <div data-aos='fade' data-aos-delay='100' className={styles.Involve}>
        <h1 data-aos='fade-down' data-aos-delay='1000'>
          Are you a streamer or shoutcaster?
        </h1>
        <p data-aos='fade-right' data-aos-delay='1100'>
          We are uniting our resources around this challenge, and we are
          combining our resources and asks to make it easy for people to support
          their communities.
        </p>
        <button
        // data-aos='fade-up' data-aos-delay='1200'
        >
          GET INVOLVED
        </button>
      </div>
    </div>
  );
};

export default Section06;
