import React from 'react'
import './recentlyUpdated.css'
import { Link } from 'react-router-dom'
import { FaHeart, FaComment } from 'react-icons/fa'

const RecentlyUpadatedStory = ({ story }) => {
    return (
        <div className='recently-updated-container'>
            <Link to={`/stories/${story._id}`}>
                <div className='recently-updated'>
                    <div className="image">
                        <img src="https://media.licdn.com/dms/image/D4D12AQGpFki-giIw6w/article-cover_image-shrink_720_1280/0/1686192883489?e=2147483647&v=beta&t=i9M2DSpJQFkmo_ORm02_HOgvQk6f_B-5uOeryLXVbKQ" alt="" />
                    </div>
                    <div className="text">
                        <h5 className="title">{story.title}</h5>
                        <div className="reacts">
                            <div className="like">
                                <span><FaHeart className='fa-icon-love' />{story.likes.length}</span>
                            </div>
                            <div className="comment-icon">
                                <span><FaComment className='fa-icon-bookmark' />{story.comments.length}</span>
                            </div>
                        </div>
                        <p className="date">2023-07-09</p>
                        <p className="description">
                            {story.content.slice(0, 200)}....
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default RecentlyUpadatedStory