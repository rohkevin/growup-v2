import React from 'react'
import './FeaturedPost.css'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../../context'
function FeaturedPost({ coverImage, title, datePretty, author, authorImage }) {
  const { attachName, windowSize } = useGlobalContext();
  const linkName=attachName(title);
  return (
    <Link to={`/article/${linkName}`} className="post-container">
      <div className="post-image">
        <img 
          src={coverImage} 
          alt={title} 
          width={windowSize > 1200 ? 542 : windowSize/2}
          height={windowSize > 1200 ? 300 : 0.3*windowSize}
        />
      </div>
      <div className="text-container">
        <p className="post-date">{datePretty}</p>
        <h2 className="post-title">{title}</h2>
        <div className="featured-author-container">
          <div className="featured-author-image-container">
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

export default FeaturedPost
