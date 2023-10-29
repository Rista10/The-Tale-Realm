import React from "react"
import Logo from '../../assets/images/logo.png'
import './footer.css'
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare } from "react-icons/fa";

const Footer = () => <footer className="page-footer bg-dark">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <div className="social-media">
                    <img src={Logo} alt="Logo of tale realm" />
                    <p>YOUR SOCIAL STORYTELLING PLATFORM</p>
                    <div className="icon">
                        <FaFacebookSquare className='fa-icon' />
                        <FaInstagramSquare className='fa-icon' />
                        <FaTwitterSquare className='fa-icon' />
                        <FaYoutubeSquare className='fa-icon' />
                    </div>
                </div>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0" />

            <div className="col-md-2 mb-md-0 mb-2">
                <div className="discover">
                    <h3>Discover</h3>
                    <a href="#">Popular Stories</a>
                    <a href="#">People</a>
                </div>
            </div>

            <div className="col-md-2 mb-md-0 mb-2">
                <div className="create">
                    <h3>Create</h3>
                    <a href="#">Create Story</a>
                    <a href="#">New Thought</a>
                </div>
            </div>

            <div className="col-md-2 mb-md-0 mb-2">
                <div className="for-author">
                    <h3>For Author</h3>
                    <a href="#">Writing Competition</a>
                    <a href="#">GuideLines</a>
                    <a href="#">Writing advice</a>
                    
                </div>
            </div>

        </div>
    </div>
</footer>

export default Footer