// /* eslint-disable react/prop-types */
// import React, { useEffect, useState } from 'react'
// import './profilePage.css'
// // import { Card, Button, Row, Col } from 'react-bootstrap'
// import NavBar from '../../components/navBar/navBar'
// import Footer from '../../components/footer/footer'
// import RecentlyUpadatedStory from '../../components/recentlyUpdated/recentlyUpdated'
// import { useParams } from 'react-router-dom'
// import axios from '../../api/axios'



// const Story = ({ title, thumbnailSrc, description, updatedDate, genre }) => (
//     <div className="border text-card-foreground w-full bg-white p-4 rounded-lg shadow transition-colors duration-300 hover:bg-gray-200" data-v0-t="card">
//       <div className="flex flex-col space-y-1.5 p-6">
//         <div className="flex gap-4">
//           <img
//             alt="Story thumbnail"
//             className="h-40 w-40 rounded"
//             height="160"
//             src={'https://www.timeshighereducation.com/sites/default/files/styles/the_breaking_news_image_style/public/bookofweek.jpg?itok=qxFLHiVh'}
//             width="160"
//             style={{ aspectRatio: '160 / 160', objectFit: 'cover' }}
//           />
//           <div>
//             <h3 className="tracking-tight text-lg font-semibold">{title}</h3>
//             <p className="text-sm text-gray-600">{description}</p>
//           </div>
//         </div>
//       </div>
//       <div className="p-6">
//         <p className="text-sm text-gray-600">Updated: {updatedDate}</p>
//         <p className="text-sm text-gray-600">Genre: {genre}</p>
//       </div>
//     </div>
//   );

// const ProfilePage = () => {
//     const { id } = useParams();
//     const [stories, setStories] = useState([]);
//     const [user, setUser] = useState([]);
//     const USER_STORY_URL = '/users/stories/' + id;

//     const fetchStory = async () => {
//         const token = await localStorage.getItem('token')
//         try {
//             const response = await axios.get(USER_STORY_URL, {
//                 headers: {
//                     Authorization: 'Bearer ' + token
//                 }
//             })
//             if (response.status == 200) {
//                 setStories(response.data)
//             } else {
//                 console.log("There was some error")
//             }
//         } catch (error) {
//             console.log(error.response.data)
//         }
//         console.log(stories)
//     }

//     const fetchUser = async () => {
//         try {
//             const token = localStorage.getItem('token')
//             const response = await axios.get('/users/profile/' + id, null, {
//                 headers: {
//                     Authorization: 'Bearer ' + token
//                 }
//             })
//             setUser(response.data)

//         } catch (error) {
//             console.log(error.response.data);
//         }
//     }

//     useEffect(() => {
//         fetchStory();
//         fetchUser();
//     }, [])

//     return (
//         <div>
//             <NavBar />
//             <div className="bg-gray-100">
//                 <main className="container mx-auto p-8">
//                 <div className="flex gap-8">
//                     <div className="w-1/4">
//                     <div className="sticky top-8">
//                     <div className="bg-white p-4 rounded-lg shadow">
//                         <div className="flex flex-col items-center pb-6 border-b">
//                             <img
//                             alt="Profile avatar"
//                             className="rounded-full h-32 w-32 mb-4"
//                             height="128"
//                             src="/placeholder.svg"
//                             width="128"
//                             style={{ aspectRatio: '128 / 128', objectFit: 'cover' }}
//                             />
//                             <h2 className="text-xl font-semibold">RJ-45</h2>
//                             <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-blue-500 text-white w-full mt-4">
//                             Follow
//                             </button>
//                             <div className="flex justify-between items-center bg-gray-200 rounded-lg p-4 mt-4 space-x-4">
//                             <p className="text-sm text-gray-600 font-bold text-center">
//                                 Followers:
//                                 <span className="block">
//                                     {user.followers ? user.followers.length : 0}
//                                 </span>
//                             </p>
//                             <p className="text-sm text-gray-600 font-bold text-center">
//                                 Following:
//                                 <span className="block">
//                                     {user.following ? user.following.length : 0}
//                                 </span>
//                             </p>
//                             <p className="text-sm text-gray-600 font-bold text-center">
//                                 Stories:
//                                 <span className="block">
//                                     {user.stories ? user.stories.length : 0}
//                                 </span>
//                             </p>
//                             </div>
//                         </div>
//                         <div className="pt-6">
//                             <p className="text-sm text-gray-600">
//                             Passionate storyteller with a deep love for myths and legends. I aim to weave narratives that transport my readers to fantastical realms and spark their imagination.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//                 </div>
//                     <div className="w-3/4">
//                     <section>
//                         <h2 className="text-2xl font-semibold mb-4">Recently Updated Stories</h2>
//                         <div className="space-y-4">
//                         <Story
//                             title="The Enchanted Forest"
//                             thumbnailSrc="/placeholder.svg"
//                             description="An adventure awaits in a small village nestled at the edge of a dense forest, where local legends speak of an ancient spirit that watches over the natural world."
//                             updatedDate="December 23, 2023"
//                             genre="Fantasy"
//                         />
//                         <Story
//                             title="The Lost City"
//                             thumbnailSrc="/placeholder.svg"
//                             description="A group of explorers ventures into an uncharted territory in search of a lost city, only to find themselves in the heart of a mystical civilization."
//                             updatedDate="December 22, 2023"
//                             genre="Adventure"
//                         />
//                         <Story
//                             title="The Lost City"
//                             thumbnailSrc="/placeholder.svg"
//                             description="A group of explorers ventures into an uncharted territory in search of a lost city, only to find themselves in the heart of a mystical civilization."
//                             updatedDate="December 22, 2023"
//                             genre="Adventure"
//                         />
//                         <Story
//                             title="The Lost City"
//                             thumbnailSrc="/placeholder.svg"
//                             description="A group of explorers ventures into an uncharted territory in search of a lost city, only to find themselves in the heart of a mystical civilization."
//                             updatedDate="December 22, 2023"
//                             genre="Adventure"
//                         />
//                         <Story
//                             title="The Lost City"
//                             thumbnailSrc="/placeholder.svg"
//                             description="A group of explorers ventures into an uncharted territory in search of a lost city, only to find themselves in the heart of a mystical civilization."
//                             updatedDate="December 22, 2023"
//                             genre="Adventure"
//                         />
                        
