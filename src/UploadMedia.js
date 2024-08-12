import React from "react";
import Component from "./Component";

function UploadMedia() {
  return (
    <div className="mx-20">
      <div className="border-slate-100 border-b-2">
        <div className=" text-blue-500 border-blue-900 border-b-2 w-36 p-3">
          Images Upload
        </div>
      </div>
      <div className="my-10">
        <div className="flex space-x-64">
          <Component
            str1="Upload 1st Image"
            str2="Only 'jpg , jpeg', 'png format is allowed. Max 1 MB"
            id="upload1"
            id1="a1"
            id2="b1"
            id3="c1"
            id4="d1"
            accept="image/png,image/jpg,image/jpeg"
            Size={1000}
          />
          <Component
            str1="Upload 2nd Image"
            str2="Only 'jpg , jpeg', 'png format is allowed. Max 1 MB"
            id="upload2"
            id1="a2"
            id2="b2"
            id3="c2"
            id4="d2"
            accept="image/png,image/jpg,image/jpeg"
            Size={1000}
          />
        </div>
        <div className="w-1/4 my-10">
          <Component
            str1="Upload 3rd Image"
            str2="Only 'jpg , jpeg', 'png format is allowed. Max 1 MB"
            id="upload3"
            id1="a3"
            id2="b3"
            id3="c3"
            id4="d3"
            accept="image/png,image/jpg,image/jpeg"
            Size={1000}
          />
        </div>
      </div>
      <div className="border-slate-100 border-b-2 my-10">
        <div className=" text-blue-500 border-blue-900 border-b-2 w-52 p-3">
          Voice Recording Upload
        </div>
      </div>
      <div className="">
        <Component
          str1="Upload Voice Recording"
          str2="Only 'mp3, wav, ogg, m4ac, acc' format is allowed. Max 3 MB"
          id="upload4"
          id1="a4"
          id2="b4"
          id3="c4"
          id4="d4"
          accept="audio/*"
          Size={3000}
        />
      </div>
      <div className="border-slate-100 border-b-2 my-10">
        <div className=" text-blue-500 border-blue-900 border-b-2 w-32 p-3">
          Video Upload
        </div>
      </div>
      <div className="grid grid-cols-2 gap-20">
        <Component
          str1="Upload Video"
          str2="Only 'mp4 , mpeg, avi' format is allowed. Max 5MB"
          id="upload5"
          id1="a5"
          id2="b5"
          id3="c5"
          id4="d5"
          accept="video/mp4,video/mpeg,video/avi"
          Size={5000}
        />
      </div>
      <div className="flex space-x-10 my-10">
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

export default UploadMedia;
