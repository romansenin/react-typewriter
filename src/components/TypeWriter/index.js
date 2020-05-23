import React, { useState, useEffect } from "react";
import VisibilitySensor from "react-visibility-sensor";
import cloneDeep from "lodash/cloneDeep";
import "./index.css";

function TypeWriter(props) {
  const [children, setChildren] = useState([]);
  const [typewriter, setTypewriter] = useState([]);
  const [currentChild, setCurrentChild] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!children.length) {
      if (!Array.isArray(props.children)) {
        setChildren([props.children]);
      } else {
        setChildren(props.children);
      }
    } else {
      if (visible && children[currentChild]) {
        const child = children[currentChild];
        const newTypewriter = cloneDeep(typewriter);

        if (typeof child === "string") {
          if (newTypewriter[currentChild] !== child) {
            if (newTypewriter[currentChild] === undefined) {
              newTypewriter[currentChild] = child.charAt(0);
            } else {
              newTypewriter[currentChild] += child.substr(
                newTypewriter[currentChild].length,
                1
              );
            }
          } else {
            setCurrentChild(currentChild + 1);
          }
        } else {
          if (!Array.isArray(child)) {
            if (child.props.children) {
              if (typeof child.props.children === "string") {
                if (newTypewriter[currentChild] === undefined) {
                  newTypewriter[currentChild] = cloneDeep(child);
                  newTypewriter[
                    currentChild
                  ].props.children = child.props.children.charAt(0);
                  newTypewriter[currentChild].key = currentChild;
                } else {
                  const newString = newTypewriter[currentChild].props.children;
                  if (newString !== child.props.children) {
                    newTypewriter[
                      currentChild
                    ].props.children += child.props.children.substr(
                      newString.length,
                      1
                    );
                  } else {
                    setCurrentChild(currentChild + 1);
                  }
                }
              }
            } else {
              newTypewriter[currentChild] = cloneDeep(child);
              newTypewriter[currentChild].key = currentChild;
              setCurrentChild(currentChild + 1);
            }
          }    
        }
        setTimeout(() => {
          setTypewriter(newTypewriter);
        }, props.delay);
      } else {
        if (children[currentChild] === undefined && !visible) {
          if (props.restartable) {
            setTypewriter([]);
            setCurrentChild(0);
          }
        }
      }
    }
  }, [visible, children, typewriter]);

  return (
    <VisibilitySensor
      partialVisibility
      onChange={(isVisible) => {
        setVisible(isVisible);
      }}
    >
      <span className="typewriter" style={props.style}>
        {typewriter}
      </span>
    </VisibilitySensor>
  );
}

export default TypeWriter;
