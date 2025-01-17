import { format } from 'date-fns';
import React, { useEffect, useState,useContext } from 'react'
import { Link, useParams } from 'react-router-dom';
import { UserContext } from './UserContext';

const PostPage = () => {
    const [postInfo,setPostInfo] =useState(null);
    const {userInfo}=useContext(UserContext)
    const{id} = useParams();
    useEffect(()=>{
        fetch(`http://localhost:4000/post/${id}`).then(response=>{
            response.json().then(postInfo =>{
                setPostInfo(postInfo);
            });
        });
    },[]);
    if(!postInfo) return '';

  return (
    <div className='post-page'>
      New Post
      <h1>{postInfo.title}</h1>
      <time>{format(new Date(postInfo.createdAt),'dd-MMM-yyyy, HH:mm')}</time>
      <div className='author'>by @{postInfo.author.username}</div>

      {userInfo.id===postInfo.author._id && (
        <div className='edit-row'>
          <Link className='edit' to={`/edit/${postInfo._id}`}> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
            </svg>
          Edit This post</Link>
        </div>
      )}

      <div className="image">
        <img src={`http://localhost:4000/${postInfo.cover}`} alt="" />
      </div>
      
      <div className='content' dangerouslySetInnerHTML={{__html:postInfo.content}}/>
    </div>
  )
}

export default PostPage
