import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import axios from '../../api/axios';
import ProfileCard from '../profileCard/profileCard';
import './allUser.css'
import {Link} from 'react-router-dom'

const AllUser = () => {

    const [allUserData, setAllUserData] = useState([]);

    const ALL_USER_URL = 'users/all-users';

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
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
        ]
    }

    const getAllUser = async () => {
        const response = await axios.get(ALL_USER_URL)
        return response.data;
    }

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllUser();
            setAllUserData(data);
        };

        fetchData();
    }, []);

    console.log(allUserData)

    return (
        <div className='all-user'>
            <h3 className='all-user-heading'>Most Trending Author</h3>
            <Slider {...settings}>
                {allUserData.map((user) => {
                    return <div key={user._id}>
                        <Link to={`/profile/${user._id}`}>
                            <ProfileCard key={user._id} user={user} />
                        </Link>
                    </div>
                })}
            </Slider>
        </div>
    )
}

export default AllUser