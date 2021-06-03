import React from 'react'
import './Navbar.css'
import { useGlobalContext } from '../../context'
import { useAuth } from '../../AuthContext'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { topics } from '../../data'

import Searchbar from '../Searchbar/Searchbar'

function Navbar() {
  const { toggleMenu, toggleLoginModal, toggleLoggedInModal } = useGlobalContext();
  const { currentUser } = useAuth();

  return (
    <nav id="nav-bar">
      <div className={currentUser?"nav-container with-user":"nav-container"}>
        <div className="nav-left">
          <button 
            className="hamburger-menu" 
            onClick={()=>toggleMenu()} 
            aria-label="hamburger-menu button"
            ><FaBars alt="hamburger-menu button image"/>
          </button>
          <Link to="/" className="logo">GROW<span className="logo-highlight">UP</span></Link>
          <div className="nav-links-container">
            {
              topics.map((topic)=>{
                const { id, name } = topic;
                return <Link to={`/topic/${name.toLowerCase()}`} className="nav-link" key={id}>{name}</Link>
              })
            }
          </div>
        </div>

        <div className="nav-right">
          <div className="search-container">
            <Searchbar/>
          </div>
          <div 
            className="login-btn-container"
            style={currentUser ? {width: '2rem'} : {width: '100px'}}
            >
            {
              currentUser ? 
              <button 
                className="login-btn personal-login-btn" 
                onClick={toggleLoggedInModal} 
                aria-label="signed in user button"
                >{currentUser.email.charAt(0)}
              </button>
              :
              <button 
                className="login-btn" 
                onClick={toggleLoginModal} 
                aria-label="login button"
                >Login
              </button>
            }
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
