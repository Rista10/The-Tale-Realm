/* eslint-disable react/prop-types */
import './profileCard.css'
import { useState ,Link} from 'react';
import baseURL from '../../api/baseURL';


function followTheUser(id,isFollowing,setIsFollowing,setIsLoading,user) {


    setIsLoading(true);
    const url = `${baseURL}${isFollowing ? `/users/unfollow/${id}` : `/users/follow/${id}`}`;

    const token = localStorage.getItem('token');

    fetch(url, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            credentials: 'include',
            useCors: true,
        method:"POST",}
        )
        .then(data=>{
            setIsFollowing(!isFollowing);
            setIsLoading(false);
            // document.getElementById(data._id)
            const userDiv =  document.getElementById(id);
            userDiv.remove()
        })
        .catch(error=>{
            console.error("Errors : ",error)
            setIsLoading(false)
        })
   
}


const ProfileCard = ({ user }) => {

    const [isFollowing, setIsFollowing] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div className='profile-container'>
            <div className="background">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/006/965/779/small/empty-top-wooden-table-and-sakura-flower-with-fog-and-morning-light-background-photo.jpg" alt="Background Image"/>
            </div>
            <div className="userImage">
                <img src='https://static.vecteezy.com/system/resources/previews/007/296/443/original/user-icon-person-icon-client-symbol-profile-icon-vector.jpg' alt="User Image"/>
            </div>
            <div className="userDetails">
                <div className="user-info">
                    <a href={`/profile/${user._id}`}>{user.username}</a>
                </div>
                <div className="follow">
                    <div className="details">
                    <div className="followers">
                        <div className='Bold'>
                            Followers
                        </div>
                        <span>{user.followers.length}</span>
                        
                    </div>
                    <div className="following">
                        <div className='Bold'>
                            Following
                            </div>
                        <span>{user.following.length}</span>
                    </div>
                    </div>
                    
                    <div className="stories Bold">
                        <span>Stories : {user.stories.length}</span>
                    </div>
                </div>
                </div>
                <div className="follow-button" onClick={()=>followTheUser(user._id,isFollowing,setIsFollowing,setIsLoading,user)}>
                    {isLoading?'Loading...':isFollowing?"Unfollow":"Follow"}
                </div>
        </div>

    );
};

export default ProfileCard;
