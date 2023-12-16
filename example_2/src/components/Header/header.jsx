import React from 'react'
import '../Header/header.css';
import logo from '../../assets/react-core-concepts.png'

const reactDesc = ['Core','Fundamental','Advance'];

const getRandomIndex = (x) => {
  console.log(Math.floor(Math.random() * (x + 1)));
    return Math.floor(Math.random() * (x + 1));
}

function Header() {
  const desc = reactDesc[getRandomIndex(2)];
  return (
    <header>
        <img src={logo} alt='react-logo'/> 
        <h1>React Course</h1>
        <p>React {desc} concepts you will get to learn through out this course, which will help to imporve your react skills.</p>

    </header>
  )
}

export default Header