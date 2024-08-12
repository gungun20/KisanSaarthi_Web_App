import React from "react";




function QueryDetails() {
    return (
      <div>
        <div className="flex justify-between mx-40 my-20">
          <div className="space-y-10">
            <h1 className=" relative right-20">
              Domain <span className="text-red-500">*</span> :
            </h1>
            <select
              name=""
              id=""
              className=" border-slate-300 border-b-2 w-60 "
            >
              <option value=""></option>
            </select>
          </div>
          <div className="space-y-3">
            <h1 className=" relative right-28">
              Crop <span className="text-red-500">*</span> :
            </h1>
            <select
              disabled
              name=""
              id=""
              className=" border-dashed border-b-2 border-slate-700 w-60 relative top-7 right-6 bg-slate-200"
            >
              <option value=""></option>
            </select>
          </div>
          <div className=" mr-7">
            <h1 className=" relative right-24">
              Problem Type  :
            </h1>
            <select
              disabled
              name=""
              id=""
              className=" border-dashed border-b-2 border-slate-700 w-60 relative top-9 right-6 bg-slate-200"
            >
              <option value=""></option>
            </select>
          </div>
        </div>
        <div className="flex justify-between mx-40 my-20">
          <div className="space-y-7">
            <h1 className="relative right-20">Severity :</h1>
            <select
              name=""
              id=""
              className=" border-slate-300 border-b-2 w-60 "
            >
              <option value=""></option>
            </select>
          </div>
          <div className="space-y-7">
            <h1 className=" relative right-24">
              Query Details <span className=" text-red-500">*</span> :
            </h1>
            <input type="text" className=" border-slate-300 border-b-2 w-60 relative right-8" />
          </div>
          <div className="space-y-7  ">
            <h1 className="relative right-32">Symptoms :</h1>
            <input type="text" className=" border-slate-300 border-b-2 w-60 relative right-12" />
          </div>
        </div>
        <div className="flex mx-40 space-x-10 mb-10">
          <button className="border-2 border-blue-400 rounded-md p-3 w-24 text-blue-700">
            Reset
          </button>
          <button className="p-3 w-24 bg-slate-100 text-slate-400 rounded-md">
            Next
          </button>
        </div>
      </div>
    );
}

export default QueryDetails;