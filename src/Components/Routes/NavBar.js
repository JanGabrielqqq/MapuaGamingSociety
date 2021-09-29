import React, { useState } from "react";
import styles from "./NavBar.module.scss";
import logo from "../../images/renderedlogo-500px.png";
import CSSTransition from "react-transition-group/CSSTransition";
import { NavLink } from "react-router-dom";

export const NavBar = (props) => {
  const [showList, setShowList] = useState(false);
  const [degreeBurger, setDegreeBurger] = useState(90);
  const showListHandler = () => {
    setShowList(!showList);
    setDegreeBurger(degreeBurger + 90);
  };

  const pageLoad = () => {
    setShowList(false);
    setDegreeBurger(degreeBurger + 90);
    props.clearFix.current.scrollIntoView({
      block: "start",
      // behavior: "smooth",
    });
  };
  return (
    <div className={styles.navBar}>
      <CSSTransition
        in={showList}
        mountOnEnter
        unmountOnExit
        appear={showList}
        timeout={500}
        classNames={{
          enterActive: styles.navBarListEntering,
          enterDone: styles.navBarList,
          exitActive: styles.navBarListExiting,
          exitDone: styles.navBarListExited,
        }}
      >
        <div className={styles.navBarList}>
          <p onClick={pageLoad}>
            <NavLink to='/home'>HOME</NavLink>
          </p>
          <p onClick={pageLoad}>
            <NavLink to='/about'>ABOUT</NavLink>
          </p>
          <p onClick={pageLoad}>
            <NavLink to='/team'>TEAMS</NavLink>
          </p>

          <p>APPLY</p>

          <p>GALLERY</p>

          <p>CONTACT</p>
        </div>
      </CSSTransition>
      <div className={styles.logo}>
        <img src={logo} alt='logo' />
        <h1>
          M<span>APUA</span>G<span>AMING</span>S<span>OCIETY</span>
        </h1>
      </div>
      <div className={styles.navUl}>
        <p onClick={pageLoad}>
          <NavLink to='/home' activeClassName={styles.active}>
            HOME
          </NavLink>
        </p>

        <p onClick={pageLoad}>
          <NavLink activeClassName={styles.active} to='/about'>
            ABOUT
          </NavLink>
        </p>

        <p onClick={pageLoad}>
          <NavLink activeClassName={styles.active} to='/team'>
            TEAMS
          </NavLink>
        </p>
        <p>APPLY</p>
        <p>GALLERY</p>
        <p>CONTACT</p>
      </div>
      <div
        style={{ transform: ` rotate(${degreeBurger}deg)` }}
        className={styles.navBurger}
        onClick={showListHandler}
      >
        |||
      </div>
    </div>
  );
};
