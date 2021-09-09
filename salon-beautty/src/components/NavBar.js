import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
const logoimg = "https://scontent.faqp3-1.fna.fbcdn.net/v/t31.18172-8/14715527_1411170005579410_3075006977731371620_o.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=8z8oV44dp_oAX9VfcoO&_nc_ht=scontent.faqp3-1.fna&oh=9ebbdd47aec17a91aa665706c4dd10b9&oe=61611740"
function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
      <nav className="navbar">
        <div className="nav-container">
          {/*<NavLink exact to="/" className="nav-logo">*/}
          <div className="nav-logo">
            {/*Beautty*/}
            <img src={logoimg} alt="logo-salon" className="logo-salon"/>
            </div>
          {/*</NavLink>*/}

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
  );
}

export default NavBar;