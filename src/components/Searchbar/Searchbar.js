import React from 'react'
import './Searchbar.css'
import { useHistory } from 'react-router-dom';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../../context'

function Searchbar() {
  const { showSearch, toggleSearch, searchTerm, setSearchTerm } =  useGlobalContext();

  let history = useHistory();

  const closeSearch = () => {
    toggleSearch();
    setSearchTerm('')
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm !== "") {
      history.push(`/search=${searchTerm}`);
      setSearchTerm("");
    }
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
          <button type="button" className="search-btn" onClick={closeSearch} aria-label="Close Search"><FaTimes alt="close search button image"/></button>
          :
          <button type="button" className="search-btn" onClick={toggleSearch} aria-label="Open Search"><FaSearch alt="open search button image"/></button>
        }
      </div>
    </form>
  )
}

export default Searchbar
