import { React, useState } from "react";
import NavBar from "../../kisansaarthi2.0/src/Navbar";
import Pending from "../../kisansaarthi2.0/src/Pending";
import Solved from "../../kisansaarthi2.0/src/Solved";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Navbar1 from "./Navbar1";

function Track() {
  const [index, setIndex] = useState(0);
  const s1 = "transition-all duration-500 ease-in-out rounded-3xl px-4 py-1 bg-blue-950 text-white";
  const s2 = "transition-all duration-500 ease-in-out rounded-3xl px-4 py-1 border-2";
  function handleClick1() {
    document.getElementById("b1").className = s1;
    document.getElementById("b2").className = s2;
    setIndex(0);
  }
  function handleClick2() {
    document.getElementById("b1").className = s2;
    document.getElementById("b2").className = s1;
    setIndex(1);
  }
  return (
    <div>
      <NavBar />
      <Navbar1 title="Track your Query"/>
      <div className="flex mx-10 space-x-6 my-10">
        <button
          className="transition-all duration-500 ease-in-out  rounded-3xl px-4 py-1 bg-blue-950 text-white"
          id="b1"
          onClick={handleClick1}
        >
          Pending Queries
        </button>
        <button
          className=" transition-all duration-500 ease-in-out rounded-3xl px-4 py-1 border-2"
          id="b2"
          onClick={handleClick2}
        >
          Solved Queries
        </button>
      </div>
      <Carousel selectedItem={index} showArrows={false} showThumbs={false}>
        <Pending />
        <Solved/>
      </Carousel>
    </div>
  );
}

export default Track;
