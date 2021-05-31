import React, { useState, useEffect } from 'react'
import './Home.css'
import { useGlobalContext } from '../../context'
import { Link } from 'react-router-dom'
import { topics } from '../../data'

import FeaturedPost from '../../components/homecomponents/FeaturedPost/FeaturedPost'
import TopicTopPost from '../../components/homecomponents/TopicTopPost/TopicTopPost'
import TopicPost from '../../components/homecomponents/TopicPost/TopicPost'
import Loading from '../../components/Loading/Loading'

function Home() {
  const { isLoading, setIsLoading, blogPosts, handleOutsideClick } = useGlobalContext();
  const [featuredPosts, setFeaturedPosts] = useState();

  const getFeaturedPosts = () => {
    const updateFeaturedPosts=blogPosts.slice(0,4);
    setFeaturedPosts(updateFeaturedPosts);
  }

  useEffect(()=>{
    setIsLoading(true);
    if (blogPosts){
      getFeaturedPosts();
    }
    setIsLoading(false);
  }, [blogPosts])

  if (isLoading){
    return <Loading/>
  }
  if (!blogPosts){
    return <h2>No blog posts to display</h2>
  } else {
    return (
      <main onClick={handleOutsideClick}>
        <div className="ad-container ad-type-1">
          <p>Ad placement here</p>
        </div>
        <section className="home-container">
          <div className="max-width">
            <h1 className="home-header">Featured Articles</h1>
            <div className="featured-container">
              { 
                featuredPosts ?
                featuredPosts.map((link)=>{
                  const { id } = link;
                  return (
                    <FeaturedPost key={id} {...link}/>
                  )
                })
                :
                <h2>No featured posts</h2>
              }
            </div>
          </div>
        </section>  
        <section className="home-container">
        {
          topics.map((topic) => {
            const { id, name } = topic;
            let index = 0;
            return(
              <div className="topics-container" key={id}>
                <div className="topics-top-posts">
                  <div className="max-width">
                    <h1 className="ttp-header">{name}</h1>
                    <div className="ttp-container">
                    {
                      blogPosts.map((post)=>{
                        const {id} = post;
                        if (post.topic===name.toLowerCase() && index <= 3){
                          index+=1;
                          return <TopicTopPost key={id} index={index} {...post} />
                        }
                        return null;
                      })
                    }
                    </div>
                  </div>
                </div>
                <div className="topics-posts max-width">
                  <div className="ad-container ad-type-2">
                    <p>Ad placement here</p>
                  </div>
                  {
                      blogPosts.map((post)=>{
                        const {id} = post;
                        if (post.topic===name.toLowerCase() && index > 3 && index <=7){
                          index+=1;
                          return <TopicPost key={id} index={index} {...post} />
                        }
                        return null;
                      })
                    }
                </div>
                <Link to={`/topic/${name.toLowerCase()}`} className="topics-viewmore-btn">View more on {name}</Link>
              </div>
            )
          })
        }
        </section>
        
      </main>
    )
  }
}

export default Home
