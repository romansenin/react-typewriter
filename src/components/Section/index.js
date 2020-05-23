import React from "react";
import "./index.css";

function Section({ children, ...props }) {
  return <section {...props}>{children}</section>;
}

export default Section;
