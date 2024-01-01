

/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import './profilePage.css';
import NavBar from '../../components/navBar/navBar';
import { useParams } from 'react-router-dom';
import axios from '../../api/axios';

const Story = ({ title, thumbnailSrc, content, updatedDate, genre }) => (
  <div className="border text-card-foreground bg-white p-4 rounded-lg shadow transition-colors duration-300 hover:bg-gray-200" data-v0-t="card">
    <div className="flex flex-col space-y-1.5 p-6">
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 gap-2">
        <img
          alt="Story thumbnail"
          className="h-40 w-40 sm:h-32 sm:w-32 rounded"
          src={'https://www.timeshighereducation.com/sites/default/files/styles/the_breaking_news_image_style/public/bookofweek.jpg?itok=qxFLHiVh'}
          style={{ aspectRatio: '160 / 160', objectFit: 'cover' }}
        />
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-600 h-20 overflow-hidden">{content}</p>
        </div>
      </div>
    </div>
    <div className="p-6 flex justify-between">
    <div>
    <span className="bg-green-100 text-green-300 text-xs font-medium me-2 px-2.5 py-0.5 rounded-xl dark:bg-green-400 dark:text-green-900">Thriller</span>
    <span className="bg-green-100 text-green-300 text-xs font-medium me-2 px-2.5 py-0.5 rounded-xl dark:bg-purple-400 dark:text-purple-900">Magic</span>
    <span className="bg-green-100 text-green-300 text-xs font-medium me-2 px-2.5 py-0.5 rounded-xl dark:bg-blue-400 dark:text-blue-900">Mystery</span>
    </div>
    <div className='flex '>
    <p className="text-black py-2 px-3 font-medium text-sm">10 Likes</p>
                <p className="text-black py-2 px-3 font-medium text-sm">5 Comments</p>
    </div>
    </div>
  </div>
);

const ProfilePage = () => {
  const { id } = useParams();
  const [stories, setStories] = useState([]);
  const [user, setUser] = useState([]);
  const USER_STORY_URL = '/users/stories/' + id;
  const [followed,setFollowed] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);

  const Follow = async () => {
    const token = localStorage.getItem('token');
    setButtonLoading(true);
    try {
      const response = await axios.post('/users/follow/' + id, null, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
      if (response.status === 200) {
        setFollowed(!followed);
        setButtonLoading(false);
      } else {
        console.log('There was some error');
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const UnFollow = async () => {
    const token = localStorage.getItem('token');
    setButtonLoading(true);
    try {
      const response = await axios.post('/users/unfollow/' + id, null, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
      if (response.status === 200) {
        setFollowed(!followed);
        setButtonLoading(false);
      } else {
        console.log('There was some error');
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };



  const fetchStory = async () => {
    const token = localStorage.getItem('token');
    
    try {
      const response = await axios.get(USER_STORY_URL, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
      if (response.status === 200) {
        setStories(response.data);
      } else {
        console.log('There was some error');
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const checkFollow = async () => {
    const token = localStorage.getItem('token');
    const user_id = localStorage.getItem('userId');

    try {
      const following = await axios.get('/users/following/'+user_id,{
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
    if(following.data.some((follow)=>follow._id===id)){
      setFollowed(true);
    }

    }
    catch (error) {
      console.log(error.response.data);
    }
  };

  const fetchUser = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('/users/profile/' + id, null, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
      setUser(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    fetchStory();
    fetchUser();
    checkFollow();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="bg-gray-100">
        <main className="container mx-auto p-8">
          <div className="flex flex-col sm:flex-row gap-8">
            <div className="w-full sm:w-1/4 md:sticky md:top-8 lg:sticky lg:top-8">
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex flex-col items-center pb-6 border-b">
                  <img
                    alt="Profile avatar"
                    className="rounded-full h-32 w-32 mb-4"
                    src="https://images.unsplash.com/photo-1514161955277-4ea47eef2ff9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxNDgzOTgxfHxlbnwwfHx8fHw%3D"
                    style={{ aspectRatio: '128 / 128', objectFit: 'cover' }}
                  />
                  <h2 className="text-xl font-semibold">
                    {user.username ? user.username : null}
                  </h2>
                  <button onClick={()=>
                  {followed?UnFollow():Follow()}
                  } className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-blue-500 text-white w-full mt-4">
                   {
                    buttonLoading?"Loading" :followed?"Unfollow":"Follow"
                   }
                  </button>
                  <div className="flex justify-between items-center bg-gray-200 rounded-lg p-4 mt-4 space-x-4">
                    <p className="text-sm text-gray-600 font-bold text-center">
                      Followers:
                      <span className="block">{user.followers ? user.followers.length : 0}</span>
                    </p>
                    <p className="text-sm text-gray-600 font-bold text-center">
                      Following:
                      <span className="block">{user.following ? user.following.length : 0}</span>
                    </p>
                    <p className="text-sm text-gray-600 font-bold text-center">
                      Stories:
                      <span className="block">{user.stories ? user.stories.length : 0}</span>
                    </p>
                  </div>
                </div>
                <div className="pt-6">
                  <p className="text-sm text-gray-600">
                    {user.bio ? user.bio : "Bio not available"}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-3/4">
              <section>
                <h2 className="text-2xl font-semibold mb-4">Recently Updated Stories</h2>
                <div className="space-y-4">
                  {stories.map((story, index) => (
                    <Story key={index} {...story} />
                  ))}
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProfilePage;
