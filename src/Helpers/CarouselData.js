import Club from "../Images/CLUB.png";
import League from "../Images/League.png";
import team_statistics from "../Images/Team_Statistics.png";
import player_statistics from "../Images/player_statistics.png";
import player from "../Images/Player.png";

import concede from "../Images/concede.png";
import saves from "../Images/saves.png";
import networth from "../Images/networth.png";
import wins from "../Images/wins.png";
import scorer from "../Images/goalscorers.png";
import country from "../Images/country.png";
import datastaging from "../Images/Datastaging1.png";
import datastaging2 from "../Images/datastaging2.png";
import time from "../Images/Time.png";
export const images = [
  { title: "DATA STAGING", img: datastaging },
  { title: "DATA STAGING", img: datastaging2 },
  { title: "CLUB MAPPING", img: Club },
  { title: "COUNTRY MAPPING", img: country },
  { title: "TIME MAPPING", img: time },

  {
    title: "Player Mapping",
    img: player,
  },
  { title: "League Mapping", img: League },
  {
    title: "Player statistics Mapping",
    img: player_statistics,
  },

  {
    title: "Team_statistics Mapping",
    img: team_statistics,
  },
];

export const repimages = [
  { title: "Net Worth", img: networth },
  { title: "Clubs with most number of wins", img: wins },
  { title: "Top 10 goal scorers", img: scorer },
  { title: "Clubs with most number of goals conceded", img: concede },
  { title: "PLayers with highest number of goal intervention", img: saves },
];
