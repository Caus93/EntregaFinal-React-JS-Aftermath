import React from "react";
import OptionNavComponent from "./OptionNavComponent";

const DivOptionNavComponent = (props) => {
  const { data } = props;
  return (
    <div className="navbar-nav">
      {data.map((itemName, index) => {
        return <OptionNavComponent key={index} titleOption={itemName} />;
      })}
    </div>
  );
};

export default DivOptionNavComponent;
