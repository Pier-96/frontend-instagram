import './Signup.css';
import { Link } from 'react-router-dom';

import { RiUserAddFill } from 'react-icons/ri';

const Signup = () => {
  return (
    <>
      <div className='login-box'>
        <h2>
          <RiUserAddFill />
        </h2>
        <section>
          <form>
            <div className='user-box'>
              <input id='userID' type='text' required />
              <label>Username</label>
            </div>
            <div className='user-box'>
              <input id='email' type='text' required />
              <label>Email</label>
            </div>
            <div className='user-box'>
              <input id='password' type='password' required />
              <label>Password</label>
            </div>
            <input type='submit' value='Sign Up' />
          </form>
          <hr />
          <p className='toSignup'>
            <span>Ya tienes cuenta?</span>
            <Link to='/'>
              <span className='toSignupButton'>Iniciar Sesión</span>
            </Link>
          </p>
        </section>
      </div>
    </>
  );
};

export default Signup;
