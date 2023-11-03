import React from 'react'
import './profilePage.css'
import { Card, Container, Row, Col } from 'react-bootstrap'
import NavBar from '../../components/navBar/navBar'
import Footer from '../../components/footer/footer'

const ProfilePage = () => {
    return (
        <div>
            <NavBar />
            <main>
                <div className='profile-container'>
                    <section className='profile-left-content'>
                        <h2>jdfskfjs</h2>
                    </section>
                    <section className='profile-right-content'>
<h3>jksfahfkdjf</h3>
                    </section>
                </div>
            </main>
            <Footer />
        </div>

    )
}

export default ProfilePage