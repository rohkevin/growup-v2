import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../../context';
import './SearchPage.css'

import Loading from '../../components/Loading/Loading';
import SearchPost from '../../components/SearchPost/SearchPost';

function SearchPage() {
  const [searchPosts, setSearchPosts] = useState(null);
  const { searchTerm } = useParams();
  const { isLoading, setIsLoading, blogPosts, handleOutsideClick } = useGlobalContext();

  useEffect(() => {
    setIsLoading(true);
    if (searchTerm && blogPosts) {
      const newSearchPosts = blogPosts.filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase()));
      setSearchPosts(newSearchPosts);
    }
    setIsLoading(false);
  }, [searchTerm, blogPosts])
  

  if (isLoading || !searchPosts) {
    return <Loading />
  }
  else {
    return (
      <section className="subpage-container searchpage" onClick={handleOutsideClick}>
        <div className="max-width">
          <section className="subpage-header">
            <h1>Search results for <span style={{fontSize:"inherit", textTransform: "none"}}>{searchTerm}</span></h1>
          </section>
          <div className="searchpage-main">
          {
            searchPosts.length > 1 ? 
              searchPosts.map((post) => {
                return <SearchPost key={post.id} {...post} />
              })
              :
              <p>Your search did not match any of our titles</p>
          }
          </div>
        </div>
      </section>
    )

  } 
}

export default SearchPage
