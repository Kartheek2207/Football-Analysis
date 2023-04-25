import React from "react";
import "./Report.css";
import { TbReportAnalytics } from "react-icons/tb";
import Carousel2 from "./Carousel2";

const Report = () => {
  return (
    <div className="report">
      <h2 className="head2">
        Reports
        <TbReportAnalytics />
      </h2>
      <Carousel2 />
    </div>
  );
};

export default Report;
