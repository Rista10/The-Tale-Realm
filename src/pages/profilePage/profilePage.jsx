import React, { useEffect, useState } from 'react'
import './profilePage.css'
import { Card, Button, Row, Col } from 'react-bootstrap'
import NavBar from '../../components/navBar/navBar'
import Footer from '../../components/footer/footer'
import RecentlyUpadatedStory from '../../components/recentlyUpdated/recentlyUpdated'
import { useParams } from 'react-router-dom'
import axios from '../../api/axios'

const ProfilePage = () => {
    const { id } = useParams();
    const [stories, setStories] = useState([]);
    const [user, setUser] = useState([]);
    const USER_STORY_URL = '/users/stories/' + id;

    const fetchStory = async () => {
        const token = await localStorage.getItem('token')
        console.log(token)
        try {
            const response = await axios.get(USER_STORY_URL, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
            if (response.status == 200) {
                setStories(response.data)
            } else {
                console.log("There was some error")
            }
        } catch (error) {
            console.log(error.response.data)
        }
    }

    const fetchUser = async () => {
        try {
            const token = localStorage.getItem('token')
            const response = await axios.get('/users/profile/' + id, null, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
            setUser(response.data)

        } catch (error) {
            console.log(error.response.data);
        }
    }

    useEffect(() => {
        fetchStory();
        fetchUser();
    }, [])

    return (
        <div>
            <NavBar />
            <main>
                <div className='container'>
                    <section className='profile-left-content'>
                        <div className='profile-container'>

                            <Card className="profile-card">
                                <Card.Img className='profile-card-background-image' src="https://static.vecteezy.com/system/resources/thumbnails/006/965/779/small/empty-top-wooden-table-and-sakura-flower-with-fog-and-morning-light-background-photo.jpg" alt="Background Image" variant="top" />
                                <Card.Img className='profile-card-image' alt="User Image" src='https://static.vecteezy.com/system/resources/previews/007/296/443/original/user-icon-person-icon-client-symbol-profile-icon-vector.jpg' />
                                <Card.Body className="text-center " >
                                    <Card.Text className="mb-0 profile-text-bold">
                                        {user.username? user.username:null}
                                    </Card.Text>
                                    <Row className="text-center mb-1">
                                        <Col>
                                            <Card.Text className='profile-text-bold'>{user.stories ? user.stories.length : 0}</Card.Text>
                                            <Card.Text className='profile-text-light'>Stories</Card.Text>
                                        </Col>
                                        <Col>
                                            <Card.Text className='profile-text-bold' >{user.followers ? user.followers.length : 0}</Card.Text>
                                            <Card.Text className='profile-text-light'>Followers</Card.Text>
                                        </Col>
                                        <Col>
                                            <Card.Text className='profile-text-bold '>{user.following ? user.following.length : 0}</Card.Text>
                                            <Card.Text className='profile-text-light'>Following</Card.Text>
                                        </Col>
                                    </Row>
                                    <Row className='button-row'>
                                        <Button className='profile-button'>Follow</Button>
                                    </Row>
                                </Card.Body>
                            </Card>

                        </div>
                        <div className='about-me-container'>
                            <h3 className='about-text-bold'>About me</h3>
                            <p className='about-text-light'>
                                Passionate wordsmith who thrives on crafting stories and finding inspiration in the pages of books. Words are my world, and through them, I explore, create, and connect with the stories that make life extraordinary.
                            </p>
                        </div>
                    </section>
                    <section className='profile-right-content'>
                        <h3 className='recently-updated-title'>Recently Updated Stories</h3>

                        {stories.length === 0 ? (
                            <p className='no-post'>No stories posted.</p>
                        ) : (
                            stories.map((story, index) => (
                                <RecentlyUpadatedStory story={story} key={index} />
                            ))
                        )}
                    </section>
                </div>
            </main>
            <Footer />
        </div>


    )
}

export default ProfilePage