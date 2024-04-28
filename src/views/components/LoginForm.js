import React, { useState } from 'react';
import axios from 'axios';


const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [displayLogin, setDisplayLogin] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    console.log("starting submit");
      await axios.post('http://localhost:5000/create-member', {
        username,
        password,
        email,
        location,
      });

      setUsername('');
      setPassword('');
      setEmail('');
      setLocation('');

      console.log('Login submitted successfully');
    } catch (error) {
      console.error('Error submitting login:', error);
    }
  };

  return (
    <div className='bg-[rgba(0,0,0,0.2)]'>
       
        {displayLogin ? (
            <div className="w-full grid justify-evenly">
                <form onSubmit={handleSubmit} id="login" className="relative bg-[darkred] text-[beige] p-[1rem] grid justify-evenly">
                    <h2 className="text-h2 text-center">Login Account</h2>
                    <label className="m-auto">
                        <h5 className="text-h5">Username:</h5>
                        <input required className="text-black bg-[beige] w-[11.5rem]" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </label>
                    <label className="m-auto">
                        <h5 className="text-h5">Password:</h5>
                        <input required className="text-black bg-[beige] w-[11.5rem]"  type="password" value={password} onChange={(e) => setPassword(e.target.value)} /> {/* TODO: hash passwords before sending over network*/}
                    </label>
                    <button className="mt-[1rem] p-[0.25rem] bg-[beige] text-black" type="submit">Login </button>
                    <h6 className="m-auto">Don't have an account? <a href="#" onClick={ (e) => {setDisplayLogin(false);}} className="text-[beige] underline font-bold">Create one here.</a></h6>
                </form>
            </div>
        ) : (
            <div className="w-full grid justify-evenly">
                <form onSubmit={handleSubmit} id="login" className="relative bg-[darkred] text-[beige] p-[1rem] grid justify-evenly">
                    <h2 className="text-h2 text-center">Create Member Account</h2>
                    <label className="m-auto">
                        <h5 className="text-h5">Username:</h5>
                        <input required className="text-black bg-[beige] w-[11.5rem]" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </label>
                    <label className="m-auto">
                        <h5 className="text-h5">Password:</h5>
                        <input required className="text-black bg-[beige] w-[11.5rem]"  type="password" value={password} onChange={(e) => setPassword(e.target.value)} /> {/* TODO: hash passwords before sending over network*/}
                    </label>
                    <label className="m-auto">
                        <h5 className="text-h5">Email:</h5>
                        <input required className="text-black bg-[beige] w-[11.5rem]"  type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <label className="m-auto">
                        <h5 className="text-h5">Location:</h5>
                        <select required className="text-[black] bg-[beige] w-[11.5rem]" value={location} onChange={(e) => {setLocation(e.target.value); console.log(location);}}>
                            <option>Toronto, CA</option>
                            <option>Denver, CO</option>
                        </select>
                    </label>
                    <button className="mt-[1rem] p-[0.25rem] bg-[beige] text-black" type="submit">Create Account</button>
                    <h6 className="m-auto">Already have an account? <a href="#" onClick={ (e) => {setDisplayLogin(true);}} className="text-[beige] underline font-bold">Login here.</a></h6>
                </form>
            </div>
        )}
    </div>
  );
};

export default LoginForm;