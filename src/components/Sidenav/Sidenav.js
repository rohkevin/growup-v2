import React, { useState } from 'react'
import { useGlobalContext } from '../../context'
import { FaTimes, FaChevronRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { social, topics } from '../../data'

function Sidenav() {
  const { sideNavOpen, setSideNavOpen, toggleMenu } = useGlobalContext();
  const [showChevron, setShowChevron] = useState(false);
  const hoverLink = (e) => {
    setShowChevron(!showChevron);
  }
  return (
    <div className={`${sideNavOpen ? 'side-menu-overlay show-menu' : 'side-menu-overlay'}`}>
      <div className="side-menu">
        <div className="side-nav-header">
          <button className="close-nav" onClick={toggleMenu}><FaTimes/></button>
          <h1>Grow up with us</h1>
          <button className="subscribe-btn">Subscribe today</button>
        </div>
        <div className="side-nav-main">
          {
            topics.map((topic)=>{
              const { id, name } = topic;
              return (
                <Link to={`/topic/${name.toLowerCase()}`} key={id} className="side-nav-topic" onMouseOver={()=>hoverLink} onClick={()=>setSideNavOpen(!sideNavOpen)}>
                  <p>{name}</p>
                  <FaChevronRight className="side-nav-chevron"/>
                </Link>
              )
            })
          }
        </div>
        <div className="side-nav-footer">
          <div className="divider"></div>
          <div className="social-icons-container">
            <p>Connect with us</p>
            {
              social.map((link)=>{
                const { id, url, icon } = link;
                return (
                  <a key={id} href={url} target="_blank" rel="noreferrer" className="social-icon">{icon}</a>
                )
              })
            }
          </div>
          <p className='copyright'>@2021 Growup, All rights reserved</p>
        </div>
        
      </div>
      
    </div>
  )
}

export default Sidenav
