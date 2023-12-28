import "./popularStories.css"
import React, { useEffect } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { popularStories } from "../../dummyData"
import axios from "../../api/axios";

const PopularStories = () => {
    const settings = {
        className: "center",
        centerMode: false,
        infinite: true,
        centerPadding: "0",
        slidesToShow: 2,
        speed: 500,
        rows: 3,
        slidesPerRow: 1,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              rows: 3,
            },
          },
        ],
      }

      const POPULAR_STORIES_URL = 'stories/get/popular';
      const token = localStorage.getItem('token');

      const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }

      useEffect(() => {
        const popularStories = async () => {
            const response = await axios.get(POPULAR_STORIES_URL,config)
            return response.data;
        }
        popularStories();
    },[])


    return (
        <>
            <section className="popular">
                <h4>Popular Stories</h4>
                <div className="content">
                    <Slider {...settings} >
                    {popularStories.map((val,index) => {
                        return (
                            <div className="items" key={index}>
                                <div className="box">
                                    <div className="image">
                                        <div className="img">
                                            <img src={val.image} alt="" />
                                        </div>
                                        <div className="category category1">
                                            <span>{val.category}</span>
                                        </div>

                                        </div>
                                        <div className="text row">
                                            <h1 className="title">{val.title.slice(0, 50)}</h1>
                                            <p className="desc">{val.description.slice(0,60)}..</p>
                                        <div className="date">
                                            <label>{val.dateOfPublication}</label>
                                        </div>
                                        <div className="author">
                                            <label>{val.author}</label>
                                        </div>
                                        </div>
                                   
                                </div>
                            </div>
                        )
                    })} </Slider>
                </div>
            </section>
        </>
    )
}

export default PopularStories