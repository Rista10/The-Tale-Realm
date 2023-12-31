import { useEffect, useState } from "react";
import axios from "../../api/axios";
import { Link } from "react-router-dom";
import SearchCard from "../../components/searchCard/search";
import NavBar from "../../components/navBar/navBar";
import UserCard from "../../components/searchCard/user";
import { SearchBar } from "../../components/searchBar/searchBar";

export default function SearchPage() {
    const [users, setUsers] = useState([]);
    const [stories, setStories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const query = window.location.pathname.split('/')[2];

        const Search = async (query) => {
            const SEARCH_URL = '/stories/search/story?title=' + query;
            const response = await axios.get(SEARCH_URL);
            const data = await response.data;
            return data;
        };

        const getAllData = async () => {
            const data = await Search(query);
            const users = data.authors;
            const stories = data.stories;
            setUsers(users);
            setStories(stories);
            setIsLoading(false);
        };

        getAllData();
    }, []);

    return (
        <>
            <NavBar />
            <div className="mx-auto max-w-screen-xl px-4">
                {isLoading ? (
                    <h1 className="text-center mt-8">Loading...</h1>
                ) : (
                    <>
                        <div className="flex justify-between align-middle">
                        <h2 className="text-2xl font-bold my-4">Search Results</h2>
                        <SearchBar/>
                        </div>
                        <div className="Slider">
                            <div className="Slider-container">
                            {stories.map((story) => (
                                <div key={story._id} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
                                    <Link to={`/stories/${story._id}`}>
                                        <SearchCard title={story.title} description={story.content.slice(0, 100) + "..."} />
                                    </Link>
                                </div>
                            ))}
                            </div>
                        </div>
                        

                        <h2 className="text-2xl font-bold my-4">Users</h2>
                        <div className="Slider">
                            <div className="Slider-container">
                            {users.map((user) => (
                                <div key={user._id} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
                                    <Link to={`/userprofile/${user._id}`}>
                                        <UserCard name={user.name} email={user.email.slice(0, 25)} />
                                    </Link>
                                </div>
                            ))}
                            </div>
                        </div>
                        
                    </>
                )}
            </div>
        </>
    );
}
