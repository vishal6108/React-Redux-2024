import React from 'react'
import { NavLink } from 'react-router-dom'
import cssClass from './navBar.module.css'

function NavBar() {
  return (
    <header className={cssClass.header}>
        <nav>
            <ul className={cssClass.list}>
                <li>
                    <NavLink to='/' className={({isActive}) => isActive ? cssClass.active: undefined} end>Home Page</NavLink>
                </li>
                <li>
                    <NavLink to='/products' className={({isActive}) => isActive ? cssClass.active: undefined}>Product Page</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default NavBar