import React from "react";
import { FaSearch, FaRegCommentDots, FaBell, FaTrophy } from "react-icons/fa";
import { CiChat1 } from "react-icons/ci";
import { IoTrophyOutline } from "react-icons/io5";
import { CgNotes } from "react-icons/cg";

import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img
          src="https://cdn.sstatic.net/Sites/stackoverflow/company/img/logos/so/so-logo.svg"
          alt="StackOverflow Logo"
          className="logo"
        />
      </div>
      <div className="header-center">
        <div className="search-bar-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            className="search-bar"
            placeholder="Search Your Answers Here..."
          />
        </div>
        <span className="products">Products</span>
      </div>
      <div className="header-right">
        <CiChat1 className="icon comment" title="Comments" />
        <IoTrophyOutline className="icon" />

        <CgNotes className="icon" />
        <img
          src="https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png"
          alt="Profile"
          className="icon profile"
        />
      </div>
    </header>
  );
};

export default Header;
