import React from "react";
import Section from "./components/Section";
import TypeWriter from "./components/TypeWriter";

function App() {
  return (
    <div>
      <Section>
        <TypeWriter delay={40}>
          <div>Hello World!</div>
          <span>👇</span>
        </TypeWriter>
      </Section>
      <Section>
        <TypeWriter delay={40}>
          This is a demo of my TypeWriter component.
        </TypeWriter>
      </Section>
      <Section>
        <TypeWriter delay={40}>
          The delay prop is used for how slow you want it to type...
        </TypeWriter>
      </Section>
      <Section>
        <TypeWriter delay={140}>
          You can make it <em>really</em> slow 🐢
        </TypeWriter>
      </Section>
      <Section>
        <TypeWriter>
          ...or <strong>really</strong> fast 🏎
        </TypeWriter>
      </Section>
      <Section>
        <TypeWriter delay={38}>
          Notice that typing only happens when the component is in the viewport.
        </TypeWriter>
        <TypeWriter delay={40}>
          This was achieved with the React Visibility{" "}
          <a
            target="_blank"
            href="https://www.npmjs.com/package/react-visibility-sensor"
          >
            Library
          </a>
          .
        </TypeWriter>
      </Section>
      <Section>
        <TypeWriter delay={40} restartable>
          You can make a component restart once it finishes and scrolls out of
          view by passing in the "restartable" prop.
        </TypeWriter>
      </Section>
    </div>
  );
}

export default App;
