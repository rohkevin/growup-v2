import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../context'
import { useAuth } from '../../AuthContext'
import { FaTimes, FaGoogle } from 'react-icons/fa'
import LoginMessage from '../logincomponents/LoginMessage'


function LoginModal() {
  const { toggleLoginModal, loginModalOpen, handleOutsideClick, showSignup, setShowSignup, showAlert, loginAlert } = useGlobalContext();
  const { signup, login, authLoading, signInWithGoogle } = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  
  useEffect(()=>{
    if (emailRef.current.value){
      emailRef.current.value="";
    }
    if (passwordRef.current.value){
      passwordRef.current.value="";
    }
    if (showSignup){
      if (passwordConfirmationRef.current.value){
        passwordConfirmationRef.current.value="";
      }
    }
  }, [toggleLoginModal, showSignup])
  const handleSubmit = async(e) => {
    e.preventDefault();
    if (showSignup){
      if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
        return showAlert(true, 'failure', 'Passwords do not match!');
      }
  
      try {
        // setAuthLoading(true);
        await signup(emailRef.current.value, passwordRef.current.value);
        showAlert(true,'success','Redirecting...');
        toggleLoginModal();
      } catch(error){
        switch (error.code){
          case ('auth/email-already-in-use') :
            showAlert(true,'failure',error.message);
            break;
          case ('auth/invalid-email') :
            showAlert(true,'failure',error.message);
            break;
          case ('auth/weak-password') :
            showAlert(true,'failure',error.message);
            break;
          default:
            showAlert(true,'failure','Failed to create an account');
            break;
        }
      }

      // setAuthLoading(false);
    } else {
      try {
        // setAuthLoading(true);
        await login(emailRef.current.value, passwordRef.current.value);
        showAlert(true,'success','Redirecting...');
        toggleLoginModal();
      } catch {
        showAlert(true, 'failure', 'Failed to sign in!')
      }
      // setAuthLoading(false);
    }
  }
  const toggleShowSignup = () => {
    setShowSignup(!showSignup);
  }
  const handleGoogleSignin = () => {
    signInWithGoogle();
    toggleLoginModal();
  }
  return (
    <div className={loginModalOpen ? `login-modal-overlay show-login-overlay` : 'login-modal-overlay'} onClick={handleOutsideClick}>
      <div className={loginModalOpen ? `login-modal-outer-container show-login-modal` : 'login-modal-outer-container'}>
        <div className="login-modal-inner-container">
          <button onClick={toggleLoginModal} className="login-close-btn"><FaTimes/></button>
          <form className="login-form" onSubmit={handleSubmit}>
            {loginAlert.show && <LoginMessage {...loginAlert} removeAlert={showAlert}/>}
            {showSignup ? <h1>Sign Up</h1> : <h1>Log In</h1>}
            <label htmlFor="login-email">Email</label>
            <input 
              type="email"
              name="login-email"
              ref={emailRef}
            />
            <label htmlFor="login-password">Password</label>
            <input 
              type="password"
              name="login-password"
              ref={passwordRef}
            />
            {
              showSignup && (
                <>
                  <label htmlFor="login-password-confirmation">Password Confirm</label>
                  <input 
                    type="password"
                    name="login-password-confirmation"
                    ref={passwordConfirmationRef}
                  />
                </>
              )
            }
            {
              showSignup ? 
              <p className="login-modal-redirect">Already have an account? Click to <button type="button" onClick={toggleShowSignup} className="login-modal-highlight">log in</button></p>
              :
              <>
              
              <Link to="/auth/reset" className="forgot-pw">Forgot your password?</Link>
              <p className="login-modal-redirect">Want to sign up? Click to <button type="button" onClick={toggleShowSignup} className="login-modal-highlight"> sign up</button></p>
              </>
            }
            <button 
              type="submit" 
              className="login-modal-btn login-submit" 
              disabled={authLoading}
              >
              {showSignup ? 'Sign Up' : 'Log In'}
            </button>
            <button 
              type="button" 
              className="login-modal-btn login-alternate" 
              id="google" 
              onClick={handleGoogleSignin}>
              <FaGoogle className="login-alternate-logo"/>
              <p>Continue with Google</p>
            </button>
          </form>
        </div>
      </div>
      
      
    </div>
  )
}

export default LoginModal
