import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
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


const UserProfileCardSkeleton = ({ user }) => {
  const history = useNavigate();
  const [isFollowing, setIsFollowing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-lg relative bg-cover bg-center w-80 h-96  flex-col" data-v0-t="card" style={{ backgroundImage: 'url("https://burst.shopifycdn.com/photos/mountain-magic-hour.jpg?width=1000&format=pjpg&exif=0&iptc=0?height=400&width=400")' }}>
      <div className="flex flex-col justify-end h-full p-4 space-y-4 bg-gradient-to-t from-black via-transparent">
        <div className="flex items-center gap-4">
          <span className="relative flex shrink-0 overflow-hidden rounded-full h-14 w-14">
            <img className="aspect-square h-full w-full object-fit-cover" alt="User Avatar" src="https://cdn5.vectorstock.com/i/1000x1000/43/94/default-avatar-photo-placeholder-icon-grey-vector-38594394.jpg" />
          </span>
          <div className="grid gap-0.5 text-white">
            <div className="font-medium text-lg">{user.username}</div>
            <div className="flex items-center gap-2 text-sm">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 gap-2 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span>{user.followers.length}</span>
              </div>
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                </svg>
                <span>{user.stories.length}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2 ">
          <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center  mb-2"  onClick={() => history(`/profile/${user._id}`)}>
            <span className="w-full h-full flex items-center justify-center">Profile</span>
          </button>
          <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center  mb-2" onClick={()=>followTheUser(user._id,isFollowing,setIsFollowing,setIsLoading,user)}>
            <a className="w-full h-full flex items-center justify-center" href="#">
            {isLoading?'Loading':isFollowing?"Unfollow":"Follow"}
            </a>
          </button>

        </div>
      </div>
    </div>
  );
};

export default UserProfileCardSkeleton;
