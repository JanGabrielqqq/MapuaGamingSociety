import React from "react";
import styles from "./Footer.module.scss";
import facebook from "../../images/SocialMedia/facebook.png";
import instagram from "../../images/SocialMedia/instagram.png";
import twitter from "../../images/SocialMedia/twitter.png";
import twitch from "../../images/SocialMedia/twitch.png";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <h3> Follow us:</h3>
      <div className={styles.socMed}>
        <a
          href='https://www.facebook.com/mapuagamingsociety/'
          target='_blank'
          rel='noreferrer'
        >
          <img src={facebook} alt='' />
        </a>
        <a href='https://twitter.com/mapuags/' target='_blank' rel='noreferrer'>
          <img src={twitter} alt='' />
        </a>
        <a
          href='https://instagram.com/mapua.gs/'
          target='_blank'
          rel='noreferrer'
        >
          <img src={instagram} alt='' />
        </a>
        <a
          href='https://www.twitch.tv/mapuagamingsociety/'
          target='_blank'
          rel='noreferrer'
        >
          <img src={twitch} alt='' />
        </a>
      </div>
      <div className={styles.info}>
        <p>Address: Mapua University</p>
        <p>Email: mapuagamingsociety@gmail.com</p>
        <br />

        <p>The site is under development.</p>
        <p>Mapúa Gaming Society. All rights reserved. 2020.</p>
        <br />
        <p>
          Created by{" "}
          <a
            className={styles.aTag}
            href='https://twitter.com/iamyoonrie'
            target='_blank'
            rel='noreferrer'
          >
            Yoonrie
          </a>
          , coded by{" "}
          <a
            className={styles.aTag}
            href='https://jangabrielqqq.github.io/portfolio/'
            target='_blank'
            rel='noreferrer'
          >
            Jan Gabriel H. Que
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
