import Container from 'react-bootstrap/Container';
import SignInModal from '../authentication/signInModal';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import SignUpModal from '../authentication/signUpModal';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./navBar.css"
import AuthContext from '../../context/authProvider';
import { useAuthContext } from '../../hooks/useAuthContext';

function NavBar() {
  const [showLogin, setShowLogin] = useState(false);
  const { setAuth } = useContext(AuthContext);
  const [showRegister, setShowRegister] = useState(false);
  const { auth } = useAuthContext();

  const {token}=auth;


  const handleLogin = () => {
    setShowLogin(true);
  };

  const handleRegister = () => {
    setShowRegister(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');

    setAuth({ type: 'LOGOUT' })
  }

  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark"className='navbar-container'>
      <Container fluid>
        <Navbar.Brand>
          <img src={Logo} alt="Logo of tale realm" max-width={305} height={100} />
        </Navbar.Brand>
        <Navbar.Toggle ria-controls={`offcanvasNavbar-expand-lg`} />
        <Navbar.Offcanvas className="bg-dark"
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
              <img src={Logo} alt="Logo of tale realm" max-width={305} height={100} />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav>
                <Link to="/" className="text-white nav-link">Home</Link>
                <Link to="/discover" className="text-white nav-link">Discover</Link>
                <Link to="/write" className="text-white nav-link">Write</Link>
                {token && (
                  <div>
                    <button className='button-style' onClick={logout}>Logout</button>
                  </div>
                )}
                {!token && (
                  <div>
                    <button className="button-style " onClick={handleLogin} >Login</button>
                    {showLogin && <SignInModal show={showLogin} onHide={() => setShowLogin(false)} />}
                    <button type="button" className="button-style-register" onClick={handleRegister}>Register</button>
                    {showRegister && <SignUpModal show={showRegister} onHide={() => setShowRegister(false)} />}
                  </div>)}
              </Nav>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>

      </Container>
    </Navbar>

  );
}

export default NavBar;


