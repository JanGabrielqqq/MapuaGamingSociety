import { useEffect, useRef, useState } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import { Switch, Route, Redirect } from "react-router-dom";

import "./App.scss";

import HomePage from "./Components/Routes/HomePage";
import { NavBar } from "./Components/Routes/NavBar";
import Footer from "./Components/UI/Footer";
import ModalMessages from "./Components/UI/ModalMessages";
import AboutPage from "./Components/Routes/AboutPage";
import TeamPage from "./Components/Routes/TeamPage";
import NoPageFound from "./Components/Routes/NoPageFound";

function App() {
  const clearFix = useRef();
  const [showModalMessage, setShowModalMessage] = useState(true);
  const modalButtonPress = () => {
    setShowModalMessage(false);
  };

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <>
      <NavBar clearFix={clearFix} />
      <div ref={clearFix} className='navclearfix'></div>
      <Switch>
        <Route path='/' exact>
          <Redirect to='home' />
        </Route>
        <Route path='/home' exact>
          <HomePage />
        </Route>
        <Route path='/about' exact>
          <AboutPage />
        </Route>
        <Route path='/team' exact>
          <TeamPage />
        </Route>
        <Route path='*'>
          <NoPageFound />
        </Route>
      </Switch>

      <Footer />
      {showModalMessage && (
        <ModalMessages onModalButtonPress={modalButtonPress} />
      )}
    </>
  );
}

export default App;