//                         </div>
//                     </section>
//                     </div>
//                 </div>
//                 </main>
//             </div>
//             {/* <main>
//                 <div className='container'>
//                     <section className='profile-left-content'>
//                         <div className='profile-container'>

//                             <Card className="profile-card">
//                                 <Card.Img className='profile-card-background-image' src="https://static.vecteezy.com/system/resources/thumbnails/006/965/779/small/empty-top-wooden-table-and-sakura-flower-with-fog-and-morning-light-background-photo.jpg" alt="Background Image" variant="top" />
//                                 <Card.Img className='profile-card-image' alt="User Image" src='https://static.vecteezy.com/system/resources/previews/007/296/443/original/user-icon-person-icon-client-symbol-profile-icon-vector.jpg' />
//                                 <Card.Body className="text-center " >
//                                     <Card.Text className="mb-0 profile-text-bold">
//                                         {user.username? user.username:null}
//                                     </Card.Text>
//                                     <Row className="text-center mb-1">
//                                         <Col>
//                                             <Card.Text className='profile-text-bold'>{user.stories ? user.stories.length : 0}</Card.Text>
//                                             <Card.Text className='profile-text-light'>Stories</Card.Text>
//                                         </Col>
//                                         <Col>
//                                             <Card.Text className='profile-text-bold' >{user.followers ? user.followers.length : 0}</Card.Text>
//                                             <Card.Text className='profile-text-light'>Followers</Card.Text>
//                                         </Col>
//                                         <Col>
//                                             <Card.Text className='profile-text-bold '>{user.following ? user.following.length : 0}</Card.Text>
//                                             <Card.Text className='profile-text-light'>Following</Card.Text>
//                                         </Col>
//                                     </Row>
//                                     <Row className='button-row'>
//                                         <Button className='profile-button'>Follow</Button>
//                                     </Row>
//                                 </Card.Body>
//                             </Card>

//                         </div>
//                         <div className='about-me-container'>
//                             <h3 className='about-text-bold'>About me</h3>
//                             <p className='about-text-light'>
//                                 Passionate wordsmith who thrives on crafting stories and finding inspiration in the pages of books. Words are my world, and through them, I explore, create, and connect with the stories that make life extraordinary.
//                             </p>
//                         </div>
//                     </section>
//                     <section className='profile-right-content'>
//                         <h3 className='recently-updated-title'>Recently Updated Stories</h3>

//                         {stories.length === 0 ? (
//                             <p className='no-post'>No stories posted.</p>
//                         ) : (
//                             stories.map((story, index) => (
//                                 <RecentlyUpadatedStory story={story} key={index} />
//                             ))
//                         )}
//                     </section>
//                 </div>
//             </main> */}
//             {/* <Footer /> */}
//         </div>


//     )
// }

// export default ProfilePage

/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import './profilePage.css';
import { Card, Button, Row, Col } from 'react-bootstrap';
import NavBar from '../../components/navBar/navBar';
import Footer from '../../components/footer/footer';
import RecentlyUpadatedStory from '../../components/recentlyUpdated/recentlyUpdated';
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
    <div className="p-6">
    <span className="bg-green-100 text-green-300 text-xs font-medium me-2 px-2.5 py-0.5 rounded-xl dark:bg-green-300 dark:text-green-900">New</span>
    </div>
  </div>
);

const ProfilePage = () => {
  const { id } = useParams();
  const [stories, setStories] = useState([]);
  const [user, setUser] = useState([]);
  const USER_STORY_URL = '/users/stories/' + id;

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
    console.log(stories);
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
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    fetchStory();
    fetchUser();
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
                    src="/placeholder.svg"
                    style={{ aspectRatio: '128 / 128', objectFit: 'cover' }}
                  />
                  <h2 className="text-xl font-semibold">RJ-45</h2>
                  <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-blue-500 text-white w-full mt-4">
                    Follow
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
