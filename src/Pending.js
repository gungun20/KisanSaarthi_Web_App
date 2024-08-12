import React from "react";


function Pending() {
    return (
      <div className="grid justify-center items-center h-40 my-20">
        <img
          className="h-28"
          src="https://web.umang.gov.in/kisan_sarathi/assets/images/no-data-found.svg"
          alt=""
        />
        <h1>No record found</h1>
      </div>
    );
}

export default Pending;