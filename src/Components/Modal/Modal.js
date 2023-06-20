import React, { useState, useRef } from 'react';
import { Modal, Button } from 'react-bootstrap';

import './Modal.css';

function Example({ number, setForceUpdate }) {
  const [show, setShow] = useState(true);

  const myElementRef = useRef(null);

  const uploadData = () => {
    if (myElementRef.current) {
      const elements = myElementRef.current.querySelectorAll('.weeks__input');

      const elementsValue = Array.from(elements).map((x, index) => {
        const elem = {
          id: index,
          value: x.value,
        };
        return elem;
      });

      localStorage.setItem(number, JSON.stringify(elementsValue));
    }
  };
  // eslint-disable-next-line
  let elemental = [, , , , , ,];
  if (localStorage.getItem(number) != null) {
    elemental = JSON.parse(localStorage.getItem(number));
  }

  return (
    <>
      <Modal
        show={show}
        onHide={() => {
          setShow(false);
          setForceUpdate();
        }}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title">
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            <p className="modal__title">Опишіть що ви робили протягом тижня</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="weeks__text-div" ref={myElementRef}>
            <h1>Тиждень {number}</h1>
            {[1, 2, 3, 4, 5, 6, 7].map((day) => (
              <React.Fragment key={day}>
                <p>{day} День</p>
                <textarea
                  className="weeks__input"
                  id={number}
                  type="text"
                  placeholder="Чим ви займалися? по ділу."
                  defaultValue={elemental[day - 1] ? elemental[day - 1].value : null}
                />
              </React.Fragment>
            ))}
          </div>
          <Button className="btnDone" bsstyle="success" onClick={uploadData}>
            Done
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;
