import "./Header.css";
import { BiChevronDown } from "react-icons/bi";
import { VscSearch } from "react-icons/vsc";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { SidebarData } from "./SidebarData";

function Header() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className="container">
      <div className="left-container">
        <div className="left">
          <div className="navbar">
            <Link to="#" className="menu-bars">
              <GiHamburgerMenu
                className="ham"
                color="gray"
                size="2rem"
                onClick={showSidebar}
              />
            </Link>
          </div>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <AiOutlineClose className="ham" color="black" size="2rem" />
                </Link>
              </li>
              {SidebarData.map((item, i) => {
                return (
                  <li key={i} className={item.cName}>
                    <Link to={item.path}>
                      <span>{item.title}</span>
                      {item.icon}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <img
            src="https://afourtech.com/wp-content/uploads/2015/12/Microsoft-Logo-PNG.png"
            alt="logo"
          />
        </div>
        <div className="right">
          <ul>
            <li>Microsoft 365</li>
            <li>Office</li>
            <li>Windows</li>
            <li>Surface</li>
            <li>Xbox</li>
            <li>Support</li>
          </ul>
        </div>
      </div>

      <div className="right-container">
        <div className="left">
          <button>
            <span>All Microsoft</span>
            <BiChevronDown color="gray" size="1rem" />
          </button>
        </div>
        <div className="right">
          <VscSearch className="icons res-icon" size="1.3rem" color="#5c5a5a" />
          <AiOutlineShoppingCart
            className="icons"
            size="1.3rem"
            color="#5c5a5a"
          />
          <BiUserCircle className="icons" size="2.5rem" color="gray" />
        </div>
      </div>
    </div>
  );
}

export default Header;
