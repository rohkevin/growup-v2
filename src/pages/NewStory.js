import React, {useState, useEffect, useRef} from 'react'
import app from '../firebase'
import { topics } from '../data'
import { useHistory } from 'react-router-dom'
import { useGlobalContext } from '../context'
import { useForm } from 'react-hook-form'
import CreatePostError from '../components/CreatePostError'

function NewStory() {
  const titleRef = useRef();
  const contentRef = useRef();
  const [selected, setSelected] = useState(false);
  const [id, setID] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [title, setTitle] = useState("");  
  const [topic, setTopic] = useState("");
  const [content, setContent] = useState("");

  const { register, handleSubmit } = useForm()

  const history = useHistory();

  const { blogPosts } = useGlobalContext();

  const getPageSize = () => {
    var scrollLeft = window.pageXOffset ||
    (document.documentElement || document.body.parentNode || document.body).scrollLeft;

    var scrollTop  = window.pageYOffset ||
    (document.documentElement || document.body.parentNode || document.body).scrollTop;
    return [scrollLeft, scrollTop]
  }

  useEffect(()=>{
    const pageResize = getPageSize();

    titleRef.current.style.height="inherit";
    const scrollHeight = titleRef.current.scrollHeight;
    titleRef.current.style.height = scrollHeight + "px";

    window.scrollTo(pageResize[0], pageResize[1]);
  },[title])

  useEffect(()=>{
    const pageResize = getPageSize();

    contentRef.current.style.height="inherit";
    const scrollHeight = contentRef.current.scrollHeight;
    contentRef.current.style.height = scrollHeight + "px";

    window.scrollTo(pageResize[0], pageResize[1]);
  },[content])
  

  const handleEnter = (e) => {
    if (e.key==="Enter") {
      e.preventDefault();
      contentRef.current.focus();
    }
  }
  const generateID = () => {
    let highestID = 0;
    blogPosts.forEach((post)=>{
      let currentID = post.id;
      let currentIDnum = parseInt(currentID.replace("postID", ""));
      if (currentIDnum > highestID){
        highestID = currentIDnum;
      }
    })
    const newID = `postID${highestID+1}`;
    return newID;
  } 

  const generateDate = () => {
    const now = new Date();
    const options = { month: "long", day: "numeric", year: "numeric" };
    const year = now.getFullYear();

    let month = now.getMonth() + 1;
    if (month < 10) {
      month = `0${month}`;
    }
    let day = now.getDate();
    if (day < 10) {
      day = `0${day}`;
    }
    return {
      formatted: `${year}-${month}-${day}`,
      pretty: now.toLocaleDateString("en-US", options)
    }
  }
  const checkValidURL = (url) => {
    let imageTypes = ["jpg", "jpeg", "png", "gif", "bmp", "tiff"];
    let parts = url.split('.');
    let extension = parts[parts.length-1];
    
  }
  const createPost = (e) => {
    e.preventDefault();
    const id = generateID();
    const date = generateDate();
    if (!coverImage) {
      setCoverImage("https://picsum.photos/800/600");
    }
    const newPost = {
      id,
      coverImage,
      title,
      topic,
      dateFormatted: date.formatted,
      datePretty: date.pretty,
      content
    }
    app
      .database()
      .ref()
      .child(`posts/${id}`)
      .set(newPost)
      .then(()=>history.push("/"));
  }

  return (
    <section className="subpage-container">
      <div className="max-width">
        <div className="newstory-container">
          <form id="write-form">
            <textarea 
              name="write-title"
              id="title-field"
              wrap="hard"
              maxLength="150"
              placeholder="Start your story..."
              className="write-textarea write-title"
              ref={titleRef} 
              value={title}
              onChange={(e)=>{
                setTitle(e.target.value);
              }}
              onKeyPress={handleEnter}
            />
            <select 
              name="write-topic" 
              id="topic-field"
              className={selected ? "topic-select dark-col" : "topic-select"} 
              value={topic}
              onChange={(e)=>{
                if (e.target.value){
                  setTopic(e.target.value);
                  setSelected(true);
                } else {
                  setSelected(false);
                }
              }}

            >
              <option value="">Select topic you're writing about</option>
              {
                topics.map((item)=> <option value={item.name} key={item.id}>{item.name}</option>)
              }
            </select>
            <textarea 
              name="text"
              id="content-field"
              wrap="hard"
              placeholder="Tell us more"
              className="write-textarea write-post"
              ref={contentRef}
              value={content}
              onChange={(e)=>{
                setContent(e.target.value);
              }}
            />

            {/*
            Currently using img URL to upload images, or randomly generating through Lorem Picsum web generator 
            <input ref={register} type="file" name="coverImage"></input> 
            */}
            <input
              type="text"
              name="imageURL"
              id="img-field"
              placeholder="Insert image URL here"
              className="write-textarea write-imgurl"
              value={coverImage}
              onChange={(e)=>{
                setCoverImage(e.target.value);
              }}
            />
            <button type="submit" className="write-btn" onClick={createPost}>Submit</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default NewStory
