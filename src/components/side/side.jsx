import React from "react"
import "./side.css"
import { useState } from 'react'
import { popularStories } from '../../dummyData';
import SideCard from './card';

const Side = () => {
    const [comment, setComment] = useState();
    const catgeory = ["Mystery", "Love", "Thriller", "Drama", "Horror", "Scientific", "Technology"]
    return (
        <>
            <div className='sidebar'>
                <section className="sidebar-content">

                    <div className="container">
                        <h3 className='box-title'>Recommended stories</h3>
                        {
                            popularStories.map((story) => {
                                return (
                                    <SideCard key={story.id} story={story} />
                                )
                            })
                        }
                    </div>
                </section>
            </div>
            <section className='catgorys'>
                <h4>Categories</h4>
                {catgeory.map((val) => {
                    return (
                        <div className='category category1'>
                            <span>{val}</span>
                        </div>
                    )
                })}
            </section>

        </>
    )
}

export default Side
