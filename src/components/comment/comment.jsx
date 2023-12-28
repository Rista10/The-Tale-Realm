/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import{ useEffect, useState } from 'react'
import './comment.css'
import axios from '../../api/axios';
import book from '../../assets/images/book.png'
import { FaHeart } from 'react-icons/fa'

const CommentBox = ({ story }) => {
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([]);
  const STORY_COMMENT_URL = '/stories/' + story._id + '/comment'
  const COMMENT_FETCH_URL = '/comments/' + story._id
  
  function refreshPage() {
    window.location.reload(false);
  }
  
  const fetchComments = async () => {
    try {
      const response = await axios.get(COMMENT_FETCH_URL)
      if (response.status === 200) {
        console.log("Comments fetch");
        setCommentList(response.data)
      } else {
        console.log("Error fetching the comments")
      }
    } catch (error) {
      console.log(error.response.data)
    }
  }

  const postComment = async (e) => {
    e.preventDefault()
    try {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId')
      const response = await axios.post(STORY_COMMENT_URL, {
        'content': comment,
        'author': userId,
      }, {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json'
        }
      })
      if (response.status === 200) {
        console.log('comment posted succesfully')
        setComment('')
        refreshPage()
      } else {
        console.log('there was some error')
      }
    } catch (error) {
      console.log(error.response.data)
    }
  }

  useEffect(() => {
    if (story._id) {
      fetchComments();
    }
  }, [story._id])

  return (
    <div>
      <form className='comment' onSubmit={postComment}>
        <textarea name="comment-box" id="comment-box" placeholder='Write a comment' cols="30" rows="6" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
        <input type="button" value="Submit" onClick={postComment} />
        {commentList.map((comment) => {

          return <div key={comment._id} className='user-comment'>
            <div className="image">
              <img src={book} alt="" />
            </div>
            <div className="user-comment-content">
              <p className='user-name'>Rista Shrestha</p>
              <p className='user-comment'>{comment.content}</p>
            </div>
            <span><FaHeart className='fa-icon-love-comment' />1</span>
          </div>
        })}
      </form>
    </div>
  )
}

export default CommentBox