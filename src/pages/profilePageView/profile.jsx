import React, { useState, useEffect } from 'react';
import NavBar from '../../components/navBar/navBar';
import { useNavigate, useParams } from 'react-router-dom';
import FeaturedStories from '../../components/featuredStories/featuredStories';
import TrendingStories from '../../components/trendingStories/trendingStories';
import Slider from 'react-slick';
import axios from '../../api/axios';

function Profile() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [stories, setStories] = useState([]);

    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await axios.get(`/users/profile/${id}`);
                setUser(response.data);
            } catch (error) {
                console.error('Failed to fetch user:', error);
            }
        };

        const getStories = async () => {
            try {
                const response = await axios.get(`/users/stories/${id}`);
                setStories(response.data);
            } catch (error) {
                console.error('Failed to fetch stories:', error);
            }
        };

        getUser();
        getStories();
    }, [id]);

    // Styles are usually better placed in CSS files, but they're here for brevity
    const imageStyle = {
        width: '150px',
        zIndex: 1,
    };

    const buttonStyle = {
        zIndex: 1,
    };

    // Check if the user data is still loading
    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <NavBar />
            <div className="full-screen-profile">
                <section className="h-100 gradient-custom-2">
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="card">
                                <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
                                    <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                                        <img
                                            src={user.avatar || "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"}
                                            alt="Profile"
                                            className="img-fluid img-thumbnail mt-4 mb-2"
                                            style={imageStyle}
                                        />
                                        <button
                                            type="button"
                                            className="btn btn-outline-dark"
                                            data-mdb-ripple-color="dark"
                                            style={buttonStyle}
                                            onClick={() => navigate(`/userprofile/${id}/edit`)}
                                        >
                                            Edit profile
                                        </button>
                                    </div>
                                    <div className="ms-3" style={{ marginTop: '130px' }}>
                                        <h5>{user.username}</h5>
                                        <p>{user.location || 'Location not provided'}</p>
                                    </div>
                                </div>
                                <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                                    <div className="d-flex justify-content-end text-center py-1">
                                        <div>
                                            <p className="mb-1 h5">{user.stories?.length}</p>
                                            <p className="small text-muted mb-0">Posts</p>
                                        </div>
                                        <div className="px-3">
                                            <p className="mb-1 h5">{user.followers?.length || 0}</p>
                                            <p className="small text-muted mb-0">Followers</p>
                                        </div>
                                        <div>
                                            <p className="mb-1 h5">{user.following?.length || 0}</p>
                                            <p className="small text-muted mb-0">Following</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body p-4 text-black">
                                    <div className="mb-5">
                                        <p className="lead fw-normal mb-1">About Me</p>
                                        <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                                            {user.bio || 'No bio available'}
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <p className="lead fw-normal mb-0">Recent Reads</p>


                                        <p className="mb-0"><a href="#!" className="text-muted">Show all</a></p>
                                    </div>
                                    <div className="row g-2">
                                        <FeaturedStories stories={stories} />
                                    </div>
                                    <div className="row g-2">
                                        <Slider>
                                            <TrendingStories stories={stories} />
                                        </Slider>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Profile;
