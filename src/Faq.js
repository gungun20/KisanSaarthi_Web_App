import React from "react";
import NavBar from "./Navbar";
import Navbar1 from "./Navbar1";

function Faq() {
  return (
    <div>
      <NavBar />
     <Navbar1 title="Frequently Asked Questions"/>
      <div className="flex my-10 ml-16 justify-between w-3/4">
        <div className=" space-y-6">
          <h1>
            Domain <span className=" text-red-500">*</span> :
          </h1>
          <select name="" id="" className="border-b-2 w-48">
            <option value="" selected></option>
            <option value="">Agriculture</option>
            <option value="">Animal Husbandry</option>
            <option value="">Fisheries</option>
            <option value="">Other</option>
          </select>
        </div>
        <div className=" space-y-6">
          <h1>Crop :</h1>
          <select name="" id="" className="border-b-2 w-48">
            <option value="" selected></option>
          </select>
        </div>
        <div className=" space-y-6">
          <h1>Problem Type :</h1>
          <select name="" id="" className="border-b-2 w-48">
            <option value="" selected></option>
          </select>
        </div>
      </div>
      <div className="flex mx-16 space-x-6">
        <button className=" bg-blue-300 p-3 w-20 text-lg rounded-md">
          Reset
        </button>
        <button className=" bg-slate-300 p-3 w-20 text-lg rounded-md">
          Submit
        </button>
      </div>
    </div>
  );
}
export default Faq;
