import { useEffect, useState } from 'react'
// import Slider from 'react-slick';
import Skeleton from './skeleton/skeleton';
import axios from '../../api/axios';
import ProfileCard from '../profileCard/profileCard';
import './allUser.css'
import { Slider } from '../slider/slider';
import { all } from 'axios';


const AllUser = () => {
    const token = localStorage.getItem('token');
    const loggedUserId = localStorage.getItem('userId');

    const [allUserData, setAllUserData] = useState([]);
    const [allFollowers, setAllFollowers] = useState([]);
    const[isLoading, setIsLoading] = useState(true);

    const ALL_USER_URL = 'users/all-users';
    const ALL_FOLLOWERS_URL = `users/following/${loggedUserId}`;


    useEffect(() => {
        const getAllUser = async () => {
            const response = await axios.get(ALL_USER_URL)
            return response.data;
        }

        const getAllFollowers = async () => {
            const config ={
                headers:{
                    Authorization: `Bearer ${token}`,
                }
            }
            const response = await axios.get(ALL_FOLLOWERS_URL,config)
            return response.data;
        }

        const removeFollowingFromAllUsers = async () => {
            const data = await getAllUser();
            const followers = await getAllFollowers();
            const newList = data.filter(user => 
                user._id !== loggedUserId && !followers.some(follower => follower._id === user._id)
            );
            setAllUserData(newList);
            setAllFollowers(followers);
            setIsLoading(false);
        }


        removeFollowingFromAllUsers();
    }, []);

    return (
        <div className='all-user'>
            <h3 className='all-user-heading'>Most Trending Author</h3>
            {
                isLoading ? <Skeleton/> : 
                <Slider list_of_users={allUserData} />
            }
        </div>
    )
}


export default AllUser