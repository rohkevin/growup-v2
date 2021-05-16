import React from 'react'
import { useParams } from 'react-router-dom'
import './SearchPage.css'

function SearchPage() {
  const { searchTerm } = useParams();


  
  return (
    <section className="subpage-container">
      {searchTerm}
      YO
    </section>
  )
}

export default SearchPage
