import React from 'react'
import { Link } from 'react-router-dom'
function Error() {
  return (
    <section className="error-page">
      <div>
        <h1>This page does not exist!</h1>
        <Link to="/">Return to home</Link>

      </div>
    </section>
  )
}

export default Error
