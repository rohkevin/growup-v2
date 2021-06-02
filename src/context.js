import React, { useContext, useEffect, useState } from 'react'
import { db } from './firebase'


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
  const [searchTerm, setSearchTerm] = useState('');
  const [searchPosts, setSearchPosts] = useState(null);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  // Retrieve Data
  useEffect(() => {
    setIsLoading(true);

    db.collection("posts").onSnapshot(snap => {
      const posts = snap.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })
    );
      const reversedPosts = posts.reverse();
      const resizedReversedPosts = reversedPosts.map(post => {
        return {
          ...post,
          coverImage: `${post.coverImage}&w=${windowSize}`
        }
      })
      setBlogPosts(resizedReversedPosts);
    })

    setIsLoading(false);
  }, [])

  const checkSize = () => {
    setWindowSize(window.innerWidth);
  }
  // Listen for changes to window size
  useEffect(() => {
    window.addEventListener('resize', checkSize);
    return () => {
      window.removeEventListener('resize', checkSize);
    }
  })

  // Render images based on screen size
  useEffect(() => {
    if (blogPosts) {
      const updatedImageSizePosts = blogPosts.map(post => {
        let currentUrl = post.coverImage;
        let widthIndex = currentUrl.indexOf('&w=');
        let newUrlBase = currentUrl.slice(0,widthIndex);
        let newUrl;
        if (windowSize > 1500) {
          newUrl = `${newUrlBase}&w=1500`;
        } else {
          newUrl = `${newUrlBase}&w=${windowSize}`;
        }
        console.log(newUrl)
        return {
          ...post,
          coverImage: newUrl
        }
      })
      setBlogPosts(updatedImageSizePosts);
    }
  }, [windowSize])

  // Menu
  const toggleMenu = () => {
    setSideNavOpen(!sideNavOpen);
  }
  const closeSideMenu = () => {
    setSideNavOpen(false);
  }

  // Search

  const toggleSearch = () => { 
    setShowSearch(!showSearch);
  }

  // Login
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
    if(!e.target.classList.contains('show-search')){
      setShowSearch(false);
    }
  }
  // Replace whitespace, commas, periods, questionmarks, exclamationmarks
  const attachName = (str) => {
    return str.replace(/\s/g, '').replace(/,/g,'').replace(/\./g,'').replace(/\?/g,'').replace(/\!/g,'');
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
        isLoading, setIsLoading,
        sideNavOpen, setSideNavOpen,
        toggleMenu,
        showSearch, setShowSearch, toggleSearch, searchTerm, setSearchTerm, searchPosts,
        blogPosts,
        handleOutsideClick,
        attachName,
        loginModalOpen, setLoginModalOpen, toggleLoginModal, closeLoginModal,
        loggedinModalOpen, setLoggedinModalOpen, toggleLoggedInModal,
        loginLocation, setLoginLocation,
        showSignup, setShowSignup,
        showAlert, loginAlert,
        windowSize
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
