import React from "react";
import { Main } from "./Main";
import { Rightside } from "./Rightside";

export const Home = (props) => {
  return (
    <div className="home-container">
      <div className="home-layout">
        <Main />
        <Rightside />
      </div>
    </div>
  );
};
