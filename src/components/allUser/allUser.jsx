import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import axios from '../../api/axios';
import ProfileCard from '../profileCard/profileCard';
import './allUser.css'


const AllUser = () => {
    const loggedUserId = localStorage.getItem('userId');

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
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    rows: 1,
                },
            },
            {
                breakpoint: 956,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    rows: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 1,
                },
            },
        ],
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
                    if (user._id !== loggedUserId) {
                        return <div key={user._id}>
                            <ProfileCard key={user._id} user={user} />
                        </div>
                    }
                })}
            </Slider>
        </div>
    )
}


export default AllUser