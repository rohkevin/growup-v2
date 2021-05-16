import React, { useRef, useEffect } from 'react'
import './Searchbar.css'
import { FaSearch, FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../../context'

function Searchbar() {
  const { showSearch, toggleSearch } =  useGlobalContext();
  const searchBox = useRef('');
  useEffect(()=>{
    searchBox.current.focus();
  },[showSearch]);
  const closeSearch = () => {
    toggleSearch();
    searchBox.current.value="";
  }
  const handleSubmit = () => {
    
  }
  return (
    <form onSubmit={handleSubmit} className="tempform">
      <div className={`${showSearch ? 'search-box show-search-box' : 'search-box'}`}>
        <input 
          type="text"
          className={`${showSearch ? 'show-search search-input' : 'search-input'}`}
          ref={searchBox}
        />
        {
          showSearch ? 
          <button type="button" className="search-btn" onClick={closeSearch}><FaTimes/></button>
          :
          <button type="button" className="search-btn" onClick={toggleSearch}><FaSearch/></button>
        }
      </div>
    </form>
  )
}

export default Searchbar
