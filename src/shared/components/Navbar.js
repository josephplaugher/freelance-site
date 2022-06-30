import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import MenuButton from './MenuButton'

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
      <div id="menu" onClick={() => { setMenu(menu === true ? false : true) }} ><MenuButton /></div>
      {
        menu && (
          <ul id='nav-mobile'>
            {pages.map(({ path, param }) => (
              <li key={param} onClick={() => { setMenu(false) }}>
                <NavLink activeStyle={{ fontWeight: 'bold' }} to={`/${param}`}>
                  <div className='nav-item'>
                    {path}
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>
        )
      }
    </>
  )
}