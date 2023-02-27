import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

import About from '../Layouts/About.js';
import '../Assets/Style/Buttons.scss';

function Buttons() {
  const [showA, setShowA] = useState(false);
  const [showB, setShowB] = useState(true);

  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);

  return (
    <Row>
      <Col md={6} className="mb-2">
        <Button onClick={toggleShowA} className="btn1">
          <label>About me</label>
        </Button>
        <Toast show={showA} onClose={toggleShowA}>
          
          <Toast.Body>  </Toast.Body>
        </Toast>
      </Col>
      
    </Row>
  );
}

export default Buttons;