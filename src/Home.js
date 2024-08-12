import React, { useState, useEffect } from "react";
import NavBar from "./Navbar";
import data from "./Arrays";
import { setIndex } from "./arrayslice";
import { useNavigate } from "react-router-dom";

function Home() {
  const [result, setResult] = useState(data);
  const navigate = useNavigate();

  function handleChange(event) {
    const str = event.target.value;
    const str2 = str.toLowerCase();
    setResult(
      data.filter((element) => {
        const str1 = element.Content.toLowerCase();
        return str1.includes(str2);
      })
    );
    console.log(result);
  }
  return (
    <div className=" bg-slate-100 h-screen">
      <NavBar />
      <div className="flex items-center justify-between ml-11 mr-40 my-20">
        <h1 className="font-bold text-2xl  ">General Services</h1>
        <input
          type="text"
          placeholder="Search Services here..."
          className="h-6 w-72 px-3 py-4 rounded-lg border-slate-200 border-2"
          onChange={handleChange}
        />
      </div>
      <div
        id="cont"
        className="grid grid-rows-4 grid-flow-col gap-6 mx-10 mb-20"
      >
        {result.map((element) => {
          return (
            <div className="bg-white h-20 border font-medium flex justify-between">
              <form action={element.Route}>
                <div className="flex">
                  <button
                    value={element.Route}
                    className="my-5 mx-2 flex  h-16"
                  >
                    <img src={element.Icon} alt="" className="h-10" />
                    <div className="mx-3 my-1.5 h-3">{element.Content}</div>
                  </button>
                </div>
              </form>
              <div className="flex items-center mr-3">
                <button
                  onClick={() => navigate("/info", { state: { key: element.key } })}
                >
                  <img
                    className="h-6"
                    src="https://img.icons8.com/?size=30&id=59817&format=png"
                    alt=""
                  />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Home;
