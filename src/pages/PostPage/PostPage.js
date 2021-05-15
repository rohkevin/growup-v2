import React, { useState, useEffect } from 'react'
import { useGlobalContext } from '../../context'
import { useParams } from 'react-router-dom'

import SubscribeBlock from '../../components/SubscribeBlock/SubscribeBlock'
import Loading from '../../components/Loading/Loading'

function PostPage() {
  const [post, setPost] = useState(null);
  const { isLoading, setIsLoading, blogPosts, handleOutsideClick, attachName } = useGlobalContext();
  const { linkName } = useParams();
  
  useEffect(()=>{
    setIsLoading(true);
    if (blogPosts){
      const newPost = blogPosts.filter((data)=> attachName(data.title) === linkName);
      setPost(newPost[0]);
    } else {
      <h2>No posts</h2>
    }
    setIsLoading(false);
  }, [linkName, attachName, blogPosts, setIsLoading])

  if (isLoading){
    return <Loading/>
  } 
  if (!post){
    return <h2>No posts</h2>
  } else {
    const { coverImage, title, date, author, authimg, content } = post;
    return (
      <section className="subpage-container" onClick={handleOutsideClick}>
        <div className="max-width">
          <section className="subpage-header">
            <div className="subpage-main-ad">
              Ad placement here
            </div>
          </section>
          <div className="subpage-main">
            <section className="postpage-article-container">
              <div className="postpage-image-container">
                <img src={coverImage} alt={title}></img>
              </div>
              <div className="postpage-article-header">
                <h1>{title}</h1>
                <p>{date}</p>
                <div className="postpage-author-container">
                  <div className="postpage-author-image-container">
                    <img src={authimg} alt={author}/>
                  </div>
                  <p>{author}</p>
                </div>
              </div>
              <div className="postpage-content">
                <p>{content}</p>
              </div>
            </section>
            <aside className="subpage-side-container">
              <SubscribeBlock/>
              <div className="subpage-side-ad">
                Ad placement here
              </div>
            </aside>
          </div>
        </div>
      </section>
    )
  }
}

export default PostPage
