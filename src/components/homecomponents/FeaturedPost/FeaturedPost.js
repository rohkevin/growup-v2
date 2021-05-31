import React from 'react'
import './FeaturedPost.css'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../../context'
function FeaturedPost({ coverImage, title, datePretty, author, authorImage }) {
  const { attachName } = useGlobalContext();
  const linkName=attachName(title);
  return (
    <Link to={`/article/${linkName}`} className="post-container">
      <div className="post-image">
        <img src={coverImage} alt={title}></img>
      </div>
      <div className="text-container">
        <p className="post-date">{datePretty}</p>
        <h2 className="post-title">{title}</h2>
        <div className="author-container">
          <div className="author-image-container">
            <img src={authorImage} alt={author}/>
          </div>
          
          <p>{author}</p>
        </div>
      </div>
    </Link>
  )
}

export default FeaturedPost
