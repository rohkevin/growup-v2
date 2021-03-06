import React from 'react'
import './TopicPost.css'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../../context'

function TopicPost({ coverImage, title, author, authorImage, content }) {
  const { attachName } = useGlobalContext();
  const linkName=attachName(title);
  return (
    <Link to={`/article/${linkName}`} className="tp-container">
      <div className="tp-image">
        <img src={coverImage} alt={title} />
      </div>
      <div className="tp-text-container">
        <h2 className="tp-post-title">{title}</h2>
        <p className="tp-text">{content.substring(0,150)}...</p>
        <div className="author-container">
          <div className="author-image-container">
            <img 
              src={authorImage} 
              alt={author} 
              width="30"
              height="30"  
            />
          </div> 
          
          <p>{author}</p>
        </div>
      </div>
    </Link>
  )
}

export default TopicPost
