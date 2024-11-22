import React from "react";
import { FaRegCommentDots } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";

import "./RightSidebar.css";

const RightSidebar = () => {
  const UpperContainer = () => (
    <div className="upper-section">
      <div className="section blog">
        <h4>The Overflow Blog</h4>
        <div className="blog-container">
          <MdOutlineEdit className="icon" />
          <p>The unexpected benefits of mentoring others</p>
        </div>
        <div className="blog-container">
          <MdOutlineEdit className="icon" />
          <p>Podcast 354: Building for AR with Niantic Labs’ AR SDK</p>
        </div>
      </div>
      <div className="section featured-meta">
        <h4>Featured & Meta</h4>
        <div className="blog-container">
          <MdOutlineEdit className="icon" />
          <p>Beta release of Collectives™ on Stack Overflow</p>
        </div>
      </div>
    </div>
  );

  const MiddleContainer = () => (
    <div className="middle-section">
      <div className="section hot-meta">
        <h4>Hot Meta Posts</h4>
        <p>
          <strong>8 </strong> Tags [driver] and [device-driver] appear to be
          redundant
        </p>
        <p>
          <strong>27</strong> How to handle dupes where A is closed as dup of B
          but I have an answer that…
        </p>
        <p>
          <strong>27</strong> Ambiguous tag [containers]
        </p>
      </div>
    </div>
  );

  const LowerContainer = () => (
    <div className="lower-section">
      <div className="section custom-filter">
        <h4>Custom Filter</h4>
        <input type="text" placeholder="add custom filters" />
      </div>
    </div>
  );

  return (
    <aside className="right-sidebar">
      <UpperContainer />
      <MiddleContainer />
      <LowerContainer />
    </aside>
  );
};

export default RightSidebar;
