import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";

export const DisplayMovie = () => {

  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const token = localStorage.getItem("token");
      const obj = JSON.parse(token);

      const response = await fetch("http://localhost:8080/api/movies/all", {
        headers :{
          'Authorization': `Bearer ${obj.token}`
        }
      } ); 
      
      const data = await response.json();
      setMoviesList(data);
    };
    fetchMovies();
  }, []);

  return (
    <div className="  mx-auto   min-h-screen">
      <Navbar />
      <div className="container  mx-auto mt-16 p-4">
        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 sm:gap-4 md:gap-10 gap-2">

          {moviesList.map((mediaList) => (
            <div
              key={mediaList.id}
              className="bg-white rounded-lg border-2 border-gray-300 shadow-md overflow-hidden"
            >
              <img
                className="w-full  h-40 object-cover"
                src={`data:image/jpeg;base64,${mediaList.data}`}
              />

              <div className="p-4  ">
                <h3 className="  text-lg text-black font-semibold mb-2">
                  {mediaList.title}
                </h3>

                <p className="text-sm text-gray-500  ">{mediaList.language} </p>
                <p className="text-gray-500" > {mediaList.duration} </p>

                <div className="flex  justify-center mt-2 items-center">
                  <button
                    type="submit"
                    className="text-white shadow-md shadow-blue-200 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    <Link to="/bookmovie">Book Now</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
