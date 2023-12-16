import React, { useState } from 'react'
import logo from  '../../logo.svg';
import './exampleOneStyles.css';

const content = [
    [
      "React is extremely popular",
      "It makes building complex, interactive UIs a breeze",
      "It's powerful & flexible",
      "It has a very active and versatile ecosystem"
    ],
    [
      "Components, JSX & Props",
      "State",
      "Hooks (e.g., useEffect())",
      "Dynamic rendering"
    ],
    [
      "Official web page (react.dev)",
      "Next.js (Fullstack framework)",
      "React Native (build native mobile apps with React)"
    ]
  ];

function ExampleOne() {
  const [activeState, setActiveState] = useState(0);  
  return (
    <div>
        <header>
        <img src={logo}  className="App-logo" alt="logo" />
        <div>
        <h1 >React Js</h1> 
        <p >Using ReactJs Library make a rendering UI in first Example Project </p>
        </div>
        </header>
        <div id='tabs'>
         <menu>
            <button 
            className={activeState === 0? 'active' : ''} 
            onClick={() => setActiveState(0)}>
            Why React?
            </button>
            <button
            className={activeState === 1? 'active' : ''}
            onClick={() => setActiveState(1)}>
            Core Features</button>
            <button
            className={activeState === 2? 'active' : ''} 
            onClick={() => setActiveState(2)}
            >
            Related Resources.</button>
        </menu>   
        <div id="tab-content">
          <ul>
            {content[activeState].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        </div>
    </div>
  )
}

export default ExampleOne