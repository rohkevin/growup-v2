import React, { useContext, useEffect, useState } from 'react'
import app from './firebase'


const AppContext = React.createContext();


function AppProvider({ children }) {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [showSignup, setShowSignup] = useState(true);
  const [loggedinModalOpen, setLoggedinModalOpen] = useState(false);  
  const [loginLocation, setLoginLocation] = useState({});
  const [loginAlert, setLoginAlert] = useState({show: false, type: '', msg: ''});
  const [blogPosts, setBlogPosts] = useState();

  useEffect(()=>{
    setIsLoading(true);
    app.database()
    .ref("/posts")
    .once("value")
    .then(snapshot => {
      
      let posts = [];
      const snapshotValue = snapshot.val();
      for (let postID in snapshotValue){
        let parsedDate = Date.parse(snapshotValue[postID].dateFormatted);
        snapshotValue[postID].dateFormatted = parsedDate;
        posts.push(snapshotValue[postID])
      }
      const sortByDate = posts.sort((a,b) => b.dateFormatted - a.dateFormatted);
      setBlogPosts(sortByDate);
      setIsLoading(false);
    })
  },[])

  const toggleMenu = () => {
    setSideNavOpen(!sideNavOpen);
  }
  const toggleSearch = () => { 
    setShowSearch(!showSearch);
  }
  const closeSideMenu = () => {
    setSideNavOpen(false);
  }
  const closeLoginModal = () => {
    setLoginModalOpen(false);
  }
  const closeLoggedinModal = () => {
    setLoggedinModalOpen(false);
  }
  const handleOutsideClick = (e) => {
    if (!e.target.classList.contains('show-menu')){
      closeSideMenu();
    }
    if(e.target.classList.contains('login-modal-outer-container')){
      closeLoginModal();
    }
    if(!e.target.classList.contains('show-loggedin')){
      closeLoggedinModal();
    }
  }
  const attachName = (str) => {
    return str.replace(/\s/g, '').replace(/,/g,'').replace(/\./g,'')
  }
  const toggleLoginModal = ()=>{
    setLoginModalOpen(!loginModalOpen);
  }
  const toggleLoggedInModal = (e) => {
    const locator = e.target.getBoundingClientRect();
    const center = (locator.left+locator.right)/2;
    const bottom = (locator.bottom);
    setLoginLocation({center, bottom});
    setLoggedinModalOpen(!loggedinModalOpen);
  }
  const showAlert = (show = false, type = '', msg = '') => {
    setLoginAlert({show, type, msg});
  }

  return (
    <AppContext.Provider
      value={{
        isLoading,
        setIsLoading,
        sideNavOpen,
        setSideNavOpen,
        toggleMenu,
        showSearch,
        setShowSearch,
        toggleSearch,
        blogPosts,
        handleOutsideClick,
        attachName,
        loginModalOpen,
        setLoginModalOpen,
        toggleLoginModal,
        closeLoginModal,
        loggedinModalOpen,
        setLoggedinModalOpen,
        toggleLoggedInModal,
        loginLocation,
        setLoginLocation,
        showSignup,
        setShowSignup,
        showAlert,
        loginAlert,
      }}
    >
      { children } 
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
