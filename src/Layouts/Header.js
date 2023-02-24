import React from "react";

import '../assets/Style/Header.scss';
import Buttons from '../Components/Buttons.js';

function Header() {
    
    return ( 
        <div>
          <div className="main1">
            <p>ALEXYA COSTA</p>
            <p>front-end developer</p>
          </div>
          <Buttons />
      </div>
     );
}

export default Header;