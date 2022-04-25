import {NavLink} from "react-router-dom";
import { useState } from "react";

import logo from '../img/logo.svg'
import "../NavBar/NavBarOne.scss"





const Logo = () => {

  const [switchTOggled, setSwitchTOggled] = useState(false);

  const ToggleSwitch = () => {
          switchTOggled ? setSwitchTOggled(false) : setSwitchTOggled(true);
  };

  return (
      <div >
          <NavLink onClick={ToggleSwitch} to="/">
            <img src={logo} className="img" alt=""/>
          </NavLink>
      </div>
  )
}

export default Logo;