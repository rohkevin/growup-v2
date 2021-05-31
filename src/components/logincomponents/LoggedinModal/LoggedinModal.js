import React, { useState, useEffect, useRef } from 'react'
import '../LoginModal.css'
import { Link, useHistory } from 'react-router-dom'
import { useGlobalContext } from '../../../context'
import { useAuth } from '../../../AuthContext'

function LoggedinModal() {
  const { loggedinModalOpen, handleOutsideClick, loginLocation } = useGlobalContext();
  const { logout } = useAuth();
  const [error, setError] = useState("");
  const loginContainer = useRef(null);
  const history = useHistory();
  
  useEffect(()=>{
    const profile = loginContainer.current;
    const { center, bottom } = loginLocation;
    profile.style.left = `${center}px`;
    profile.style.top = `${bottom}px`;
  }, [loginLocation])

  const handleLogout = async () => {
    setError('');
    try { 
      await logout();
      history.push("/");
    } catch {
      setError('Failed to log out')
    }
  }
  return (
    <div className={loggedinModalOpen ? `loggedin-modal show-loggedin` : 'loggedin-modal'} onClick={handleOutsideClick} ref={loginContainer}>
        <div className="loggedin-modal-container">
          <Link to="/write" className="loggedin-menu-btn">Write</Link>
          <div className="divider"></div>
          <Link to="/update-profile" className="loggedin-menu-btn">Settings</Link>
          <div className="divider"></div>
          <button type="button" className="loggedin-menu-btn" onClick={handleLogout} aria-label="Logout button">Log Out</button>
        </div>
    </div>
  )
}

export default LoggedinModal
