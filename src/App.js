import "./App.css";
import React from "react";
import Carousel from "./Components/Carousel";
import Intro from "./Components/Intro";
import Report from "./Components/Report";
const App = () => {
  return (
    <div className="App">
      <Intro />
      <Report />
    </div>
  );
};

export default App;
