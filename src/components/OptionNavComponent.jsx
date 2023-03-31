import React from "react";

const OptionNavComponent = (props) => {
  const { titleOption } = props;
  return <span className="nav-link ">{titleOption}</span>;
};

export default OptionNavComponent;
