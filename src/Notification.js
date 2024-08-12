import React, { useState } from "react";
import NavBar from "../../kisansaarthi2.0/src/Navbar";
import Multimedia from "../../kisansaarthi2.0/src/Multimedia";
import Messages from "../../kisansaarthi2.0/src/Messages";
import Navbar1 from "./Navbar1";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Notification() {
  const [index, setIndex] = useState(0);

  
  function handleClick1() {
    document.getElementById("query").className = "transition text-blue-700 border-blue-700 border-b-2 h-10";
    document.getElementById("upload").className = "transition h-10";
    setIndex(0);
  }
  function handleClick2() {
    document.getElementById("query").className = "transition duration-500 h-10";
    document.getElementById("upload").className = "transition duration-500 text-blue-700 border-blue-700 border-b-2 h-10";
    setIndex(1);
  }
  return (
    <div>
      <NavBar />
      <Navbar1 title="Notification" />
      <div className=" border-slate-100 border-b-2 space-x-8 mx-10 my-10 flex">
        <div
          id="query"
          className="transition duration-500 text-blue-700 border-blue-700 border-b-2 h-10"
        >
          <button onClick={handleClick1}>Messages</button>
        </div>
        <div id="upload" className="transition duration-500 h-10">
          <button onClick={handleClick2}>Multimedia Advisory</button>
        </div>
      </div>
      <Carousel selectedItem={index} showArrows={false} showThumbs={false}>
        <Messages />
        <Multimedia />
      </Carousel>
    </div>
  );
}

export default Notification;
