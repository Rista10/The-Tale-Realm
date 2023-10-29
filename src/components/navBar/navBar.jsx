import Container from 'react-bootstrap/Container';
import SignInModal from '../authentication/signInModal';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/images/logo.png';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import SignUpModal from '../authentication/signUpModal';

function NavBar() {
   const [showLogin, setShowLogin] = useState(false); 

  const handleLogin = () => {
    setShowLogin(true); 
  };

  const [showRegister, setShowRegister] = useState(false);

  const handleRegister= () => {
    setShowRegister(true); 
  };
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand>
          <img src={Logo} alt="Logo of tale realm" max-width={305} height={100} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Nav>
          <Link to="/" className="text-white nav-link">Home</Link>
            <Link to="/browse" className="text-white nav-link">Browse</Link>
            <Link to="/write" className="text-white nav-link">Write</Link>
          <button className="button-style "onClick={handleLogin} >Login</button>
        {showLogin && <SignInModal show={showLogin} onHide={() => setShowLogin(false)} />} 
        <button type="button" class="btn btn-outline-light" onClick={handleRegister}>Register</button>
        {showRegister && <SignUpModal show={showRegister} onHide={() => setShowRegister(false)} />} 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default NavBar;


