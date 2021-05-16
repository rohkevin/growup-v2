import React, { useRef, useEffect } from 'react'
import './Searchbar.css'
import { Redirect, useHistory } from 'react-router-dom';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../../context'

function Searchbar() {
  const { showSearch, toggleSearch, searchTerm, setSearchTerm } =  useGlobalContext();
  // const searchBox = useRef('');

  let history = useHistory();

  const closeSearch = () => {
    toggleSearch();
    setSearchTerm('')
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search?q=${searchTerm}`);
  }
  return (
    <form onSubmit={handleSubmit} className="tempform">
      <div className={`${showSearch ? 'search-box show-search-box' : 'search-box'}`}>
        <input 
          type="text"
          className={`${showSearch ? 'show-search search-input' : 'search-input'}`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
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
