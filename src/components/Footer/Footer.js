import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { social } from '../../data'

function Footer() {
  return (
    <footer>
      <div className="max-width">
        <Link to="/" className="logo">GROW<span className="logo-highlight">UP</span></Link>
        <div className="footer-container">
          <div className="footer-div">
            
            <div className="footer-social-container">
              {
                social.map((link)=>{
                  const { id, url, icon } = link;
                  return (
                    <a key={id} href={url} target="_blank" rel="noreferrer" className="footer-social-icon">{icon}</a>
                  )
                })
              }
            </div>
          </div>
          <div className="footer-div">
            <Link to="/" className="footer-link">About Us</Link>
            <Link to="/" className="footer-link">Contact</Link>
            <Link to="/" className="footer-link">Terms of Use</Link>
            <Link to="/" className="footer-link">Privacy Policy</Link>
            <Link to="/" className="footer-link">Ad Choice</Link>
          </div>
        </div>
        <p className="footer-copyright">@2021 Growup, All rights reserved</p>
      </div>
      
    </footer>
  )
}

export default Footer
