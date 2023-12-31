import React, { useState, useRef, useEffect, useContext } from 'react';
import './Main.css';

import ModalView from '../Modal/Modal';
import DarkLight from '../DarkLight/darklight.js';

import { Context } from '../../index';
import { setDoc, doc } from 'firebase/firestore/lite';

const Main = () => {
  const [number, setNumber] = useState(-1);
  const [weeks, setWeeks] = useState(true);
  // eslint-disable-next-line
  const [forceUpdate, setForceUpdate] = useState(false);

  const prevNumberRef = useRef();

  const { firebaseApp } = useContext(Context);

  useEffect(() => {
    prevNumberRef.current = number;
  }, [number]);

  const prevNumber = prevNumberRef.current;
  useEffect(() => {
    if (number === prevNumber) {
      setNumber(0);
    }
  }, [number, prevNumber]);

  const SendMessage = async () => {
    // array - масив із даними кожного тижня
    let array = {
      1: '',
      2: '',
      3: '',
      4: '',
      5: '',
      6: '',
    };
    for (let i = 1; i <= localStorage.length + 1; i++) {
      if (JSON.parse(localStorage.getItem(i)) !== null)
        array[i] = JSON.parse(localStorage.getItem(i));
    }
    // eslint-disable-next-line
    const docRef = await setDoc(doc(firebaseApp, 'PracticePage', 'smth.there123@gmail.com'), array);
  };
  return (
    <div className="Main" id="main">
      <button className="weeks__counter" onClick={() => setWeeks((prev) => !prev)}>
        Кількість тижнів
      </button>
      <h3 className="week__title">Щоденник практики Оберіть тиждень</h3>
      <div className="weeks-div">
        <div className="week">
          <button className="week-number" onClick={() => setNumber(1)}>
            I
            {number === 1 ? (
              <ModalView number={number} setForceUpdate={() => setForceUpdate((prev) => !prev)} />
            ) : null}
          </button>
        </div>
        <div className="week">
          <button className="week-number" onClick={() => setNumber(2)}>
            II
            {number === 2 ? (
              <ModalView number={number} setForceUpdate={() => setForceUpdate((prev) => !prev)} />
            ) : null}
          </button>
        </div>
        <div className="week">
          <button className="week-number" onClick={() => setNumber(3)}>
            III
            {number === 3 ? (
              <ModalView number={number} setForceUpdate={() => setForceUpdate((prev) => !prev)} />
            ) : null}
          </button>
        </div>
        <div className="week">
          <button className="week-number" onClick={() => setNumber(4)}>
            IV
            {number === 4 ? (
              <ModalView number={number} setForceUpdate={() => setForceUpdate((prev) => !prev)} />
            ) : null}
          </button>
        </div>
        {weeks === true ? null : (
          <>
            <div className="week">
              <button className="week-number" onClick={() => setNumber(5)}>
                V
                {number === 5 ? (
                  <ModalView
                    number={number}
                    setForceUpdate={() => setForceUpdate((prev) => !prev)}
                  />
                ) : null}
              </button>
            </div>
            <div className="week">
              <button className="week-number" onClick={() => setNumber(6)}>
                VI
                {number === 6 ? (
                  <ModalView
                    number={number}
                    setForceUpdate={() => setForceUpdate((prev) => !prev)}
                  />
                ) : null}
              </button>
            </div>
          </>
        )}
      </div>
      <div className="endMenu">
        <p className="button__text">Коли все заповнив нажимай </p>
        <button className="endMenu__btn" onClick={() => SendMessage()}>
          Відправити всі дані
        </button>
      </div>
      <DarkLight />
    </div>
  );
};
export default Main;
