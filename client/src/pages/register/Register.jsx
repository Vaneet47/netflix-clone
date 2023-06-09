import React, { useRef, useState } from 'react';
import './register.scss';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const history = useHistory();

  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };

  const handleFinish = async (e) => {
    e.preventDefault();
    const password = passwordRef.current.value;
    const username = usernameRef.current.value;
    setPassword(passwordRef.current.value);
    setUsername(usernameRef.current.value);
    try {
      await axios.post('api/auth/register', { email, username, password });
      history.push('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='register'>
      <div className='top'>
        <div className='wrapper'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
            alt='Netflix logo'
            className='logo'
          />
          <button className='loginButton'>Sign In</button>
        </div>
      </div>
      <div className='container'>
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className='input'>
            <input type='email' placeholder='email address' ref={emailRef} />
            <button className='registerButton' onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className='input'>
            <input type='username' placeholder='username' ref={usernameRef} />
            <input type='password' placeholder='password' ref={passwordRef} />
            <button className='registerButton' onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
