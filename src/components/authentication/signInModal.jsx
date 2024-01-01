import Modal from 'react-bootstrap/Modal';
import { useContext, useState } from 'react';
import axios from '../../api/axios';
import './style.css'
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';

const LOGIN_URL = '/users/login';

function SignInModal(props) {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberPassword, setRememberPassword] = useState(false);
  const [error, setError] = useState('');
  const { setAuth } = useAuthContext()
  

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberPasswordChange = (e) => {
    setRememberPassword(e.target.checked);
  };

  const handleCloseModal = () => {
    props.onHide(); 
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(LOGIN_URL,
        { username, password });

      const data=response.data;

      const token = response.data["token"];
      const userId = response.data["userId"];

      localStorage.setItem('token',token);
      localStorage.setItem('userId',userId);

      await setAuth({ type:'LOGIN',payload:{token:token,userId:userId}})

      handleCloseModal();

      navigate('/');

    } catch (error) {
      if (!error?.response) {
        setError("No server response")
      } else if (error.response?.status === 400) {
        setError('Missing Username or Password');
      } else if (error.response?.status === 401) {
        setError('Unauthorized');
      } else {
        setError('Login Failed');
      }

    }

  };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter ">Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <label htmlFor="userName" className="form-label">
            Username
          </label>
          <input type="text" id="userName" value={username} onChange={handleUsernameChange} required />
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} required />
          <div className="form-actions">
            <div>
              <input
                type="checkbox"
                className="form-check-input"
                id="remember-password"
                checked={rememberPassword}
                onChange={handleRememberPasswordChange}
              />
              <label htmlFor="remember-password" className="form-check-label">
                Remember password?
              </label>

            </div>
            <a href="/forgot-password">Forgot password</a>
          </div>
          {error && <div className="error-message">{error}</div>}

          <input type="submit" value="Login" />
        </form>
        <div className="sign-up">
          <p>
            Don't have an account? <span><a href="/sign-up">Sign Up</a></span>
          </p>
        </div>
        
      </Modal.Body>
    </Modal>
  );
}

export default SignInModal;