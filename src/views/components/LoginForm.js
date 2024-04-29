import React, { useState } from 'react';
import axios from 'axios';
import login_hero from './../../assets/login-hero.png';
import { useAuth } from '../../context/AuthContext'; 

const LoginForm = () => {
  const { login } = useAuth(); 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('Toronto, CA');
  const [displayLogin, setDisplayLogin] = useState(true);

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      await login(username, password);
      setUsername('');
      setPassword('');
    } catch (error) {
      console.error('Error submitting login:', error);
      if (error.response && error.response.status === 401) {
        alert('Invalid username or password.');
      }
    }
  };

  const handleSubmitCreate = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/member/create-member', {
        username,
        password,
        email,
        location,
      });

      setUsername('');
      setPassword('');
      setEmail('');
      setLocation('Toronto, CA');
      setDisplayLogin(true);

      console.log('Account created successfully.');
    } catch (error) {
      if (error.response && error.response.status === 409) {
        alert('Username Already Exists');
      } else {
        console.error('Error submitting login:', error);
        alert('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className='bg-[rgba(0,0,0,0.2)] pt-[5%] h-[100vh] relative overflow-hidden'>
      <img src={login_hero} className='max-w-none absolute top-0 small:h-full ' alt="Login hero"></img>
      {displayLogin ? (
        <div className="w-full grid justify-evenly">
          <form onSubmit={handleSubmitLogin} id="login" className="m-auto relative bg-[darkred] text-[beige] p-[1rem] grid justify-evenly">
            <h2 className="text-h2 text-center">Login Account</h2>
            <label className="m-auto">
              <h5 className="text-h5">Username:</h5>
              <input required className="text-black bg-[beige] w-[15rem]" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label className="m-auto">
              <h5 className="text-h5">Password:</h5>
              <input required className="text-black bg-[beige] w-[15rem]" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button className="mt-[3rem] p-[0.25rem] bg-[beige] text-black  hover:scale-105 transition-all" type="submit">Login </button>
            <h6 className="m-auto text-[small]">Don't have an account? <a href="#" onClick={(e) => { setDisplayLogin(false); }} className="text-[beige] underline font-bold">Create one here.</a></h6>
          </form>
        </div>
      ) : (
        <div className="w-full grid justify-evenly">
          <form onSubmit={handleSubmitCreate} id="login" className="max-w-[362.06px] relative bg-[darkred] text-[beige] p-[1rem] grid justify-evenly">
            <h2 className="text-h2 text-center leading-[1em]">Create Member Account</h2>
            <label className="m-auto">
              <h5 className="text-h5">Username:</h5>
              <input required className="text-black bg-[beige] w-[15rem]" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label className="m-auto">
              <h5 className="text-h5">Password:</h5>
              <input required className="text-black bg-[beige] w-[15rem]" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <label className="m-auto">
              <h5 className="text-h5">Email:</h5>
              <input required className="text-black bg-[beige] w-[15rem]" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label className="m-auto">
              <h5 className="text-h5">Location:</h5>
              <select required className="text-[black] bg-[beige] w-[15rem]" value={location} onChange={(e) => { setLocation(e.target.value); }}>
                <option defaultValue>Toronto, CA</option>
                <option>Denver, CO</option>
              </select>
            </label>
            <button className="mt-[3rem] p-[0.25rem] bg-[beige] text-black  hover:scale-105 transition-all" type="submit">Create Account</button>
            <h6 className="m-auto text-[small]">Already have an account? <a href="#" onClick={(e) => { setDisplayLogin(true); }} className="text-[beige] underline font-bold">Login here.</a></h6>
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
