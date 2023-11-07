import React, { useState } from 'react'
import './comment.css'

const CommentBox = () => {
const [comment,setComment]=useState("");

  return (
    <div>
        <form className='comment'>
        <textarea name="comment-box" id="comment-box" placeholder='Write a comment' cols="30" rows="10" value={comment} onChange={(e)=>setComment(e.value.target)}></textarea>
        <input type="button" value="Submit" />
      </form>
    </div>
  )
}

export default CommentBox