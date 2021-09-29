import React from "react";
import logo from "../../images/renderedlogo-500px.png";
import styles from "./Section02.module.scss";

const Section02 = () => {
  return (
    <div className={styles.Section02}>
      <div className={styles.Section02Content}>
        <img src={logo} alt='logo' data-aos='fade-left' data-aos-delay='100' />
        <p data-aos='fade-right' data-aos-delay='200'>
          <span>Mapúa Gaming Society</span>, also known as <span>MGS</span>, is
          a community that connects individuals who shares the same passion for
          esports and gaming in general whilst balancing their academics. MGS
          promotes the value and growing potential of eSports and the gaming
          industry as a whole and building an environment to establish
          camaraderie, self-regulated learning, and discipline among the
          students of Mapúa University.
        </p>
      </div>
    </div>
  );
};

export default Section02;
