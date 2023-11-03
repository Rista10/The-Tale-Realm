import './featuredStories.css'
import React from 'react'
import { featuredStories } from '../../dummyData'
import Slider from 'react-slick'

const FeaturedStories = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 1,
                },
            },
        ],
    }
    return (
        <>
            <section className="featured">
                <div className="content">
                    <h4>Featured Stories</h4>
                    <Slider {...settings}>
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

export default FeaturedStories