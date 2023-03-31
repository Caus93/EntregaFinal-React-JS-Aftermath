import React from "react";
import OptionNavComponent from "./OptionNavComponent";

const DivOptionNavComponent = (props) => {
  const { nameOption } = props;
  return (
    <div className="navbar-nav">
      {nameOption.map((itemName, index) => {
        return <OptionNavComponent key={index} titleOption={itemName} />;
      })}
    </div>
  );
};

export default DivOptionNavComponent;
