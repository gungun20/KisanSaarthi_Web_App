import { useState } from "react";
import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function Component(props) {
  var file = {};
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [preview, setPreview] = useState("");
  const [size, setSize] = useState(0);
  const closeModal = () => setOpen(false);
  function handleChange(event) {
    file = event.target.files[0];
    console.log(file);
    if (file != null) {
      if (file.size / 1000 > props.Size) {
        setOpen(true);

        file = {};
        setPreview("");
      }
      else {
        const name = document.getElementById(props.id).value;
        document.getElementById(props.id4).innerHTML = name.substr(12);
        setOpen1(true);
        setPreview(URL.createObjectURL(file));
        setSize(file.size);
      }
    }
  }
  function Remove() {
    document.getElementById(props.id4).innerHTML = props.str2;
    setOpen1(false);
  }
  return (
    <div>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="grid justify-center h-64 mt-3 ml-2">
          <img
            className="ml-24"
            src="https://web.umang.gov.in/kisan_sarathi/assets/images/warning_icon.svg"
            alt=""
          />
          <h1 className="font-semibold text-md mx-3">
            {props.Size / 1000 >= 1
              ? "You can upload maximum " + props.Size / 1000 + " MB"
              : "You can upload maximum " + props.Size + " KB"}
          </h1>
          <button
            onClick={closeModal}
            className="bg-blue-800 text-white w-32 h-14 rounded-lg mx-16 -mb-3"
          >
            Close
          </button>
        </div>
      </Popup>
      <div
        id="cont1"
        className="h-24 w-96 border-slate-200 border-2 flex items-center space-x-4"
      >
        <img
          className="h-16 relative right-10"
          src="https://media.umangapp.in/cdn/dept/pkg/document.svg"
          alt=""
        />
        <div className="relative right-40 bottom-1">
          <div className="flex justify-start relative left-20">
            <h1 className="text-md font-semibold">
              {props.str1}
            </h1>
          </div>
          <div
            id={props.id1}
            className={open1 ? "w-44 flex relative top-5 right-4" : "hidden"}
          >
            <Popup
              trigger={
                <button className="bg-blue-100 text-xs flex w-20 items-center  rounded-3xl text-blue-600 h-6 relative left-20 bottom-3">
                  <img
                    src="https://media.umangapp.in/cdn/dept/pkg/view.svg"
                    alt=""
                    className="h-4 relative right-2"
                  />
                  <h2 className="font-semibold relative right-4">VIEW</h2>
                </button>
              }
              modal
              nested
            >
              {(close) => (
                <div className="modal h-88">
                  <div className=" border-slate-200 border-b-2 flex justify-between mx-4">
                    <h1 className="text-xl py-2">Preview</h1>
                    <button onClick={() => close()}>
                      <img
                        src="https://media.umangapp.in/cdn/dept/pkg/cross-icon.svg"
                        alt=""
                      />
                    </button>
                  </div>
                  <div className="m-4">
                    <div className="flex justify-between">
                      <h2 id={props.id2}>{file.name}</h2>
                      <div className="bg-blue-100 rounded-3xl text-blue-800 w-24 pl-3">
                        {size / 1000} KB
                      </div>
                    </div>
                    <div className="flex justify-center mt-9">
                      <img className="h-52" src={preview} alt="" />
                    </div>
                  </div>
                </div>
              )}
            </Popup>
            <Popup
              trigger={
                <button
                  className={
                    open1
                      ? "bg-red-100 text-xs flex items-center rounded-3xl text-red-600 h-6 pr-4 relative left-24 bottom-3"
                      : "hidden"
                  }
                >
                  <img
                    src="https://media.umangapp.in/cdn/dept/pkg/delete.svg"
                    alt=""
                    className="h-4 ml-2"
                  />
                  <h2 className="ml-2 font-semibold">REMOVE</h2>
                </button>
              }
              modal
              nested
            >
              {(close) => (
                <div className="modal h-64 grid justify-center items-center">
                  <img
                    src="https://media.umangapp.in/cdn/dept/pkg/confirmation-icon.png"
                    alt=""
                    className="relative left-44"
                  />
                  <h1 className="text-lg text-blue-950 relative bottom-3 left-7">
                    Are you sure you want to remove this media?
                  </h1>
                  <div className="space-x-10 mx-24">
                    <button
                      onClick={() => close()}
                      className=" text-blue-800 border-blue-700 border-2 px-4 py-2 w-24 h-12 rounded-md"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => close()}
                      className=" bg-blue-800 text-white  rounded-md w-24 h-12"
                    >
                      <h1 onClick={Remove}>Confirm</h1>
                    </button>
                  </div>
                </div>
              )}
            </Popup>
          </div>
          <div className="w-44 relative left-16 top-2">
            <div
              id={props.id3}
              className={
                open1
                  ? "hidden"
                  : "h-6 w-20 rounded-2xl bg-blue-800 flex items-center mx-4 justify-between"
              }
            >
              <img
                className="h-4"
                src="https://media.umangapp.in/cdn/dept/pkg/file-upload-white.svg"
                alt=""
              />
              <label
                htmlFor={props.id}
                className="text-white text-xs relative right-2"
              >
                UPLOAD
              </label>
              <input
                type="file"
                className="w-0"
                id={props.id}
                accept={props.accept}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-start mx-2">
        <h1
          id={props.id4}
          className={
            open1
              ? "text-md text-blue-900 font-semibold"
              : "text-sm text-blue-500"
          }
        >
          {props.str2}
        </h1>
      </div>
    </div>
  );
}

export default Component;
