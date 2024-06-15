import React, { useState } from "react";
import { Link } from "react-router-dom";
import {useAuth} from "./AuthContext.jsx"

import {useNavigate} from "react-router"

const Login = () => {
  
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
      const { login } = useAuth() ;
     const navigate =  useNavigate();

  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    try{
      await login(username, password);
      navigate("/display-movies");
    }
    catch(e){
      setError("Please enter correct username and password");
      setTimeout(() => {
        setError(null);
      }, 2000);
    }

    
  }

  return (
    <section className=" h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://png.pngtree.com/png-clipart/20200401/original/pngtree-fingerprint-recognition-technology-concept-a-woman-trying-to-access-her-mobile-png-image_5334450.jpg"
          alt="Sample image"
        />
      </div>

      <div className=" px-3 py-3 rounded-lg  md:w-1/3 max-w-sm">
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <h1 className="mx-4 mb-0 text-purple-700 text-2xl text-center font-semibold ">
            Login
          </h1>
        </div>

        {error && (
          <div className="pl-3 text-sm mb-3 font-semibold text-red-500">
            <p>Incorrect username or password</p>
          </div>
        )}

        <form onSubmit={handleSubmit} method="post">
          <input
            className="focus:outline-none font-medium  text-gray-800 rounded-md text-base w-full px-4 py-2 border border-solid border-gray-300 "
            type="text"
            required
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="focus:outline-none font-medium text-md w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="password"
            name="password"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="mt-4 flex justify-between font-semibold text-sm">
            <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
              <input className="mr-1" type="checkbox" />
              <span>Remember Me</span>
            </label>
            <a
              className="text-violet-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
              href=""
            >
              Forgot Password?
            </a>
          </div>

          <div className="text-center   md:text-left">
            <button
              className="mt-4 bg-purple-600 hover:bg-violet-700 px-6 py-2 text-white  rounded-lg text-sm tracking-wider"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Don&apos;t have an account?
          <Link
            className="text-red-600 hover:underline hover:underline-offset-4"
            to="/register"
          >
            {" "}
            Create New Account
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
