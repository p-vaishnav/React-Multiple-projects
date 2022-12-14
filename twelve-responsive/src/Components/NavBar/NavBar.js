import React, { useState , useEffect} from "react";
//for routing
import { Link } from "react-router-dom";
//for icons
import { FaBars, FaTimes } from "react-icons/fa";
//for icons can have Md also
import { MdFingerprint } from "react-icons/md";
//importing Components
import Button from "../Button/Button";
import "./NavBar.css";
const NavBar = () => {
  //useState me convention follow karte hai
  const [click, setClick] = useState(false);
  //making button's state
  const [button, setButton] = useState(true);

  //handleClick
  const handleClick = () => {
    setClick(!click);
  };

  //closeMobileMenu?
  const closeMobileMenu = () => {
    setClick(false);
  };

  //show / hide button
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  //we can add event listener to window object from function this is amazing
  window.addEventListener("resize", showButton);

  //Mouse se click nahi chal raha so maually click karna padh raha hai
  //document.getElementsByClassName("menu-icon")[0].click()   


  //???
  useEffect(() => {
     showButton();
  }, [])

  return (
    <>
      <div className="navbar">
        <div className="navbar-conatiner container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <MdFingerprint className="nav-icon" />
            LAVISH
          </Link>
        </div>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes className="fa-times" /> : <FaBars  className="fa-bars"/>}
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Services
            </Link>
          </li>
          <li className="nav-btn">
            {button ? (
              <Link to="/signup" className="btn-link">
                <Button buttonStyles="btn--outline">SignUp</Button>
              </Link>
            ) : (
              <Link to="/signup" className="btn-link" onClick={closeMobileMenu}>
                <Button buttonStyles="btn--outline" buttonSize="btn-mobile">
                  SignUp
                </Button>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
