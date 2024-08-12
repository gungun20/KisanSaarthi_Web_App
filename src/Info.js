import React, { useEffect } from "react";
import NavBar from "./Navbar";
import data from "./Arrays";
import { useLocation } from "react-router-dom";

function Info() {
  const location = useLocation();
  const key = location.state.key;
  useEffect(() => {
    console.log(location.state);
  });
  return (
    <div className="bg-slate-100 h-screen">
      <NavBar />
      <div className="w-3/4 bg-white mt-28 border-slate-100 border mx-44">
        <img
          className="h-20 relative bottom-10 left-1/3 mx-40"
          src="https://media.umangapp.in/app/ico/service/KisanSarathiLogo.png"
          alt=""
        />
        <div style={{marginLeft : 400 , width : 380}} className="flex justify-center">
          <h1 className="text-blue-700 text-xl my-10">{data[key].Content}</h1>
        </div>
        <div className="grid justify-center" >
          <h1 className="text-lg pl-3 underline">Description</h1>
          <p className="px-3 pt-4 pb-6">{data[key].Description}</p>
        </div>
      </div>
      <form
        action={data[key].Route}
        className="bg-blue-800 mx-44 my-10 rounded-md w-36 p-4 text-white"
      >
        <button className="px-3">Visit Service</button>
      </form>
    </div>
  );
}

export default Info;
