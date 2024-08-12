import React, { useEffect, useState } from "react";
import NavBar from "../../kisansaarthi2.0/src/Navbar";
import Component from "./Component";
import states from "./StateList";
import axios from "axios";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";

function Registration() {
  const navigate = useNavigate();
  let stateList = states;
  const [sample, setSample] = useState({});
  const [sample1, setSample1] = useState([]);
  const [sample2, setSample2] = useState({});
  const [id, setId] = useState(1);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/log")
      .then((response) => {
        if (response.data.rows[0].logged_number !== null) {
          setOpen4(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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

  function handleChange(event) {
    const str = event.target.value;
    setSample(
      require(`C:/Users/lenovo/C++ 1/kisansaarthi2.0/src/States/${str}.json`)
    );
    document.getElementById("dist").removeAttribute("disabled");
    document.getElementById("dist").className =
      "border-b-2 border-slate-700 w-48 relative top-6 right-6";
    document.getElementById("d").innerHTML = "Select a District";
  }
  function handleChange1() {
    document.getElementById("blck").removeAttribute("disabled");
    document.getElementById("blck").className =
      "border-b-2 border-slate-700 w-48 relative top-6 right-6";
    const index = document.getElementById("dist").selectedIndex;
    setSample1(sample.districts[index - 1]);
    document.getElementById("b").innerHTML = "Select a Block/Mandal";
  }
  function handleChange2() {
    document.getElementById("vlg").removeAttribute("disabled");
    document.getElementById("vlg").className =
      "border-b-2 border-slate-700 w-48 relative top-6 right-6";
    const index = document.getElementById("blck").selectedIndex;
    setSample2(sample1.subDistricts[index - 1]);
    document.getElementById("v").innerHTML = "Select a Village";
    console.log(sample2);
  }
  async function handleChange3(event) {
    const num1 = event.target.value;

    if (num1.length === 10) {
      await axios
        .post("http://localhost:4000/api/verify", {
          number: event.target.value,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      await axios
        .get("http://localhost:4000/api/verify1")
        .then((response) => {
          console.log(response);
          if (response.data.rowCount !== 0) {
            setOpen2(true);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
  async function handleSubmit(event) {
    event.preventDefault();
    const obj = {
      name: document.getElementById("name").value,
      number: document.getElementById("number").value,
      state: document.getElementById("state").value,
      district: document.getElementById("dist").value,
    };
    await axios
      .post("http://localhost:4000/api/submit", obj)
      .then((response) => {
        setOpen3(true);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    setId(id + 1);
  }
  return (
    <div>
      <NavBar />
      <Popup open={open2} closeOnDocumentClick onClose={() => setOpen2(false)}>
        <div className="modal grid justify-center ">
          <div className="w-52 h-76 space-y-6">
            <img
              className="mx-20"
              src="https://web.umang.gov.in/kisan_sarathi/assets/images/warning_icon.svg"
              alt=""
            />
            <p className="w-52 text-center font-semibold">
              This Mobile Number is already registered with Kisan Sarathi.
              Kindly Register with different number or Login with the number
              entered
            </p>
            <button
              onClick={() => setOpen2(false)}
              className="text-white bg-blue-800 w-20 rounded-md h-10 mx-16"
            >
              Close
            </button>
          </div>
        </div>
      </Popup>
      <nav className=" bg-blue-300 h-14 my-20 text-cyan-800 align-middle">
        <div className="mx-10 text-lg relative top-3">Farmers Registration</div>
      </nav>
      <div className="space-y-32">
        <div className="flex mx-20 space-x-72">
          <div className=" space-x-6">
            <h1>
              Farmer Name <span className=" text-red-600">*</span> :
            </h1>
            <input
              type="text"
              name="name"
              id="name"
              className="border-b-2 relative top-6 right-6"
            />
          </div>
          <div className="space-x-9">
            <h1>
              Mobile Number <span className=" text-red-600">*</span> :
            </h1>
            <input
              onChange={handleChange3}
              type="text"
              name="number"
              id="number"
              className="border-b-2 relative top-6 right-8"
            />
          </div>
          <div className=" relative left-6 space-x-9">
            <h1>
              Date of Birth <span className=" text-red-600">*</span> :
            </h1>
            <input
              id="dob"
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
              id="gender"
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
              onChange={handleChange}
              name="state"
              id="state"
              className="border-b-2 w-48 relative top-6 right-6"
            >
              <option selected>Select a State</option>
              {stateList.map((state) => {
                return <option>{state}</option>;
              })}
              ;
            </select>
          </div>
          <div className="mx-2 space-x-6 relative right-5">
            <h1>
              District <span className=" text-red-600">*</span> :
            </h1>
            <select
              onChange={handleChange1}
              disabled
              name="district"
              id="dist"
              className=" border-dashed border-b-2 border-slate-700 w-48 relative top-6 right-6 bg-slate-200"
            >
              <option id="d" selected></option>
              {sample.districts
                ? sample.districts.map((dis) => {
                    return <option>{dis.district}</option>;
                  })
                : null}
            </select>
          </div>
        </div>
        <div className="flex mb-10 mx-20 space-x-80">
          <div className="space-x-6">
            <h1>
              Block/Mandal <span className=" text-red-600">*</span> :
            </h1>
            <select
              onChange={handleChange2}
              disabled
              name="block"
              id="blck"
              className=" border-dashed border-b-2 border-slate-700 w-48 relative top-6 right-6 bg-slate-200"
            >
              <option id="b" selected></option>
              {sample1.subDistricts &&
                sample1.subDistricts.map((block) => {
                  return <option>{block.subDistrict}</option>;
                })}
            </select>
          </div>
          <div className=" relative right-10 space-x-6">
            <h1>
              Village <span className=" text-red-600">*</span> :
            </h1>
            <select
              disabled
              id="vlg"
              name="village"
              className=" border-dashed border-b-2 border-slate-700 w-48 relative top-6 right-6 bg-slate-200"
            >
              <option id="v"></option>
              {sample2.villages &&
                sample2.villages.map((village) => {
                  return <option>{village}</option>;
                })}
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
            <input
              type="number"
              id="land"
              className=" border-b-2 relative top-6 "
            />
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
      <Carousel className="mx-20">
        <Component
          str1="Photo"
          str2="Only 'jpg , png' format is allowed. Max 500 KB"
          id="upload6"
          id1="a6"
          id2="b6"
          id3="c6"
          id4="d6"
          accept="image/png,image/jpg,image/jpeg"
          Size={500}
        />
        </Carousel>
      <div className="mx-16 flex mb-10">
        <input type="checkbox" className="h-6" />
        <div className="mx-4">
          <p>
            1. I give my explicit consent to register with Kisansarathi and I
            also acknowledge that I have read and understood the terms and
            conditions, privacy policy and other applicable policies related to
            the use of Kisansarathi services.{" "}
            <span className="text-red-500">*</span>
          </p>
          <p>
            2. I hereby authorize Kisansarathi to send communications via email,
            SMS, calls or any other mode for informational and promotional
            purposes. <span className="text-red-500">*</span>
          </p>
        </div>
      </div>
      <div className="flex mx-20 space-x-10 mb-10">
        <button className="border-2 border-blue-400 rounded-md p-3 w-24 text-blue-700">
          Reset
        </button>
        <Popup
          open={open3}
          closeOnDocumentClick
          onClose={() => setOpen3(false)}
        >
          <div className="modal h-60 grid justify-center">
            <img
              className="ml-28 h-20"
              src="https://img.icons8.com/?size=64&id=a4l6bA9mSmBh&format=png&color=40C057"
              alt=""
            />
            <h1 className=" text-xl font-semibold">
              You Have Successfully Registered
            </h1>
            <form action="/">
              <button
                // onClick={() => setOpen3(false)}
                className="bg-blue-700 text-white h-14 rounded-md w-20 ml-28 mt-6"
              >
                Close
              </button>
            </form>
          </div>
        </Popup>
        <Popup
          open={open4}
          closeOnDocumentClick
          onClose={() => setOpen4(false)}
        >
          <div className="modal grid justify-center space-y-11 mb-2">
            <img
              className=" mx-56"
              src="https://web.umang.gov.in/kisan_sarathi/assets/images/confirmation-icon.png"
              alt=""
            />
            <h1 className=" text-lg mx-10 font-semibold">
              You are alreday logged In, Please logout to continue.!
            </h1>
            <div className="flex space-x-8 mx-36">
              <button
                onClick={() => setOpen4(false)}
                className="border-0  border-blue-400 p-4 w-24 text-blue-400"
              >
                Cancel
              </button>

              <button
                onClick={handleClick}
                className="bg-blue-900 text-white py-3 px-5 rounded-md w-24"
              >
                Logout
              </button>
            </div>
          </div>
        </Popup>
        <form onSubmit={handleSubmit} method="post" action="/api/submit">
          <button className="p-3 w-24 bg-slate-100 text-slate-400 rounded-md">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default Registration;
