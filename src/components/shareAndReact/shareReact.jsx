import './shareReact.css'
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaHeart, FaBookmark } from 'react-icons/fa'

import React, { useState, useEffect } from 'react'
import axios from '../../api/axios';


const ShareReact = ({ story }) => {
    console.log(story);
    const countLike = story.likes || []
    const numberLike = countLike.length

    const LIKE_URL = '/stories/' + story._id + '/like'

    function refreshPage() {
        window.location.reload(false);
    }

    const likeStory = async () => {
        try {
            const token = await localStorage.getItem('token')
            console.log(token)
            const response = await axios.post(LIKE_URL, null, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
            if (response.status == 200) {
                console.log("Liked a story")
                refreshPage()
            } else {
                console.log("Error")
            }
        } catch (error) {
            console.log(error.response.data)
        }

    }


    return (
        <>
            <div className="share-react">
                <div className="share">
                    <div className="icon">
                        <FaFacebookSquare className='fa-icon-share' />
                        <FaInstagramSquare className='fa-icon-share' />
                        <FaTwitterSquare className='fa-icon-share' />
                    </div>
                    <p>Share Story</p>
                </div>

                <div className="like">
                    <span><FaHeart className='fa-icon-love' />{numberLike}</span>
                    <button onClick={likeStory}>Like</button>
                </div>
                <div className="add">
                    <FaBookmark className='fa-icon-bookmark' />
                    <p>Add</p>
                </div>
            </div>
        </>
    )
}

export default ShareReact