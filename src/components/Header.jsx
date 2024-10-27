import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  function localStrDelete() {
    localStorage.clear();
    window.location.reload()
  }
  return (
    <div className='header'>
      <nav className='head_nav'>
        <NavLink to='/strategy-step1'><button type="button">Step 1</button></NavLink>
        <NavLink to='/strategy-step2'><button type="button">Step 2</button></NavLink>
        <NavLink to='/strategy-step3'><button type="button">Step 3</button></NavLink>

        <button onClick={(e)=>localStrDelete(e)} type="button">Restart Game</button>
      </nav>
    </div>
  )
}

export default Header