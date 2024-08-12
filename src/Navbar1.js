import React, { useState } from "react";
import axios from "axios";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useNavigate } from "react-router-dom";

function Navbar1(props) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  async function handleClick() {
    await axios
      .post("http://localhost:4000/api/logout", {
        logout: null,
      })
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <Popup open={open} closeOnDocumentClick onClose={() => setOpen(false)}>
        <div className="modal grid justify-center space-y-11 mb-2">
          <img
            className=" mx-32"
            src="https://web.umang.gov.in/kisan_sarathi/assets/images/confirmation-icon.png"
            alt=""
          />
          <h1 className=" text-lg mx-7 font-semibold">
            Are you sure you want to logout?
          </h1>
          <div className="flex space-x-8 mx-14">
            <button
              onClick={() => setOpen(false)}
              className=" border-blue-500 border-2 text-blue-400 py-3 px-5 rounded-md"
            >
              Cancel
            </button>

            <button
              onClick={handleClick}
              className="bg-blue-900 text-white py-3 px-5 rounded-md"
            >
              Logout
            </button>
          </div>
        </div>
      </Popup>
      <nav className="h-16 bg-blue-200 mt-16 flex items-center justify-between">
        <h1 id="i" className="text-lg text-blue-600 ml-10 ">
          {props.title}
        </h1>
        <button
          onClick={() => setOpen(true)}
          className=" bg-blue-950 text-white mr-10 px-5 py-1 rounded-2xl"
        >
          Logout
        </button>
      </nav>
    </div>
  );
}

export default Navbar1;
