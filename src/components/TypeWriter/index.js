import React, { useState, useEffect } from "react";
import VizSensor from "react-visibility-sensor";
import "./index.css";

function TypeWriter({ children, delay }) {
  const [typed, setTyped] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (visible && !(typed === children)) {
      setTimeout(() => {
        setTyped(children.substr(0, typed.length + 1));
      }, delay);
    }
  }, [visible, typed]);

  return (
    <div className="typewriter">
      <VizSensor
        partialVisibility
        onChange={(isVisible) => {
          setVisible(isVisible);
        }}
      >
        <span>{typed}</span>
      </VizSensor>
    </div>
  );
}

export default TypeWriter;
