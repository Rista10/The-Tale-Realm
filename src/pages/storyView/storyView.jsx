import './storyView.css'
import NavBar from '../../components/navBar/navBar'
import Footer from '../../components/footer/footer'
import Book from '../../assets/images/book.png'
import React, { useEffect, useState } from 'react'
import MoreFromAuthor from '../../components/moreFromAuthor/moreFromAuthor'
import { Container } from 'react-bootstrap'
import CommentBox from '../../components/comment/comment'
import ShareReact from '../../components/shareAndReact/shareReact'
import { useParams } from 'react-router-dom'
import axios from '../../api/axios'
// ### View a specific story by ID
// GET http://localhost:5000/stories/654871ecd8a5d03f27bd20c0
// Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTQwOGUzODlkZDJhM2ViNDc3ZjI4ZmQiLCJpYXQiOjE2OTk0MzkzNjQsImV4cCI6MTY5OTUyNTc2NH0.t83C1_71Y03_3f6qY926nPf36dIR23E-YJr_4SZwqns

const StoryView = () => {
    const {id}=useParams();
    const [storyDetail,setStoryDetail]=useState([]);
    const STORY_DETAIL_URL='/stories/' + id

    const fetchStoryDetail=async()=>{
       try {
        const token=localStorage.getItem('token')
        const response=await axios.get(STORY_DETAIL_URL,{
            headers:{
                Authorization:'Bearer ' + token
            }
        })
        if(response.status==200){
            setStoryDetail(response.data)
        }else{
            console.log(error)
        }
       } catch (error) {
        console.log(error.response.data)
       }
    }

    useEffect(()=>{
        fetchStoryDetail()
    },[]);

    return (
        <>
            <NavBar />
            <Container>
                <div className="read-content">
                    <section className="main-content">
                        <div className="read-content-head">
                            <div className="read-content-head-image">
                                <img src={Book} />
                            </div>
                            <div className="read-content-head-text">
                                <h2>{storyDetail.title}</h2>
                                <p>Rista Shrestha</p>
                                <p>2023-09-10</p>
                            </div>
                        </div>
                        <div className="read-content-body">
                            <p> {storyDetail.content}</p>
                        </div>
                    </section>
                        <section className="side-content">
                            <MoreFromAuthor />
                            <ShareReact story={storyDetail}/>
                            <CommentBox story={storyDetail}/>
                        </section>
                </div>
            </Container>
            <Footer />

        </>
    )
}

export default StoryView