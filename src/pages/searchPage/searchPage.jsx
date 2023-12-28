import { useEffect, useState } from "react"
import axios from "../../api/axios";
import { Link } from "react-router-dom";

export default function SearchPage(
){
    const [users,setUsers]=useState([]);
    const [stories,setStories]=useState([]);
    const [isLoading,setIsLoading]=useState(true);


    useEffect(()=>{
        const query = window.location.pathname.split('/')[2];
        const Search=async(query)=>{
            var SEARCH_URL='/stories/search/story?title='+ query;
            const response = await axios.get(SEARCH_URL)
            const data = await response.data;
            return data;
        }

        const getAllData = async () => {
            const data =await Search(query);
            console.log(data);
            const users = data.authors;
            const stories = data.stories;
            setUsers(users);
            setStories(stories);
            setIsLoading(false);
        }
        
        getAllData();
        

    },[]);
    return (
        <>
        {
            isLoading ? <h1>Loading...</h1> :
            <>
            <h1>Stories</h1>
            {
                stories.map(story=>{
                    return (
                        <Link to={`/stories/${story._id}`} key={story._id}>
                            <div>
                            <h1>{story.title}</h1>
                            <h3>{story.description}</h3>
                        </div>
                        </Link>
                    )
                })
            }

            <h1>Users</h1>
            {
                users.map(user=>{
                    return (
                        <Link to={`/userprofile/${user._id}`} key={user._id}>
                            <div>
                            <h1>{user.name}</h1>
                            <h3>{user.email}</h3>
                        </div>
                        </Link>
                        
                    )
                })
            }
            </>
        }
        </>
    )
}