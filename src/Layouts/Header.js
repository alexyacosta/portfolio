import React from "react";

import '../Assets/Style/Header.scss';
import Buttons from '../Components/Buttons.js';

function Header() {
    
    return ( 
        <div>
          <div className="main1">
            <strong>ALEXYA COSTA</strong>
            <p>front-end developer</p>
            <Buttons />
          </div>
          
      </div>
     );
}

export default Header;