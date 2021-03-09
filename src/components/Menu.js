import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'
import '../stylesheets/menu.scss'

const Menu = () => {
  const location = useLocation().pathname
  const locationStyle = {
    color: '#FFF'
  }

  return (
    <div className='menu'>
      <div className="menu__buttons">
        <Link to='/search'>
          <div className="btn" style={location === '/search' ? locationStyle : {}}>SEARCH</div>
        </Link>
        <Link to='/mydogs'>
          <div className="btn" style={location === '/mydogs' ? locationStyle : {}}>MYDOGS</div>
        </Link>
        <Link to='/qna' className='desktop'>
          <div className="btn" style={location === '/qna' ? locationStyle : {}}>{`Q&A`}</div>
        </Link>
      </div>
      <Logo />
    </div>
  )
}

export default Menu
