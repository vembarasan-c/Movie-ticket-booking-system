import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const AddNewMovie = () => {
  const [darkMode, setDarkMode] = useState(false);

  const [message, setMessage] = useState(null);
  const [error, setError] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [language, setLanguage] = useState("");
  const [duration, setDuration] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [genre, setGenre] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("language", language);
    formData.append("duration", duration);
    formData.append("releaseDate", releaseDate);
    formData.append("genre", genre);
    formData.append("file", file);

    console.log(file);

    try {

      const token = localStorage.getItem("token");
      const obj = JSON.parse(token);
      const response  = await axios.post("http://localhost:8080/api/movies/save", formData ,{
        headers :{
          'Authorization': `Bearer ${obj.token}`,
          "Content-Type": "multipart/form-data",
        }
      }); 

      setMessage("Movie added successfully!");

      setTimeout(() => {
        setMessage(null);
      }, 4000);

    } catch (error) {
      setError("Please enter correct details about the movie");

      setTimeout(() => {
        setError(null);
      }, 4000);
    }
  };

  return (
    <div
      className=" flex flex-col justify-center items-center w-full h-[100vh]   px-5 
    bg-gradient-to-r from-teal-400 via-teal-500 to-teal-500  shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80
    "
    >
      <div className="  flex flex-col items-end justify-start  overflow-hidden mb-1 xl:max-w-3xl w-full">
        <div className="flex">
          <h3 className="text-white">Dark Mode : &nbsp;</h3>
          <label className="inline-flex relative items-center mr-5 cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={darkMode}
              readOnly
            />
            <div
              onClick={() => {
                setDarkMode(!darkMode);
              }}
              className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"
            ></div>
          </label>
        </div>
      </div>
      <div
        className={`xl:max-w-3xl ${
          darkMode ? "bg-gray-800" : "bg-white"
        }  w-full p-5 sm:p-10 rounded-md`}
      >
        {message && (
          <div className=" mx-auto mb-3 text-gray-900 shadow-md  shadow-green-700 font-semibold flex items-center justify-center max-w-sm md:max-w-lg bg-green-500 py-3 rounded-lg">
            <p>Movie added successfully</p>
          </div>
        )}

        <h1
          className={`text-center  text-xl sm:text-3xl font-semibold ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          {" "}
          Add New Movie{" "}
        </h1>

        <div className="w-full mt-8">
          {error && (
            <div className=" font-semibold flex items-center justify-center  text-red-500 ">
              <p>{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} method="post">
            <div className="mx-auto max-w-xs sm:max-w-md md:max-w-lg flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  required
                  onChange={(e) => setTitle(e.target.value)}
                  className={`w-full focus:outline-none px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm   focus:border-2   ${
                    darkMode
                      ? "bg-[#302E30] text-white focus:border-white"
                      : "bg-gray-100 text-black focus:border-gray-400"
                  }`}
                  type="text"
                  placeholder="Title"
                />
                <input
                  required
                  onChange={(e) => setLanguage(e.target.value)}
                  className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${
                    darkMode
                      ? "bg-[#302E30] text-white focus:border-white"
                      : "bg-gray-100 text-black focus:border-gray-400"
                  }`}
                  type="text"
                  placeholder="Language"
                />
              </div>
              <input
                required
                onChange={(e) => setDescription(e.target.value)}
                className={`w-full  px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${
                  darkMode
                    ? "bg-[#302E30] text-white focus:border-white"
                    : "bg-gray-100 text-black focus:border-gray-400"
                }`}
                type="text"
                placeholder="Description"
              />

              <input
                required
                onChange={(e) => setDuration(e.target.value)}
                className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${
                  darkMode
                    ? "bg-[#302E30] text-white focus:border-white"
                    : "bg-gray-100 text-black focus:border-gray-400"
                }`}
                type="text"
                placeholder="Duration"
              />

              <input
                required
                onChange={(e) => setGenre(e.target.value)}
                className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${
                  darkMode
                    ? "bg-[#302E30] text-white focus:border-white"
                    : "bg-gray-100 text-black focus:border-gray-400"
                }`}
                type="text"
                placeholder="Genre"
              />

              <div>
                <label className="ml-2 text-sm pb-1 font-medium  text-gray-500">
                  Release date
                </label>
                <input
                  required
                  onChange={(e) => setReleaseDate(e.target.value)}
                  className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${
                    darkMode
                      ? "bg-[#302E30] text-white focus:border-gray-100"
                      : "bg-gray-100 text-black focus:border-gray-400"
                  }`}
                  type="date"
                  placeholder=""
                />
              </div>

              <div>
                <p className="ml-1 pb-1 text-sm font-medium  text-gray-500">
                  Select movie image
                </p>
                <input
                  required
                  className="w-full   font-medium border-2 border-transparent placeholder-gray-500 text-sm "
                  onChange={(e) => setFile(e.target.files[0])}
                  type="file"
                  name="file"
                  id=""
                  placeholder="Choose movie image"
                />
              </div>

              <button
                type="submit"
                className=" text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80  text-sm px-5  text-center me-2 mb-2
            mt-5 tracking-wide  font-semibold bg-[#E9522C]  w-full py-2 md:py-4 rounded-lg hover:bg-[#E9522C]/90 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline "
              >
                <span className="text-base">Submit</span>
              </button>
            </div>
          </form>

          <div className="flex justify-end mt-2 ">
            <Link
              to="/display-movies"
              className="text-blue-700 hover:text-violet-800 underline hover:underline-offset-4"
            >
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddNewMovie;
