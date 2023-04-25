import React from "react";
import "./Intro.css";
import { GiSoccerBall } from "react-icons/gi";
import Soccer from "../Images/Soccer.svg";
import { BsDatabaseAdd } from "react-icons/bs";
import Carousel from "./Carousel";
import Schema from "../Images/Schema.png";
import architecture from "../Images/Architecture.svg";
const Intro = () => {
  return (
    <div className="container ">
      <header>
        <h1 className="header">Football Analysis</h1>
      </header>
      <div className="Abstract ">
        <div className="moving-icon-heading">
          <h1>Abstract</h1>
          <img src={Soccer} alt="football" />
        </div>
        <p className="para1">
          It is played worldwide. It is a sport that requires teamwork, game
          plans and strategies. For planning and strategies we need a good
          statistics and analysis and for that we need reports.
          <br />
          The purpose of this project is to develop Analysis & Reporting System
          of Football. Various reports has been generated to analyze the club as
          well as the individual player’s performance like the top performers,
          the foul makers, club’s Win/loss Ratio and many more. It collects the
          data on various attributes like country, goals scored, penalty, wins,
          position, league. The countries have been further divided under
          various regions such as Europe, South-America for Region-wise Analysis
        </p>
      </div>
      <div className="database-schema">
        <h2 className="head1">
          Schema
          <BsDatabaseAdd />
          <div className="schema">
            <img src={Schema} />
          </div>
        </h2>
      </div>
      <div>
        <h2 className="head1">Mapping</h2>
        <Carousel />
      </div>
    </div>
  );
};

export default Intro;
