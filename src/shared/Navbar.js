import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const pages = [
  {
    path: 'Home',
    param: 'home',
  },
  {
    path: 'About Me',
    param: 'about',
  },
  {
    path: 'Services',
    param: 'services',
  },
  {
    path: 'Contact',
    param: 'contact',
  },
  {
    path: 'Portfolio',
    param: 'portfolio'
  }
]

export default function Navbar() {
  const [menu, setMenu] = useState(false)

  return (
    <>
      <ul id='nav'>
        {pages.map(({ path, param }) => (
          <li key={param}>
            <NavLink activeStyle={{ fontWeight: 'bold' }} to={`/${param}`}>
              {path}
            </NavLink>
          </li>
        ))}
      </ul>
      <ul id='nav-mobile'>
        <li><div id="menu" onClick={() => { setMenu(menu === true ? false : true) }}>MENU</div></li>
        {menu && (pages.map(({ path, param }) => (
          <li key={param}>
            <div className='nav-item'>
              <NavLink activeStyle={{ fontWeight: 'bold' }} to={`/${param}`}>
                {path}
              </NavLink>
            </div>
          </li>
        )))}

      </ul>
    </>
  )
}