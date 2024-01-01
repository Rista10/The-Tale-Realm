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
import StarField from '../../components/cursor/NewCursor';

const url = (name, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
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
            <Parallax ref={parallax} pages={3} style={{ backgroundColor: '#082f49' }}>
            <StarField/>
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
        <div>

      <main>
      <div className='container'>
            <section className='mainContent'>
              <h2>Hi Rista</h2>
              <FollowedUserStoryCard title={"Hello World"} description={"Hello world "} />
            </section>
            <section className='sideContent'>
              <AllUser />
            </section>
          </div>
      </main>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default HomePage;
