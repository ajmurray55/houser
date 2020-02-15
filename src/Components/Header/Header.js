import React from "react";
import housePic from '../../Components/home.png'


function Header() {
  return <header>
       <img className="housePic"src= {housePic}/>
       Houser
      </header>;
}

export default Header;
