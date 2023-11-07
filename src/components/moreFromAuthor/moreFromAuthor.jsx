import React from "react"
import "./moreFromAuthor.css"
import { popularStories } from '../../dummyData';
import SideCard from './card';

const  MoreFromAuthor= () => {
    
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
           

        </>
    )
}

export default MoreFromAuthor
