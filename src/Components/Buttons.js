
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import '../Assets/Style/Buttons.scss';
import About from './About.js';
import Contact from './Contact';
import Cv from './Cv';

export default function Buttons() {
  return (
    <div className='tabs'>
      <Tabs defaultActiveKey="tab-home">
        <Tab eventKey="tab-home" title="*">
          
        </Tab>
        <Tab eventKey="tab-about" title="Sobre mim" className='abt'>
        <About />
        </Tab>
        <Tab eventKey="tab-contact" title="Currículo" className='abt'>
          <Cv />
        </Tab>
        <Tab eventKey="tab-other" title="Contato"className='abt'>
          <Contact/>
        </Tab>
      </Tabs>
    </div>
  );
}