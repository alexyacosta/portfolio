
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import '../Assets/Style/Buttons.scss';
import About from '../Layouts/About.js';

export default function Buttons() {
  return (
    <div className='tabs'>
      <Tabs defaultActiveKey="tab-home">
        <Tab eventKey="tab-home" title="*">
          
        </Tab>
        <Tab eventKey="tab-about" title="About">
        <About />
        </Tab>
        <Tab eventKey="tab-contact" title="Contact">
          Hii, I am 3rd tab content
        </Tab>
        <Tab eventKey="tab-other" title="Contact">
          Hii, I am 3rd tab content
        </Tab>
      </Tabs>
    </div>
  );
}