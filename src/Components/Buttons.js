import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';

import '../assets/Style/Buttons.scss';
import About from '../Layouts/About.js';

function Buttons() {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <>
      <Button className='btn1' ref={target} onClick={() => setShow(!show)}>
        About
      </Button>
      <Overlay target={target.current} show={show} placement="down">
        {({
          placement: _placement,
          arrowProps: _arrowProps,
          show: _show,
          popper: _popper,
          hasDoneInitialMeasure: _hasDoneInitialMeasure,
          ...props
        }) => (
          <div
            {...props}
            style={{
              position: 'absolute',
              backgroundColor: '#C7B89D',
              color: 'black',
              ...props.style,
            }}
          >
            < About />
          </div>
        )}
      </Overlay>
    </>
  );
}
export default Buttons