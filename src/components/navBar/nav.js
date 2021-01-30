import React, {useState} from "react";
import './nav.css';
import logo from '../../assets/images/acadme2.png'

const Nav = () => {
  const [open, setOpen] = useState(false);

  const setOpenFunction = () => {
    if(window.innerWidth < 800){
      setOpen(!open)
    }
  }

    return (   
        <div className="navbar-container">
          <div className="logo">
            <a href="">
              <img className="image" src={logo} alt=''/>
            </a>
          </div>
          <ul className={open ? "nav-items-side" : "nav-items"}>
            <li className="link">
              <a className="linkItem" href="">Home</a>
            </li>
            <li className="link">
              <a className="linkItem" href="">About Us</a>
            </li>
            <li className="link">
              <a className="linkItem" href="">Contact Us</a>
            </li>
            <li className="link">
              <a className="linkItem" href="">Sign In</a>
            </li>
          </ul>
          <div className="container" onClick={setOpenFunction}>
            <div className={open ? "lineRotate" : "line" } />
            <div className={open ? "lineRotate" : "line" }/>
            <div className={open ? "lineRotate" : "line" }/>
          </div>
        </div>
    );
}

export default Nav;