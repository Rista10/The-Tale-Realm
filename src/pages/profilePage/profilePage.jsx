import React from 'react'
import './profilePage.css'
import { Card, Container, Row, Col } from 'react-bootstrap'
import NavBar from '../../components/navBar/navBar'
import Footer from '../../components/footer/footer'
import ProfileCard from '../../components/profileCard/profileCard'
import RecentlyUpadatedStory from '../../components/recentlyUpdated/recentlyUpdated'
import { useParams } from 'react-router-dom'

const ProfilePage = () => {
    const { userId } = useParams();
    const fetchUserData = async () => {
        const response = await axios.get('')
    }

    return (
        <div>
            <NavBar />
            <main>
                <div className='container'>
                    <section className='profile-left-content'>
                        {/* <ProfileCard /> */}
                        <div className='about-me-container'>
                            <h3 className='about-text-bold'>About me</h3>
                            <p className='about-text-light'>
                                Passionate wordsmith who thrives on crafting stories and finding inspiration in the pages of books. Words are my world, and through them, I explore, create, and connect with the stories that make life extraordinary.
                            </p>
                        </div>
                    </section>
                    <section className='profile-right-content'>
                        <h3 className='recently-updated-title'>Recently Updated Stories</h3>
                        <RecentlyUpadatedStory />
                        <RecentlyUpadatedStory />
                        <RecentlyUpadatedStory />
                        <RecentlyUpadatedStory />
                    </section>
                </div>
            </main>
            <Footer />
        </div>


    )
}

export default ProfilePage