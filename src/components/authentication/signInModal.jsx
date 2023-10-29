import Modal from 'react-bootstrap/Modal';
import {useState } from 'react';
import axios from '../../api/axios';
import './style.css'
const LOGIN_URL='/users/login';
function SignInModal(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberPassword, setRememberPassword] = useState(false);
    const [error, setError] = useState('');


  
    const handleUsernameChange = (e) => {
      setUsername(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleRememberPasswordChange = (e) => {
      setRememberPassword(e.target.checked);
    };
  
    const handleSubmit = async(e) => {
      e.preventDefault();
     
        // const loginInfo={userName,password}
        //   fetch('http://localhost:5000/users/login',
        //   {
        //     method:'POST',
        //     headers:{"Content-Type":"application/json"},
        //     body:JSON.stringify(loginInfo)
        //   }).then(()=>{
        //     console.log("Login successful");
        //   })

        try {
            const response=await axios.post(LOGIN_URL,
              JSON.stringify({username,password}),
              {
                headers:{'Content-Type':'application/json'},
                withCredentials:true
              })
              console.log("login success");
              console.log(response);
          
        } catch (error) {
          if(!error?.response)
          {
            setError("No server response")
          }
        }
      
    };
  
    return (
      <Modal {...props}  aria-labelledby="contained-modal-title-vcenter" centered>
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
          <button className="google-sign-in">Sign in with Google</button>
          <button className="facebook-sign-in">Sign in with Facebook</button>
        </Modal.Body>
      </Modal>
    );
  }

export default SignInModal;