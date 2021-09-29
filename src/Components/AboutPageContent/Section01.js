import React from "react";
import styles from "./Section01.module.scss";
const Section01 = () => {
  return (
    <div className={styles.Section01}>
      <div
        data-aos='fade-left'
        data-aos-duration='500'
        data-aos-delay='100'
        className={styles.Section01Content}
      >
        <h1 data-aos='fade' data-aos-duration='500' data-aos-delay='1000'>
          ABOUT
        </h1>
        <p data-aos='fade' data-aos-duration='500' data-aos-delay='1000'>
          Mapúa Gaming Society, also known as MGS, is a community that connects
          individuals who share the same passion for esports and gaming in
          general whilst balancing their academics. MGS promotes the value and
          growth potential of eSports and the gaming industry as a whole and
          building an environment to establish camaraderie, self-regulated
          learning, and discipline among the students of Mapúa University.
        </p>
      </div>
      <div
        data-aos='fade-left'
        data-aos-duration='500'
        data-aos-delay='300'
        className={styles.Section01Content}
      >
        <h1 data-aos='fade' data-aos-duration='500' data-aos-delay='1000'>
          MISSION
        </h1>
        <p data-aos='fade' data-aos-duration='500' data-aos-delay='1000'>
          Mapúa Gaming Society shall be an organization that provides teams and
          players with a supportive community that will help hone their skills
          in esports, enabling them to join competitions nationally and
          internationally; this society will not only welcome gaming enthusiasts
          but also those who are curious about the gaming industry– wherein as a
          community, will help them develop their potential as competitive
          players. Mapúa Gaming Society will not only produce topnotch players,
          but also responsible students who can balance both their academics and
          extra-curricular activities as well. This organization will promote
          proper time management as well as values and character that befits the
          school and the gaming community.
        </p>
      </div>
      <div
        data-aos='fade-left'
        data-aos-duration='500'
        data-aos-delay='300'
        className={styles.Section01Content}
      >
        <h1 data-aos='fade' data-aos-duration='500' data-aos-delay='1000'>
          VISION
        </h1>
        <p data-aos='fade' data-aos-duration='500' data-aos-delay='1000'>
          The organization shall be a community that supports and welcomes all
          computer/video game enthusiasts.
        </p>
      </div>
      <div
        data-aos='fade-left'
        data-aos-duration='500'
        data-aos-delay='300'
        className={styles.Section01Content}
      >
        <h1 data-aos='fade' data-aos-duration='500' data-aos-delay='1000'>
          OUR HISTORY
        </h1>
        <div className={styles.pFlex}>
          <p data-aos='fade' data-aos-duration='500' data-aos-delay='1000'>
            Founded in August 11, 2017.
          </p>
          <hr data-aos='fade' data-aos-duration='500' data-aos-delay='1000' />
          <p data-aos='fade' data-aos-duration='500' data-aos-delay='1000'>
            Officially registered as a new organization by the Office of the
            Director for Student Affairs of Mapúa University since 2018.
          </p>
          <hr data-aos='fade' data-aos-duration='500' data-aos-delay='1000' />
          <p data-aos='fade' data-aos-duration='500' data-aos-delay='1000'>
            Officially Recognized (For review) by the Office of the Director for
            Student Affairs as an existing and active organization since 2019.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section01;
