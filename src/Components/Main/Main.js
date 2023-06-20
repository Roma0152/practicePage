import React, { useState, useRef, useEffect } from 'react';

import './Main.css';
import Example from '../Modal/Modal';

const Main = () => {
  const [number, setNumber] = useState(0);
  const [forceUpdate, setForceUpdate] = useState(false);

  const prevNumberRef = useRef();

  useEffect(() => {
    prevNumberRef.current = number;
  }, [number]);

  const prevNumber = prevNumberRef.current;
  if (number === prevNumber) {
    setNumber(0);
  }

  const Submit = (e) => {
    console.log(1);
    e.preventDefault();
    const formDatab = new FormData();
    formDatab.append('Name', 'asdasdas');
    formDatab.append('Email', 'asdasd');
    formDatab.append('Message', 'asasdasds');

    fetch(
      'https://script.google.com/macros/s/AKfycbxwHkUzrZlbYD552tQNBCocONXDxU3gXr8HVW-TGtfajxRDRVQlFi14J3qt_J34k8eOog/exec',
      {
        method: 'POST',
        body: formDatab,
      },
    ).catch((error) => {
      console.log(error);
    });
  };
  return (
    <div className="Main">
      <h3 className="week__title">Щоденник практики Оберіть тиждень</h3>
      <div className="weeks-div">
        <div className="week">
          <button className="week-number" onClick={() => setNumber(1)}>
            I
            {number === 1 ? (
              <Example number={number} setForceUpdate={() => setForceUpdate((prev) => !prev)} />
            ) : null}
          </button>
        </div>
        <div className="week">
          <button className="week-number" onClick={() => setNumber(2)}>
            II
            {number === 2 ? (
              <Example number={number} setForceUpdate={() => setForceUpdate((prev) => !prev)} />
            ) : null}
          </button>
        </div>
        <div className="week">
          <button className="week-number" onClick={() => setNumber(3)}>
            III
            {number === 3 ? (
              <Example number={number} setForceUpdate={() => setForceUpdate((prev) => !prev)} />
            ) : null}
          </button>
        </div>
        <div className="week">
          <button className="week-number" onClick={() => setNumber(4)}>
            IV
            {number === 4 ? (
              <Example number={number} setForceUpdate={() => setForceUpdate((prev) => !prev)} />
            ) : null}
          </button>
        </div>
      </div>
      <div className="endMenu">
        <p className="button__text">Коли все заповнив нажимай </p>
        <button className="endMenu__btn" onClick={(e) => Submit(e)}>
          Відправити всі дані
        </button>
      </div>
    </div>
  );
};
export default Main;
