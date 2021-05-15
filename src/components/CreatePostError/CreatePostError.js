import React, { useEffect } from 'react'

function CreatePostError() {
  useEffect(()=>{
    const timer = setTimeout(()=> {
    },3000);
    return () => clearTimeout(timer);
  },[]);

  return (
    <p>error</p>
  )
}

export default CreatePostError;
