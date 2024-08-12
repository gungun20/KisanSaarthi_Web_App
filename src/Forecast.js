import React, { useEffect, useState } from "react";
import NavBar from "./Navbar";
import Navbar1 from "./Navbar1";
import axios from "axios";

function Forecast() {
  const [data, setData] = useState({});
  const date = new Date();
  useEffect(() => {
    axios
      .get(
        "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Bhopal?unitGroup=us&key=NNYZNPL7XFVR55JRHYDMHZDVN&contentType=json"
      )
      .then((response) => {
        console.log("Success");
        setData(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);
  return (
    <>
      <NavBar />
      <Navbar1 title="Weather Forecast" />
      <div className="my-20 -mb-3 grid row justify-items-center">
        <h1 className="text-2xl mr-24">Local Weather Forecast for region</h1>
        <h1 className="my-10 mr-32 text-xl">Date : </h1>
      </div>
      <div className=" mt-6 mb-16 grid row justify-items-center space-y-6">
        <img
          className="mr-10"
          src=""
          alt=""
        />
        <h2 className="mr-10 text-xl"></h2>
      </div>
      <div className="flex mx-32 space-x-60">
        <div className="space-y-5">
          <h1>Humidity at 8:30 AM :</h1>
          <h1>Humidity at 5:30 PM :</h1>
        </div>
        <div className=" space-y-5">
          <h1>Sunrise Time : </h1>
          <h1>Sunset Time : </h1>
        </div>
        <div className=" space-y-5">
          <h1>Moonrise Time :</h1>
          <h1>Moonset Time :</h1>
        </div>
        <div className=" space-y-5">
          <h1>Maximum Temp (°F) : </h1>
          <h1>Minimum Temp (°F) : </h1>
        </div>
      </div>
      <h1 className="-ml-16 my-20 text-center ">Rainfall in 24 Hours : </h1>
    </>
  );
}

export default Forecast;
