import React from 'react'
import { Link } from 'react-router-dom'

function SubscribeBlock() {
  return (
    <form className="subpage-subscribe">
      <label htmlFor="subscribe-email-input" id="subscribe-email-input">Subscribe to our weekly newsletters on growing up with us today!</label><br/>
      <input 
        type="text"
        placeholder="Enter your email"
        className="subpage-subscribe-input"
        name="subscribe-email-input"
      />
      <p>By signing up you agree to our <Link to="/" className="subpage-subscribe-terms">Terms of use</Link> and <Link to="/" className="subpage-subscribe-terms">Privacy policy</Link></p>
      <button type="submit" className="subpage-subscribe-button">Join the community</button>
    </form>
  )
}

export default SubscribeBlock
