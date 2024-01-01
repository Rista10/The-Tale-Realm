import React, { useState, useEffect } from 'react';
import NavBar from '../../components/navBar/navBar';
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../../api/axios';
import './editprofile.css';
import { FaEdit } from 'react-icons/fa';

function EditProfile() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [bio, setBio] = useState('');
    const [profilePicture, setProfilePicture] = useState('https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp');
    const [selectedFile, setSelectedFile] = useState(null);

    const profilePicStyle = {
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        objectFit: 'cover',
    };

    const editButtonStyle = {
        position: 'absolute',
        top: '120px',
        right: '10px',
        borderRadius: '50%',
        padding: '10px',
        backgroundColor: '#fff',
        border: 'none',
        cursor: 'pointer',
    };

    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await axios.get(`/users/profile/${id}`);
                const userData = response.data;
                setUsername(userData.username);
                setEmail(userData.email);
                setLocation(userData.location);
                setBio(userData.bio);
                setProfilePicture(userData.profilePicture || profilePicture);
            } catch (error) {
                console.error('Failed to fetch user:', error);
            }
        };

        getUser();
    }, [id]);

    const handleProfilePictureChange = (event) => {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            setSelectedFile(file);
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setProfilePicture(reader.result);
            };
        }
    };

    const handleProfilePictureUpload = async () => {
        const token = localStorage.getItem('token');
        if (selectedFile) {
            const formData = new FormData();
            formData.append('profilePicture', selectedFile);

            try {
                await axios.put(`/users/profile/${id}/upload`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': 'Bearer ' + token
                    },
                });
                // If you want to refresh the page or navigate away after successful upload
                // navigate(`/profile/${id}`);
            } catch (error) {
                console.error('Failed to upload profile picture:', error);
            }
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await handleProfilePictureUpload(); // Upload the profile picture first

        try {
            const payload = {
                username,
                email,
                location,
                bio,
                // Include other fields as needed
            };
            await axios.put(`/users/profile/${id}`, payload);
            navigate(`/profile/${id}`);
        } catch (error) {
            console.error('Failed to update profile:', error);
        }
    };

    return (
        <div>
            <NavBar />
            <div className="edit-profile-container">
                <form onSubmit={handleSubmit}>
                    <div className="edit-profile-avatar-panel" style={{ position: 'relative' }}>
                        <img
                            src={profilePicture}
                            className="edit-profile-avatar"
                            alt="User avatar"
                            style={profilePicStyle}
                        />
                        <label htmlFor="profilePictureInput" style={editButtonStyle}>
                            <FaEdit color="black" />
                        </label>
                        <input
                            id="profilePictureInput"
                            type="file"
                            style={{ display: 'none' }}
                            onChange={handleProfilePictureChange}
                        />
                    </div>
                    {/* User Info Section */}
                    <div className="edit-profile-panel">
                        <div className="edit-profile-panel-heading">
                            <h3 className="edit-profile-panel-title">User info</h3>
                        </div>
                        <div className="edit-profile-panel-body">
                            {/* Username Field */}
                            <div className="form-group">
                                <label className="control-label">Username</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            {/* Location Field */}
                            <div className="form-group">
                                <label className="control-label">Location</label>
                                <select
                                    className="form-control"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                >
                                    <option defaultValue>Select country</option>
                                    {/* Add other options here */}
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Contact Info Section */}
                    <div className="edit-profile-panel">
                        <div className="edit-profile-panel-heading">
                            <h4 className="edit-profile-panel-title">Contact info</h4>
                        </div>
                        <div className="edit-profile-panel-body">
                            {/* Email Field */}
                            <div className="form-group">
                                <label className="control-label">E-mail Address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            {/* Bio Field */}
                            <div className="form-group">
                                <label className="control-label">About Me</label>
                                <textarea
                                    rows="3"
                                    className="form-control"
                                    value={bio}
                                    onChange={(e) => setBio(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="form-group">
                        <button type="submit" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                            Save Changes
                        </button>
                        <button type="button" className="btn btn-default" onClick={() => navigate(-1)}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditProfile;
