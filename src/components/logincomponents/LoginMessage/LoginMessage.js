import React, { useEffect } from 'react'
import '../LoginModal.css'

function LoginMessage({ type, msg, removeAlert }) {
  useEffect(()=>{
    const timer = setTimeout(()=> {
      removeAlert();
    },3000);
    return () => clearTimeout(timer);
  },[]);

  return (
    <p className={`message alert-${type}`}>{msg}</p>
  )
}

export default LoginMessage;
