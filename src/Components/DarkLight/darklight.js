import React from 'react';
import { useState } from 'react';
import './darklight.css';

const DarkLight = () => {
  const [theme, setTheme] = useState(false);

  const setLightMode = () => {
    document.querySelector('.Main').setAttribute('background-color', '#fdf5e6');
  };
  const setDarkMode = () => {
    document.querySelector('.Main').setAttribute('background-color', '#20232a;');
  };

  const ChooseTheme = () => {
    if (theme) {
      setLightMode();
      setTheme((prev) => !prev);
    } else {
      setDarkMode();
      setTheme((prev) => !prev);
    }
  };

  return (
    <>
      <button className="endMenu__theme" onClick={ChooseTheme}>
        LIGHT/DARK
      </button>
    </>
  );
};

export default DarkLight;
