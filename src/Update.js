import React from "react";
import NavBar from "../../kisansaarthi2.0/src/Navbar";
import Component from "./Component";
import Navbar1 from "./Navbar1";

function Update() {
  return (
    <div>
      <NavBar />
      <Navbar1 title="Update Profile" />
      <div className="space-y-32 mt-20">
        <div className="flex mx-20 space-x-72">
          <div className=" space-x-6">
            <h1>
              Farmer Name <span className=" text-red-600">*</span> :
            </h1>
            <input type="text" className="border-b-2 relative top-6 right-6" />
          </div>
          <div className="space-x-9">
            <h1>
              Mobile Number <span className=" text-red-600">*</span> :
            </h1>
            <input type="text" className="border-b-2 relative top-6 right-8" />
          </div>
          <div className=" relative left-6 space-x-9">
            <h1>
              Date of Birth <span className=" text-red-600">*</span> :
            </h1>
            <input
              type="date"
              className="border-b-2 relative top-6 right-8 w-48"
            />
          </div>
        </div>
        <div className="flex mx-20 space-x-80">
          <div className="  space-x-6">
            <h1>
              Gender <span className=" text-red-600">*</span> :
            </h1>
            <select
              name=""
              id=""
              className="w-40  border-b-2 relative top-6 right-6"
            >
              <option value="">Male</option>
              <option value="">Female</option>
              <option value="">Other</option>
            </select>
          </div>
          <div className=" relative right-3 space-x-6 ">
            <h1>
              State <span className=" text-red-600">*</span> :
            </h1>
            <select
              name=""
              id=""
              className="border-b-2 w-48 relative top-6 right-6"
            >
              <option value=""></option>
            </select>
          </div>
          <div className="mx-2 space-x-6 relative right-5">
            <h1>
              District <span className=" text-red-600">*</span> :
            </h1>
            <select
              disabled
              name=""
              id=""
              className=" border-dashed border-b-2 border-slate-700 w-48 relative top-6 right-6 bg-slate-200"
            >
              <option value=""></option>
            </select>
          </div>
        </div>
        <div className="flex mb-10 mx-20 space-x-80">
          <div className="space-x-6">
            <h1>
              Block/Mandal <span className=" text-red-600">*</span> :
            </h1>
            <select
              disabled
              name=""
              id=""
              className=" border-dashed border-b-2 border-slate-700 w-48 relative top-6 right-6 bg-slate-200"
            >
              <option value=""></option>
            </select>
          </div>
          <div className=" relative right-10 space-x-6">
            <h1>
              Village <span className=" text-red-600">*</span> :
            </h1>
            <select
              disabled
              name=""
              id=""
              className=" border-dashed border-b-2 border-slate-700 w-48 relative top-6 right-6 bg-slate-200"
            >
              <option value=""></option>
            </select>
          </div>
          <div className="relative right-14 space-x-6">
            <h1>
              Language <span className=" text-red-600">*</span> :
            </h1>
            <select
              disabled
              name=""
              id=""
              className=" border-dashed border-b-2 border-slate-700 w-48 relative top-6 right-6 bg-slate-200"
            >
              <option value=""></option>
            </select>
          </div>
        </div>
        <div className="flex mx-20 space-x-64">
          <div className="  space-x-7">
            <h1>
              KVK <span className=" text-red-600">*</span> :
            </h1>
            <select
              disabled
              name=""
              id=""
              className=" border-dashed border-b-2 border-slate-700 w-48 relative top-6 right-6 bg-slate-200"
            >
              <option value=""></option>
            </select>
          </div>
          <div className="relative left-3">
            <h1>
              Farming Land Size (In Acer){" "}
              <span className=" text-red-600">*</span> :
            </h1>
            <input type="text" className=" border-b-2 relative top-6 " />
          </div>
          <div className=" relative left-20 space-x-6">
            <h1>
              Advisory Domain <span className=" text-red-600">*</span> :
            </h1>
            <select
              disabled
              name=""
              id=""
              className=" border-dashed border-b-2 border-slate-700 w-48 relative top-6 right-6 bg-slate-200"
            >
              <option value=""></option>
            </select>
          </div>
        </div>
      </div>
      <div className="mx-16 mt-20 mb-10 border-b-2 border-slate-200">
        <h1 className="text-blue-500 pb-2 ">Upload Photo</h1>
      </div>
      <div className="w-1/2 mx-16 mb-6">
        <Component
          str1="Photo"
          str2="Only 'jpg , png' format is allowed. Max 500 KB"
          str3="uploadPhoto"
          c1="u0"
          c2="i0"
          c3="p0"
          c4="n0"
          Size={1000}
          class1="h-16 relative left-2"
          class2="relative left-3"
          class3="text-sm font-semibold relative top-2 left-2"
          class4="h-6 w-20 relative bottom-2 rounded-2xl bg-blue-800 flex items-center justify-between"
          class5="h-4 relative left-1"
          class6="text-sm text-blue-500 relative left-3"
          class7="font-semibold relative left-4"
          class8="text-md text-blue-900 font-semibold relative left-3"
          class9="h-4 relative left-3"
          class10="text-white text-xs"
        />
      </div>
      <div className="flex mx-20 space-x-10 mb-10">
        <button className="border-2 border-blue-400 rounded-md p-3 w-24 text-blue-700">
          Reset
        </button>
        <button className="p-3 w-24 bg-slate-100 text-slate-400 rounded-md">
          Submit
        </button>
      </div>
    </div>
  );
}
export default Update;
