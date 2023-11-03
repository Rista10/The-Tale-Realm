import React from 'react';
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import './profileCard.css'

const ProfileCard = () => {
    return (
        <div>
            <Container className="py-5 profile-container" >
                <Card className="mx-auto profile-card">
                    <Card.Img className='profile-card-background-image' src="https://static.vecteezy.com/system/resources/thumbnails/006/965/779/small/empty-top-wooden-table-and-sakura-flower-with-fog-and-morning-light-background-photo.jpg" alt="Background Image" variant="top" />
                    <Card.Img className='profile-card-image' alt="User Image" src='https://static.vecteezy.com/system/resources/previews/007/296/443/original/user-icon-person-icon-client-symbol-profile-icon-vector.jpg' />
                    <Card.Body className="text-center " >
                        <Card.Text className="mb-0 profile-text-bold">
                            Rista Shrestha
                        </Card.Text>
                        <Row className="text-center mb-1">
                            <Col>
                                <Card.Text className='profile-text-bold'>35</Card.Text>
                                <Card.Text className='profile-text-light'>Stories</Card.Text>
                            </Col>
                            <Col>
                                <Card.Text className='profile-text-bold' >80</Card.Text>
                                <Card.Text className='profile-text-light'>Followers</Card.Text>
                            </Col>
                            <Col>
                                <Card.Text className='profile-text-bold '>20</Card.Text>
                                <Card.Text className='profile-text-light'>Following</Card.Text>
                            </Col>
                        </Row>
                        <Row className='button-row'>
                            <Button className='profile-button'>Follow</Button>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default ProfileCard;
