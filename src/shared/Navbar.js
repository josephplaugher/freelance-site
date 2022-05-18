import * as React from 'react'
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
  return (
    <ul className='nav'>
      {pages.map(({ path, param }) => (
        <li key={param}>
          <NavLink activeStyle={{ fontWeight: 'bold' }} to={`/${param}`}>
            {path}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}