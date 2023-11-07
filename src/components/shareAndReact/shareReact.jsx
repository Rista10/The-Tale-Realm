import './shareReact.css'
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaHeart, FaBookmark } from 'react-icons/fa'

import React from 'react'

const ShareReact = () => {
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
                    <FaHeart className='fa-icon-love' />
                    <p>Like</p>
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