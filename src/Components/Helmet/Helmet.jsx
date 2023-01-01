import React from "react";

export default function Helmet(props) {
  document.title = "KMarket - " + props.title;
  return <div className="w-100">{props.children}</div>;
}
