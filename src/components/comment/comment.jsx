import React, { useState } from 'react'
import './comment.css'
import axios from '../../api/axios';

const CommentBox = ({story}) => {
const [comment,setComment]=useState("");
const STORY_COMMENT_URL='/stories/' + story._id +'/comment'

// POST http://localhost:5000/stories/654871ecd8a5d03f27bd20c0/comment
// Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTQ4NzFhN2Q4YTVkMDNmMjdiZDIwYjgiLCJpYXQiOjE2OTkyNDY1MTcsImV4cCI6MTY5OTI1MDExN30.fAbnpYk5m1sbyDN5x4ls8vbTREQ6iHLCryk-Vb-W9sg
// Content-Type: application/json

// {
//   "content": "Very nice story.",
//   "author": "653bd0d6f31b885a67a85078"
// }

const postComment=async(event)=>{
  event.preventDefault()
  try {
    const token=localStorage.getItem('token');
    const userId=localStorage.getItem('userId')
    const response=await axios.post(STORY_COMMENT_URL,{
      'content':comment,
      'author':userId,
    },{
      headers:{
        Authorization:'Bearer ' + token,
        'Content-Type':'application/json'
      }
    })
    if(response.status===200){
      console.log('comment posted succesfully')
      setComment('')
    }else{
      console.log('there was some error')
    }

    
  } catch (error) {
    console.log(error.response.data)
  }
}

  return (
    <div>
        <form className='comment' onSubmit={postComment}>
        <textarea name="comment-box" id="comment-box" placeholder='Write a comment' cols="30" rows="6" value={comment}  onChange={(e) => setComment(e.target.value)}></textarea>
        <input type="button" value="Submit" onClick={postComment}/>
      </form>
    </div>
  )
}

export default CommentBox