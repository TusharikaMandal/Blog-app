import React from 'react'
import {format} from "date-fns"
import { Link } from 'react-router-dom'

function Post({_id,title,summary,cover,content,createdAt,author}) {
  return (
      <div className="blog-name">
          <div className="images">
            <Link to={`/post/${_id}`}>
            <img src={"https://localhost:4000/"+cover}></img>
            </Link>
          </div>
          <div className="content">
            <Link to={`/post/${_id}`}><h2>{title}</h2></Link>
            <p className="info">
              <a href="#"className="author"> {author.username}</a>
              <spam className="time">{format(new Date(createdAt),'dd-MMM-yyyy, HH:mm')}</spam>
            </p>
            <p className="summary">{summary}</p>
          </div>
        </div>
  )
}

export default Post
