import React from 'react'
import { useAuth } from '../../AuthContext'
function Dashboard() {
  const { currentUser } = useAuth();
  return (
    <section className="subpage-container">
      <div className="max-width">
        <div className="dashboard-container">
          <div className="subpage-header">
            <h2>Hi! This page is still under construction. Check back soon for cool features!</h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard
