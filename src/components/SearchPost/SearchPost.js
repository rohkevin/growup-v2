import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../context';
import './SearchPost.css'

function SearchPost({ coverImage, title, date, author, authorImage, content }) {
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
    <Link to={`/article/${linkName}`} className="searchpage-post-container">
      <div className="searchpage-post-image">
        <img src={coverImage} alt={title}></img>
      </div>
      <div className="searchpage-text-container">
        <p className="searchpage-post-date">{date}</p>
        <h2 className="searchpage-post-title">{title}</h2>
        <div className="searchpage-post-content">
          {
            windowSize >= 800 && <p>{content.substring(0,200)}...</p>
          }
        </div>
        <div className="searchpage-author-container">
          <div className="searchpage-author-image-container">
            <img src={authorImage} alt={author}/>
          </div>
          
          <p>{author}</p>
        </div>
      </div>
    </Link>
  )
}


export default SearchPost
