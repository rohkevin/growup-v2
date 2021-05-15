import React, { Fragment, useState } from 'react'
import { useGlobalContext } from '../context'
import { useParams } from 'react-router-dom'
import { topics as topicsData } from '../data'
import TopicPagePost from '../components/TopicPagePost'
import SubscribeBlock from '../components/SubscribeBlock.js'
import Loading from '../components/Loading'

function TopicPage() {
  const [articleIndex, setArticleIndex] = useState(5);
  let { topic } = useParams();
  const { blogPosts, handleOutsideClick } = useGlobalContext();
  
  if (blogPosts){
    const topicPosts = blogPosts.filter((post)=>post.topic.toLowerCase()===topic);
    const handleLoadMore = () => {
      const newIndex = articleIndex + 5 > topicPosts.length ? topicPosts.length : articleIndex + 5;
      setArticleIndex(newIndex);
    }
    return (
      <section className="subpage-container" onClick={handleOutsideClick}>
        <div className="max-width">
          <section className="subpage-header">
            <h1>{topic}</h1>
            {
              topicsData.map((topicData)=> topicData.name.toLowerCase()===topic && <p key={topicData.id}>{topicData.intro}</p>)
            }
          </section>
          <div className="subpage-main">
            <section className="subpage-articles-container">
              <div className="subpage-articles">
                {
                  topicPosts.slice(0,3).map((post)=>{
                    const { id } = post;
                    return (
                      <TopicPagePost key={id} {...post}/>
                    )
                  })
                }
              </div>
              <div className={topicPosts.length>3 ? `subpage-articles` : `display-none`}>
                {
                  topicPosts.slice(3,articleIndex).map((post, index)=>{
                    const { id } = post;
                    return (
                      <Fragment key={id}>
                        <TopicPagePost key={id} {...post}/>
                        {
                          index%4===0 && <div key={index} className="subpage-main-ad">
                            Ad placement here
                          </div>
                        }
                      </Fragment>
                    )
                  })
                }
              </div>
              <button type="button" className={articleIndex === topicPosts.length ? `display-none` : `topics-viewmore-btn load-more-btn`} onClick={handleLoadMore}>Load more articles</button>
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

  } else {
    return <Loading/>
  }
}

export default TopicPage
