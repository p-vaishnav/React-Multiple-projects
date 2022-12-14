import React, { useState } from "react";
import { FaPen, FaCircle } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import "./Tile.css";
const Tile = ({ id, iconName, handleClick }) => {
  const render = () => {
    switch (iconName) {
      case "empty":
        return <FaPen className="icon" />;

      case "cross":
        return <ImCross className="icon" />;

      case "circle":
        return <FaCircle className="icon" />;
    }
  
  };
  return (
    <div className="tile" onClick={() => handleClick(id)}>
      {render()}
    </div>
  );
};

export default Tile;
