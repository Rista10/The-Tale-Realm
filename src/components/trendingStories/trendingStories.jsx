import './trendingStories.css'
import React from 'react'
import { featuredStories } from '../../dummyData'
import Slider from 'react-slick'


const TrendingStories = () => {
    const setting = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    }
    return (
        <>
            <section className="trending">
                <div className="content">
                    <h4>Trending Stories</h4>
                    <Slider {...setting}>
                        {featuredStories.map((val, index) => {
                            return <div className="items" key={index}>
                                <div className="box">
                                    <div className="image-category">
                                        <div className="image">
                                            <img src={val.image} alt="" />
                                        </div>
                                        <div className="category category1">
                                            <span>{val.category}</span>
                                        </div>
                                    </div>

                                    <div className="text">
                                        <h1 className="title">
                                            {val.title}
                                        </h1>
                                        <div className="date-author">
                                            <div className="date">
                                                <label>{val.dateOfPublication}</label>
                                            </div>
                                            <div className="author">
                                                <label>{val.author}</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })}
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default TrendingStories