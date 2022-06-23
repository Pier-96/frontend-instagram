import React, { useState } from 'react';
import './Login.css';
import { FiUserCheck } from 'react-icons/fi';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus('loading');

    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) throw new Error(response.statusText);

      // const {data} = await response.json()
      setStatus('success');
    } catch (err) {
      console.log(err);
      setStatus('error');
    }
  };

  return (
    <>
      <div className='login-box'>
        <h2>
          <FiUserCheck />
        </h2>
        <section>
          <form onSubmit={handleSubmit}>
            <div className='user-box'>
              <input
                id='email'
                type='text'
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Email</label>
            </div>
            <div className='user-box'>
              <input
                id='password'
                type='password'
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Password</label>
            </div>
            <input type='submit' value='Log In' />
          </form>
          <hr />
          <p className='toSignup'>
            <span>Aún no tienes cuenta?</span>
            <span className='toSignupButton'>Registrate</span>
          </p>
        </section>
      </div>
    </>
  );
};

export default Login;
