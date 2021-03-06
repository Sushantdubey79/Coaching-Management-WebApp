import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { TeacherSidebarData } from "./TeacherSidebarData";
import { StudentSidebarData } from "./StudentSidebarData";

import "./Navbar.css";
import { IconContext } from "react-icons";
import * as IoIcons from "react-icons/io";

function Navbar(props) {
  const [sidebar, setSidebar] = useState(false);
  const [studentSidebar, setstudentSidebar] = useState(props.isStudent);
  const title=document.getElementById('title')
  {studentSidebar?title.innerHTML='Student Portal':title.innerHTML='Teacher portal'}

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className={studentSidebar?"navbar student": "navbar"}>
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <IoIcons.IoIosPerson
            style={{ fontSize: "36px", marginRight: "20px" }}
          />
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {studentSidebar?StudentSidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            }):TeacherSidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
