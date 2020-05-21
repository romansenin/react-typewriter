import React from "react";
import TypeWriter from "./components/TypeWriter";

function App() {
  return (
    <div>
      <TypeWriter delay={38}>Hello World!</TypeWriter>
      <TypeWriter delay={50}>This is a demo of my TypeWriter component.</TypeWriter>
      <TypeWriter delay={70}>You can change the delay to whatever you want...</TypeWriter>
      <TypeWriter delay={120}>You can make it really SLOW</TypeWriter>
      <TypeWriter delay={20}>...and really fast too!</TypeWriter>
    </div>
  );
}

export default App;
