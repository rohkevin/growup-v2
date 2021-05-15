import React from 'react'
import { useGlobalContext } from '../context'
import { useAuth } from '../AuthContext'
import Searchbar from './Searchbar'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { topics } from '../data'

function Navbar() {
  const { toggleMenu, toggleLoginModal, toggleLoggedInModal } = useGlobalContext();
  const { currentUser } = useAuth();

  return (
    <nav>
      <div className={currentUser?"nav-container with-user":"nav-container"}>
        <button className="hamburger-menu" onClick={()=>toggleMenu()}><FaBars/></button>
        <Link to="/" className="logo">GROW<span className="logo-highlight">UP</span></Link>
        <div className="nav-links-container">
          {
            topics.map((topic)=>{
              const { id, name } = topic;
              return <Link to={`/topic/${name.toLowerCase()}`} className="nav-link" key={id}>{name}</Link>
            })
          }
        </div>
        <div className="search-container">
          <Searchbar/>
        </div>
        {
          currentUser ? 
          <button className="login-btn personal-login-btn" onClick={toggleLoggedInModal}>{currentUser.email.charAt(0)}</button>
          :
          <button className="login-btn" onClick={toggleLoginModal}>Login</button>
        }
      </div>
    </nav>
  )
}

export default Navbar
