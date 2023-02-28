
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import '../Assets/Style/Buttons.scss';
import About from './About.js';
import Contact from './Contact';

export default function Buttons() {
  return (
    <div className='tabs'>
      <Tabs defaultActiveKey="tab-home">
        <Tab eventKey="tab-home" title="*">
          
        </Tab>
        <Tab eventKey="tab-about" title="Sobre mim" className='abt'>
        <About />
        </Tab>
        <Tab eventKey="tab-contact" title="Currículo">
          Hii, I am 3rd tab content
        </Tab>
        <Tab eventKey="tab-other" title="Contato">
          <Contact/>
        </Tab>
      </Tabs>
    </div>
  );
}