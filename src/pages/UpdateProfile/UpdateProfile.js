import React, { useRef } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useGlobalContext } from '../../context'
import { useAuth } from '../../AuthContext'

import LoginMessage from '../../components/logincomponents/LoginMessage/LoginMessage'

function UpdateProfile() {
  const { showAlert, loginAlert } = useGlobalContext();
  const { currentUser, updateEmail, updatePassword } = useAuth();
  
  const history = useHistory();
  
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  
  const handleSubmit = () => {
    if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
      return showAlert(true, 'failure', 'Passwords do not match!');
    }

    const promises = [];
    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordRef.current.value !== currentUser.password) {
      promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises).then(()=>{
      showAlert(true,'success','Successfully updated!');
      setTimeout(()=>{
        history.push("/update-profile");
      },2000)
    }).catch(()=>{
      showAlert(true, 'failure', 'Failed to update account');
    }).finally(()=>{
      // setAuthLoading(false);
    })
  }

  return (
    <section className="pw-reset-page-container">
      <form className="pw-reset-form" onSubmit={handleSubmit}>
        {loginAlert.show && <LoginMessage {...loginAlert} removeAlert={showAlert}/>}
        <h1>Update Profile</h1>
        <label>Email</label>
        <input 
          type="email" 
          ref={emailRef} 
          required 
          defaultValue={currentUser.email}>  
        </input>
        <label htmlFor="login-password">Password</label>
        <input 
          type="password"
          name="login-password"
          ref={passwordRef}
          placeholder="Leave blank to keep the same"
        />
        <label htmlFor="login-password-confirmation">Password Confirm</label>
        <input 
          type="password"
          name="login-password-confirmation"
          ref={passwordConfirmationRef}
          placeholder="Leave blank to keep the same"
        />
        <button type="submit" className="pw-reset-btn" aria-label="Update profile button">Update</button>
        <Link to="/dashboard" className="pw-reset-signup-link" aria-label="Go back to dashboard button">Go Back</Link>
      </form>
    </section>
  )
}

export default UpdateProfile
