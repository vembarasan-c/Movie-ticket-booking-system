import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const Signup = () => {
  const [error, setError] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);
  const [contact, setContact] = useState(null);

  const navigate = useNavigate();

  const { register } = useAuth();

  const [accountData, setAccountData] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const data = await register(username, email, password, contact, "USER");
      console.log(data);
      setAccountData(data.data);
      localStorage.removeItem("token"); 
      setTimeout(() => {
        navigate("/login");
        setAccountData(null);
      }, 2000);
    } catch (error) {
      setError("Account creations is failed");
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  }

  return (
    <div className="h-[100vh] items-center flex font-sans justify-center px-5 lg:px-0">
      <div className="max-w-screen-xl bg-white border shadow sm:rounded-lg flex justify-center flex-1">
        <div className="flex-1 bg-blue-600 text-center hidden md:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(https://cdni.iconscout.com/illustration/premium/thumb/online-registration-7964198-6381808.png)`,
            }}
          ></div>
        </div>

        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          {accountData && (
            <div className=" flex px-2 justify-center items-center bg-green-500 rounded-lg py-2 text-gray-100">
              <p className="   font-semibold">Account created Successfully.</p>
            </div>
          )}

          <div className=" flex flex-col items-center">
            <div className="text-center">
              <h1 className="text-2xl xl:text-4xl font-semibold text-blue-600">
                Create New Account
              </h1>
            </div>

            {error && (
              <div className=" mt-2 flex justify-start items-start float-left">
                <p className=" font-semibold text-red-500">
                  Please enter correct details!
                </p>
              </div>
            )}

            <div className="w-full flex-1 mt-4">
              <form onSubmit={handleSubmit}>
                <div className="mx-auto max-w-xs flex flex-col gap-4">
                  <input
                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    name="username"
                    required
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <input
                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="tel"
                    required
                    maxLength="10"
                    name="phoneNumber"
                    placeholder="Enter your phone"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                  />
                  <input
                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="password"
                    required
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <button
                    type="submit"
                    className="mt-5 tracking-wide font-semibold bg-blue-600 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-500 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    <svg
                      className="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-3">Sign Up</span>
                  </button>
                </div>
              </form>

              <p className="mt-6 text-xs text-gray-600 text-center">
                Already have an account?
                <Link
                  className="hover:text-red-600 hover:underline hover:underline-offset-4 text-blue-600 text-base outline-blue-300 font-semibold"
                  to="/login"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
