import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import './style.css'
import axios from '../../api/axios';
import { useNavigate } from 'react-router-dom';

function SignUpModal(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");
  const REGISTER_URL = "/users/register"
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };


  const handleCloseModal = () => {
    props.onHide();
  };
  const handleValidation = () => {
    let formIsValid = true;

    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      formIsValid = false;
      setemailError("Email Not Valid");
      return false;
    } else {
      setemailError("");
      formIsValid = true;
    }

    if (!password.match(/^[a-zA-Z]{8,22}$/)) {
      formIsValid = false;
      setpasswordError(
        "Only Letters and length must best min 8 Chracters and Max 22 Chracters"
      );
      return false;
    } else {
      setpasswordError("");
      formIsValid = true;
    }

    return formIsValid;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(REGISTER_URL,
        { username, email, password });
      console.log("signIn success");
      console.log(response);
      await handleCloseModal();
      navigate('/home');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter bold">Register</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit} className='auth-form'>
          <label htmlFor="userName" className="form-label">
            Username
          </label>

          <input type="text" id="userName" value={username} onChange={handleUsernameChange} required />
          <label htmlFor="email" className='form-label'>Email</label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={handleEmailChange}
          />
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} required />

          <input type="submit" value="Register" onSubmit={handleSubmit} />
        </form>
        <div className="sign-up">
          <p>
            Already have an account? <span><a href="/sign-up">Login</a></span>
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default SignUpModal;