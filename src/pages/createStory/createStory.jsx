import './createStory.css'
import React from 'react'
import { useState, useRef } from 'react';
import { Container } from 'react-bootstrap';
import ImageIcon from '../../assets/images/imageIcon.png'
import NavBar from '../../components/navBar/navBar'
import Footer from '../../components/footer/footer'
import axios from '../../api/axios';

const CreateStory = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState('');
    const [genre, setGenre] = useState('');
    const [status, setStatus] = useState('');
    const [rating, setRating] = useState('');
    const STORY_CREATE_URL = '/stories/create'
    const imageRef = useRef();
    const [image, setImage] = useState(null);
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

    const handleImageClick = () => {
        imageRef.current.click();
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setImage(file);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');

        try {
            const response = await axios.post(STORY_CREATE_URL, {
                title: title,
                content: description
            }, {
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            });
            console.log(response.status)

            if (response.status === 201) {
                await setShowSuccessPopup(true);
            }
        } catch (error) {
            console.error("Error posting story:", error);
        }
    }

    return (
        <div>
            <NavBar />
            <Container>
                <div className='createStory'>
                    <div className="createStory-image" onClick={handleImageClick}>
                        {image ?
                            <img src={URL.createObjectURL(image)} className='upload-image' />
                            : <>
                                <img src={ImageIcon} alt="Icon of image" />
                                <p className='image-description'>Add a cover image</p></>
                        }
                        <input type="file" ref={imageRef} onChange={handleImageChange} style={{ display: "none" }} />
                    </div>

                    <div className="createStory-content">
                        <h2>Add a Story</h2>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="storyTitle">Title*</label>
                            <input type="text" required className='storyTitle' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title of the story' />

                            <label htmlFor="storyDescription">Content*</label>
                            <textarea name="storyDescription" value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Content of your story'></textarea>

                            <label htmlFor="storyTags">Tags*</label>
                            <input type="text" required className='storyTags' value={tags} onChange={(e) => setTags(e.target.value)} placeholder='example: #summer #love #vampire' />

                            <label htmlFor="storyGenre">Genre*</label>
                            <input list="storyGenre" required value={genre} onChange={(e) => { setGenre(e.target.value) }} placeholder='Horror' />
                            <datalist id="storyGenre">
                                <option value="Horror" />
                                <option value="Comedy" />
                                <option value="Romantic" />
                                <option value="Action" />
                                <option value="Technology" />
                            </datalist>

                            <label htmlFor="storyStatus">Status*</label>
                            <input list="storyStatus" required value={status} onChange={(e) => { setStatus(e.target.value) }} placeholder='Not specified' />
                            <datalist id="storyStatus">
                                <option value="Completed" />
                                <option value="In progress" />
                            </datalist>

                            <label htmlFor="storyRatings">Ratings*</label>
                            <input list="storyRatings" required value={rating} onChange={(e) => { setRating(e.target.value) }} placeholder='Kids' />
                            <datalist id="storyRatings">
                                <option value="Kids" />
                                <option value="Adults" />
                                <option value="Teenager" />
                            </datalist>

                            <button className='postStory'>
                                Post Story
                            </button>
                        </form>
                        {showSuccessPopup && (
                            <div className="success-popup">
                                <p>Story posted successfully!</p>
                            </div>
                        )}
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default CreateStory