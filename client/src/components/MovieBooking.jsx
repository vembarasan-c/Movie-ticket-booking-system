import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const MovieBooking = () => {
  const [booking, setBooking] = useState(null);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const [ticket, setTicket] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const bookingData = Object.fromEntries(formData.entries());
    setBooking(bookingData);

    try {
      const token = localStorage.getItem("token");
      const obj = JSON.parse(token);
      const getTicketDetails = await axios.post(
        "http://localhost:8080/api/booking/bookTicket",
        booking,
        {
          headers: {
            Authorization: `Bearer ${obj.token}`,
          },
        }
      );

      setTicket(getTicketDetails.data);
      setMessage("Ticket booked successfully!");

      setTimeout(() => {
        setTicket(null);
        setMessage(null);
      }, 3000);
    } catch (error) {
      setError("Please enter correct details..");
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center w-full   bg-gray-200 px-5">
      {/* display success message  */}

      {ticket && (
        <div className="  bg-contain bg-no-repeat bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzNChO2giMEwxFO1vPx41cYRQ8SNS8LEWLMw&s')]       text-black bg-opacity-55 mt-4    items-center  border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700    overflow-hidden mb-1 xl:max-w-2xl w-full">
          <div className="flex flex-col mb-4 justify-between font-medium py-1 mt-2 leading-normal">
            <h1 className="  mt-6 text-gray-950 py-1 text-2xl  font-bold flex pr-4 justify-center  ">
              {" "}
              MOVIE TICKET{" "}
            </h1>

            <div className=" text-slate-800 ml-7 ">
              <div className="flex justify-evenly p-3 ">
                <h5 className="mb-2  text-xl font-bold    dark:text-white">
                  {ticket.title}
                </h5>
                <div className="text-slate-800 skew-x-3 font-medium space-y-1">
                  <p>Price: {ticket.numberOfTickets * 110}</p>
                  <p>Date: {ticket.dateOfBooking.slice(0, 10)}</p>
                </div>
              </div>

              <div className="flex flex-col space-y-2 sm:flex-row justify-center skew-x-3 sm:space-x-4 items-center ">

              <div className="flex flex-col  ">
                <p>Theatre: {ticket.theatreName}</p>
                <p>Ticket: {ticket.numberOfTickets}</p>
              </div>
              <div className="flex flex-col   ">
                <p>Time: {ticket.time}</p>
                <p>Row: {ticket.seatRowNumber}</p>
              </div>
              </div>

            </div>


          </div>
        </div>
      )}

      {message && (
        <div
          className=" text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-semibold rounded-lg text-sm px-14 py-4 text-center me-2 mb-2
         "
        >
          <p>Ticket booked Successfully</p>
        </div>
      )}

      <div className="xl:max-w-3xl bg-white mt-12 w-full p-5 sm:p-10 rounded-md">
        <h1 className="text-center text-xl sm:text-3xl font-semibold ">
          Book Your Tickets Now
        </h1>

        <p className="flex justify-end text-gray-600 font-medium mx-auto ">
          Price: 110{" "}
        </p>
        <div className="w-full mt-8">
          {error && (
            <div className=" flex text-lg font-semibold justify-center text-red-500">
              <p>{error}</p>
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mx-auto max-w-xs sm:max-w-md md:max-w-lg flex flex-col gap-4">
              <input
                className="w-full focus:shadow-sm focus:shadow-cyan-100 focus:outline-none px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm   focus:border-2  bg-gray-100 text-black focus:border-gray-400"
                type="text"
                required
                name="name"
                placeholder="Name"
              />
              <input
                className="w-full focus:outline-none px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm   focus:border-2  bg-gray-100 text-black focus:border-gray-400"
                type="text"
                required
                name="title"
                placeholder="Movie Title"
              />

              <select
                name="theatreName"
                required
                className="w-full text-black   focus:outline-none px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm   focus:border-2  bg-gray-100  focus:border-gray-400"
              >
                <option value="theatre" disabled selected>
                  Theatre Name
                </option>
                <option value="Marina Mall">Marina Mall | Egattur</option>
                <option value="AGS">AGS | Navalur</option>
                <option value="Venkateshwara">
                  Venkateshwara | Guduvancherry
                </option>
                <option value="MR theatre">MR theatre | Chennai </option>
                <option value="PVR">PVR | Chennai</option>
                <option value="INOX">INOX | Virugambakkam</option>
              </select>

              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  className="w-full focus:outline-none px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm   focus:border-2 bg-gray-100 text-black focus:border-gray-400"
                  type="text"
                  required
                  name="numberOfTickets"
                  placeholder="Number of tickets"
                />
                <input
                  className="w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline  bg-gray-100 text-black focus:border-gray-400"
                  type="text"
                  required
                  name="seatRowNumber"
                  placeholder="Row number [1-10]"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <div>
                  <label className="ml-2 text-sm font-medium  text-gray-500">
                    Booking Date
                  </label>
                  <input
                    className="w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline  bg-gray-100 text-black focus:border-gray-400"
                    type="date"
                    required
                    name="dateOfBooking"
                  />
                </div>

                <div>
                  <label className="ml-2 text-sm font-medium  text-gray-500">
                    Time
                  </label>

                  <select
                    name="time"
                    id=""
                    required
                    className="w-full  focus:outline-none px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm   focus:border-2  bg-gray-100 text-black focus:border-gray-400"
                  >
                    <option value="" disabled selected>
                      Select Timing
                    </option>
                    <option value="06:30 am">06:30 AM</option>
                    <option value="10:15 am">10:15 AM</option>
                    <option value="12:30 pm">12:30 AM</option>
                    <option value="02:30 pm">02:30 PM</option>
                    <option value="07:00 pm">07:00 PM</option>
                    <option value="10:00 pm">10:00 PM</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2
                "
              >
                Book Now
              </button>
            </div>
          </form>
        </div>

        <div className="flex justify-end mt-4">
          <Link
            to="/display-movies"
            className="text-blue-700 hover:text-violet-800 hover:underline hover:underline-offset-4"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};
