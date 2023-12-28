import  { useState } from 'react';
import NavBar from '../../components/navBar/navBar';
import Footer from '../../components/footer/footer';
import Background from '../../assets/images/homeBackground.png'
import './style.css'
import SignUpModal from '../../components/authentication/signUpModal';
import { FaBook, FaPen, FaUser } from "react-icons/fa";
import { useAuthContext } from '../../hooks/useAuthContext';
import { motion } from 'framer-motion'
import AllUser from '../../components/allUser/allUser';
import { Container } from 'react-bootstrap';
import { Slider } from '../../components/slider/slider';
import UserProfileCardSkeleton from '../../components/userProfileCard/userProfileCardSkeleton';

const HomePage = () => {
  const [showRegister, setShowRegister] = useState(false);
  const { auth } = useAuthContext();

  const { token } = auth;

  const handleRegister = () => {
    setShowRegister(true);
  };
  return (
    <div className='homepage'>
      <NavBar />
      {!token && (
        <div>
          <div className="home-content">
            <img src={Background} alt="HomeBackground" className='backgroundImage' />
            <div className="home-description">
              <h1>YOUR SOCIAL STORYTELLING PLATFORM</h1>
              <p>Welcome to the collective of fierce creators, whether you already are one or have a desire to become one. Get feedback on your writing and connect with thousands of people that love storytelling!</p>
              <motion.button onClick={handleRegister} 
              whileHover={{
                scale: 1.1,
                boxShadow:  '0 0 15px rgba(105, 65, 198, 0.8)',
              }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}>Join now</motion.button>
              {showRegister && <SignUpModal show={showRegister} onHide={() => setShowRegister(false)} />}
            </div>
          </div>
          <div className="read-write-connect">
            <div className="read">
              <h3 className='read-write-connect-h3'><FaBook className='icon-rwc' />Read</h3>
              <h6>The joy of reading</h6>
              <p>Find amazing stories written by super talented writers from around the world. Explore the many different genres ranging from fanfiction, love stories, poems, diaries, crime stories, fantasy and much more.</p>
            </div>
            <div className="write">
              <h3 className='read-write-connect-h3'><FaPen className='icon-rwc' />Write</h3>
              <h6>Yes, you can write</h6>
              <p>Write and share your own stories, in any genre. Publish one chapter at a time and get ongoing comments, likes, new followers and be shared on social media.</p>
            </div>
            <div className="connect">
              <h3 className='read-write-connect-h3'><FaUser className='icon-rwc' />Connect</h3>
              <h6>Reading is social</h6>
              <p>At TheTaleRealm you will find others who love to read, write and share stories with fresh content from all over the world. Meet people from all over the world who have the same interests and fandom as yourself.</p>
            </div>
          </div>
        </div>
      )}

      {token && (
        <div>
          <Container>
            <AllUser />
          </Container>
        </div>
      )}
    </div>
  );
}

export default HomePage;
