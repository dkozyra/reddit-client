import React from "react";

export const Header = (props) => {
  return (
    <div className="header-container">
      <div className="header-content">
        <span className="header-logo">
          <a href="/home">
            <img src="/images/home-logo.svg" alt="" />
          </a>
        </span>
        <div className="header-search">
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <div className="header-searchIcon">
            <img src="/images/search-icon.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
