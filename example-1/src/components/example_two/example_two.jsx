import React from "react";
import { useState } from "react";
import logo from  '../../logo.svg';
import './exampleTwoStyles.css';

const content = [
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem",
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering",
  ],
  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)",
  ],
  [
    "Un-official web page (*******)",
    "Remix.js (new framework)",
    "Flutter (build native mobile apps with dart/flutter)",
  ],
];

function ExampleTwo() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);
  const [activeContentIndexOne, setActiveContentIndexOne] = useState(0);
  return (
    <div>
      <header>
      <img src={logo} alt="logo" />
        <div>
          <h1>React.Js</h1>
          <p>i.e., using the React library for rendering the UI</p>
        </div>
      </header>
      <div id="tabs">
        <menu>
          <button
            className={activeContentIndex === 0 ? "active" : ""}
            onClick={() => setActiveContentIndex(0)}
          >
            Why React?
          </button>
          <button
            className={activeContentIndex === 1 ? "active" : ""}
            onClick={() => setActiveContentIndex(1)}
          >
            Core Features
          </button>
          <button
            className={activeContentIndex === 2 ? "active" : ""}
            onClick={() => setActiveContentIndex(2)}
          >
            Related Rescourse
          </button>
          <button
            className={activeContentIndex === 3 ? "active" : ""}
            onClick={() => setActiveContentIndex(3)}
          >
            Unrelated Rescourse
          </button>
        </menu>
        <div id="tab-content">
          <ul>
            {content[activeContentIndex].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div id="tabsone">
        <menu>
          <button
            className={activeContentIndexOne === 0 ? "active" : ""}
            onClick={() => setActiveContentIndexOne(0)}
          >
            Why React?
          </button>
          <button
            className={activeContentIndexOne === 1 ? "active" : ""}
            onClick={() => setActiveContentIndexOne(1)}
          >
            Core Features
          </button>
          <button
            className={activeContentIndexOne === 2 ? "active" : ""}
            onClick={() => setActiveContentIndexOne(2)}
          >
            Related Rescourse
          </button>
          <button
            className={activeContentIndexOne === 3 ? "active" : ""}
            onClick={() => setActiveContentIndexOne(3)}
          >
            Unrelated Rescourse
          </button>
        </menu>
        <div id="tabsone-content">
          <ul>
            {content[activeContentIndexOne].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ExampleTwo;
