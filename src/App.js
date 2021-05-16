import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

import Navbar from './components/Navbar/Navbar'
import Sidenav from './components/Sidenav/Sidenav'
import LoginModal from './components/logincomponents/LoginModal/LoginModal'
import LoggedinModal from './components/logincomponents/LoggedinModal/LoggedinModal'
import Footer from './components/Footer/Footer'

import Dashboard from './pages/Dashboard/Dashboard'
import Home from './pages/Home/Home'
import TopicPage from './pages/TopicPage/TopicPage'
import PostPage from './pages/PostPage/PostPage'
import NewStory from './pages/NewStory/NewStory'
import About from './pages/About/About'
import Error from './pages/Error/Error'
import PasswordReset from './pages/PasswordReset/PasswordReset'
import UpdateProfile from './pages/UpdateProfile/UpdateProfile'
import SearchPage from './pages/SearchPage/SearchPage'

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(()=>{
    window.scrollTo(0,0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop/>
        <Navbar/>
        <Sidenav/>
        <LoginModal/>
        <LoggedinModal/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/topic/:topic" component={TopicPage}/>
          <Route path="/article/:linkName" component={PostPage}/>
          <Route path="/about" component={About}/>
          <PrivateRoute exact path="/dashboard" component={Dashboard}/>
          <PrivateRoute exact path="/write" component={NewStory}/>
          <Route path="/auth/reset" component={PasswordReset}/>
          <PrivateRoute path="/update-profile" component={UpdateProfile}/>
          <Route exact path="/search?q=:searchTerm" component={SearchPage}/>
          <Route path="*" component={Error}/>
        </Switch>
        <Footer/>
    </Router>
  )
}

export default App
