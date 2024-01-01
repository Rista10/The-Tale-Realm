import { useState, useRef } from 'react';
import NavBar from '../../components/navBar/navBar';
import Footer from '../../components/footer/footer';
import './style.module.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useAuthContext } from '../../hooks/useAuthContext';
import AllUser from '../../components/allUser/allUser';
import book from '../../assets/book.png';
import FirstPage from '../parallexPages/firstPage';
import Features from '../../assets/Frame.png'
import Bibek from '../../assets/Team/bibek.png'
import Shashi from '../../assets/Team/shashi.png'
import Rista from '../../assets/Team/rista.png'
import Sasa from '../../assets/Team/sasa.png'
import Butterfly from '../../assets/butterfly.png'
import FollowedUserStoryCard from '../../components/followedUserFeed/followedUserFeed';
import { Link } from 'react-router-dom';
import axios from '../../api/axios';
import { useEffect } from 'react';

const url = (name, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`


const FollowerStoryList = () => {
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const halfLength = Math.ceil(stories.length / 2);
  const firstHalf = stories.slice(0, halfLength);
  const secondHalf = stories.slice(halfLength);
  const [userName, setUserName] = useState('');

  const getUserDetails = async () => {
    const token = localStorage.getItem('token');
    const loggedUserId = localStorage.getItem('userId');
    try {
      const response = await axios.get(`/users/profile/${loggedUserId}`, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
      if (response.status === 200) {
        const data = response.data;
        localStorage.setItem('userName', data.username);
        setUserName(data.username);
      } else {
        console.log('There was some error');
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const fetchStory = async () => {
    const token = localStorage.getItem('token');
    const loggedUserId = localStorage.getItem('userId');
    
    try {
      const response = await axios.get(`/stories/following/feed?${loggedUserId}`, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
      if (response.status === 200) {
        setStories(response.data);
        setIsLoading(false);
      } else {
        console.log('There was some error');
      }
    } catch (error) {
      console.log(error.response.data);
    }
}

  useEffect(() => {
    getUserDetails();
    fetchStory();
  }, []);

  return (
    <div className='flex flex-col items-center'>
      <h3 className='text-2xl font-bold'>Your Feed @{userName}</h3>
      {isLoading ? (
        <h1 className='text-center mt-8'>Loading...</h1>
      ) : (
        <div className='flex flex-col space-y-4 items-center '>
          
          {firstHalf.map((story) => (
            <Link to={`/stories/${story._id}`} key={story}>
              <FollowedUserStoryCard
                story={story}
              />
            </Link>
          ))}
          <AllUser />
          {secondHalf.map((story) => (
            <Link to={`/stories/${story._id}`} key={story}>
              <FollowedUserStoryCard
                story={story}
              />
            </Link>
          ))}

        </div>
      )}
    </div>
  );
};


const HomePage = () => {

  const [showRegister, setShowRegister] = useState(false);
  const { auth } = useAuthContext();

  const { token } = auth;

  const handleRegister = () => {
    setShowRegister(true);
  };
  const parallax = useRef(null)
  return (
    <div className='homepage' >


      <NavBar />
      {!token && (
        <>
          <div style={{ width: '100%', height: '100%' }}>
            <Parallax ref={parallax} pages={3} style={{ backgroundColor: '#082f49' ,position:"absolute"}}>
              <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#082f49' }} />
              <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#082f49' }} />

              <ParallaxLayer
                offset={0}
                speed={0}
                factor={3}
                style={{
                  backgroundImage: url('stars', true),
                  backgroundSize: 'cover',
                }}
              />

              <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>

                <img src={book} style={{ width: '35%', marginLeft: '70%', zIndex: "30" }} />
              </ParallaxLayer>
              <ParallaxLayer offset={.5} speed={-0.4} style={{ pointerEvents: 'none' }}>
                <img src={Butterfly} style={{ width: '25%', marginBottom: "95%", marginLeft: '15%', zIndex: "30" }} />
              </ParallaxLayer>

              <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
              </ParallaxLayer>

              <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
              </ParallaxLayer>

              <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
              </ParallaxLayer>

              <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
              </ParallaxLayer>

              <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
              </ParallaxLayer>
              <ParallaxLayer offset={2.2} speed={0.4} style={{ marginBottom: '90%', opacity: 1 }}>
                <div className="text-9xl flex justify-center text-white">
                  MEET OUR TEAM

                </div>
              </ParallaxLayer>

              <ParallaxLayer
                offset={2.5}
                speed={-0.4}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  pointerEvents: 'none',
                }}>
                {/* <img src={url('earth')} style={{ width: '60%' }} /> */}
              </ParallaxLayer>

              <ParallaxLayer
                offset={2}
                speed={-0.3}
                style={{
                  backgroundSize: '80%',
                  backgroundPosition: 'center',

                }}
              />


              <ParallaxLayer
                offset={0}
                speed={0.1}
                onClick={() => parallax.current.scrollTo(1)}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <FirstPage />
              </ParallaxLayer>

              <ParallaxLayer
                offset={1}
                speed={0.1}
                onClick={() => parallax.current.scrollTo(2)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <img src={Features} style={{ width: "60vw" }} />

              </ParallaxLayer>
              <ParallaxLayer
                offset={3}
              >
                MEET OUT TEAM
              </ParallaxLayer>
              <ParallaxLayer

                offset={3}
                speed={-0.47}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  pointerEvents: 'none',
                }}
              >
                <img src={Bibek} style={{ display: 'block', width: '20%', marginBottom: '55%', marginLeft: "70%" }} />
              </ParallaxLayer>

              <ParallaxLayer
                offset={3}
                speed={-0.51}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  pointerEvents: 'none',
                }}
              >
                <img src={Shashi} style={{ display: 'block', width: '20%', marginBottom: '55%', marginLeft: "25%" }} />
              </ParallaxLayer>
              <ParallaxLayer
                offset={3}
                speed={-0.46}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  pointerEvents: 'none',
                }}
              >
                <img src={Rista} style={{ display: 'block', width: '20%', marginBottom: '55%', marginRight: "25%" }} />
              </ParallaxLayer>
              <ParallaxLayer
                offset={3}
                speed={-0.49}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  pointerEvents: 'none',
                }}
              >
                <img src={Sasa} style={{ display: 'block', width: '20%', marginBottom: '55%', marginRight: "70%" }} />
              </ParallaxLayer>
            </Parallax>
          </div>
        </>
      )}

      {token && (
      <>
      <div className=' bg-slate-300'>
              <FollowerStoryList/>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default HomePage;
