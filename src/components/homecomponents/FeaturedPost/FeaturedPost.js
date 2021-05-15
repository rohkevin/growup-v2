import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../../context'
function FeaturedPost({ id, url, coverImage, title, date, author, authimg }) {
  const { attachName } = useGlobalContext();
  const linkName=attachName(title);
  return (
    <Link to={`/article/${linkName}`} className="post-container">
      <div className="post-image">
        <img src={coverImage} alt={title}></img>
      </div>
      <div className="text-container">
        <p className="post-date">{date}</p>
        <h2 className="post-title">{title}</h2>
        <div className="author-container">
          <div className="author-image-container">
            <img src={authimg} alt={author}/>
          </div>
          
          <p>{author}</p>
        </div>
      </div>
    </Link>
  )
}

export default FeaturedPost
