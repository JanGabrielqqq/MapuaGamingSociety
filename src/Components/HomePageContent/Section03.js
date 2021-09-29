import React, { useState } from "react";
import styles from "./Section03.module.scss";
import { TeamLogoData } from "./Section03Content/TeamLogoData";
import TeamShowcase from "./Section03Content/TeamShowcase";

const Section03 = () => {
  const [index, setIndex] = useState(null);
  const imgMouseEnter = (e) => {
    setIndex(e.target.id);
  };
  const imgMouseLeave = () => {
    setIndex(null);
  };
  return (
    <div className={styles.Section03}>
      <h1 data-aos='fade-down' data-aos-delay='100'>
        MEET OUR ESPORTS TEAM
      </h1>
      <div className={styles.teamShowcase}>
        {index !== null && <TeamShowcase data={TeamLogoData[index]} />}
      </div>

      <div className={styles.games}>
        {TeamLogoData.map((data, i) => (
          <div
            key={i}
            className={styles.imageDiv}
            onMouseEnter={imgMouseEnter}
            onMouseLeave={imgMouseLeave}
          >
            <img key={i} src={data.game} alt={i} id={i} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section03;
