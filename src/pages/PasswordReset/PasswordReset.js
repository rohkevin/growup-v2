import React, { useState, useEffect, useRef } from 'react'
import './PasswordReset.css'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../context'
import { useAuth } from '../../AuthContext'
import LoginMessage from '../../components/logincomponents/LoginMessage/LoginMessage'

function PasswordReset() {
  const { closeLoginModal, toggleLoginModal, setShowSignup, showAlert, loginAlert } = useGlobalContext();
  const { resetPassword, setAuthLoading } = useAuth();
  useEffect(()=> {
    closeLoginModal();
  }, [])

  const emailRef = useRef();

  const handleReset = async(e) => {
    e.preventDefault();
    try {
      // setAuthLoading(true);
      await resetPassword(emailRef.current.value);
      showAlert(true, 'success', 'Check your inbox for further instructions!');
    } catch {
      showAlert(true, 'failure', 'Failed to reset password');
    }
    // setAuthLoading(false);
  }
  const handleSignup = () => {
    toggleLoginModal();
    setShowSignup(true);
  }
  
  return (
    <section className="pw-reset-page-container">
      <form className="pw-reset-form">
        {loginAlert.show && <LoginMessage {...loginAlert} removeAlert={showAlert}/>}
        <h1>Password Reset</h1>
        <p>Enter the email address you are registered with us. We'll email you with password reset instructions.</p>
        
        <label>Email</label>
        <input type="email" ref={emailRef}></input>
        <button className="pw-reset-btn" onClick={handleReset}>Send now</button>
        <p>Need an account? <Link to="/auth/reset" onClick={handleSignup} className="pw-reset-signup-link">Sign Up!</Link></p>
      </form>
    </section>
  )
}

export default PasswordReset
