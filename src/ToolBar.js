import React from "react";
import "./index.css";
import { BsChevronLeft } from "react-icons/bs";

const ToolBar = ({ openSidebar }) => {
  return (
    <>
      <div className="tool-bar">
        <h5>
          <BsChevronLeft /> View Audience
        </h5>
      </div>
      <div className="button">
        <button onClick={openSidebar}>Save segment</button>
      </div>
    </>
  );
};

export default ToolBar;
