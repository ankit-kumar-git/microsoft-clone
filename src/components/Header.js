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
    <div class="container">
      <div class="left-container">
        <div class="left">
          <div className="navbar">
            <Link to="#" class="menu-bars">
              <GiHamburgerMenu
                class="ham"
                color="gray"
                size="2rem"
                onClick={showSidebar}
              />
            </Link>
          </div>
          <nav class={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <Link to="#" class="menu-bars">
                  <AiOutlineClose class="ham" color="black" size="2rem" />
                </Link>
              </li>
              {SidebarData.map((item, i) => {
                return (
                  <li key={i} class={item.cName}>
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
        <div class="right">
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
          <VscSearch class="icons res-icon" size="1.3rem" color="#5c5a5a" />
          <AiOutlineShoppingCart class="icons" size="1.3rem" color="#5c5a5a" />
          <BiUserCircle class="icons" size="2.5rem" color="gray" />
        </div>
      </div>
    </div>
  );
}

export default Header;
