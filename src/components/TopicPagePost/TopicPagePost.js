import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../context'

function TopicPagePost({ coverImage, title, date, author, authorImage, content }) {
  const { attachName } = useGlobalContext();
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const checkSize = () => {
    setWindowSize(window.innerWidth);
  }
  useEffect(()=>{
    window.addEventListener('resize', checkSize);
    return ()=>{
      window.removeEventListener('resize', checkSize);
    }
  }, [])
  const linkName = attachName(title);
  return (
    <Link to={`/article/${linkName}`} className="topic-page-post-container">
      <div className="topic-page-post-image">
        <img src={coverImage} alt={title}></img>
      </div>
      <div className="topic-page-text-container">
        <p className="topic-page-post-date">{date}</p>
        <h2 className="topic-page-post-title">{title}</h2>
        <div className="topic-page-post-content">
          {
            windowSize >= 800 && <p>{content.substring(0,200)}...</p>
          }
        </div>
        <div className="topic-page-author-container">
          <div className="topic-page-author-image-container">
            <img src={authorImage} alt={author}/>
          </div>
          
          <p>{author}</p>
        </div>
      </div>
    </Link>
  )
}

export default TopicPagePost
