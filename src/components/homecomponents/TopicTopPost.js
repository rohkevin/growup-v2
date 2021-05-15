import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../context'
function TopicTopPost({ id, index, url, coverImage, title }) {
  const { attachName } = useGlobalContext();
  const linkName=attachName(title);
  return (
    <Link to={`/article/${linkName}`} href={url} className="ttp-post-container">
      <div className="ttp-image">
        <p className="ttp-index">{index}</p>
        <img src={coverImage} alt={title}></img>
      </div>
      <div className="ttp-text-container">
        <h2 className="ttp-post-title">{title}</h2>
      </div>
    </Link>
  )
}

export default TopicTopPost
