
import ProfileCard from '../profileCard/profileCard';
import UserProfileCardSkeleton from '../userProfileCard/userProfileCardSkeleton';
import './style.css'

export function Slider({list_of_users}){
    return(
        <div className="Slider overflow-hidden">
            <div className="Slider-container">
                {list_of_users.map((item)=>{
                    return(
                        <div key={item._id} id={item._id} >
                        <UserProfileCardSkeleton  user={item} />
                    </div>
                    );
                })}
            </div>
        </div>
    )
}