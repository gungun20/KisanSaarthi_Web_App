import React from "react";
import NavBar from "./Navbar";
import Navbar1 from "./Navbar1";

function Call() {
    const phone = [
      {
        Image:
          "https://web.umang.gov.in/kisan_sarathi/assets/images/agriculture.png",
        Domain: "Agriculture",
      },
      {
        Image:
          "https://web.umang.gov.in/kisan_sarathi/assets/images/fisheries.png",
        Domain: "Fisheries",
      },
      {
        Image: "https://web.umang.gov.in/kisan_sarathi/assets/images/other.png",
        Domain: "Other",
      },
      {
        Image: "https://web.umang.gov.in/kisan_sarathi/assets/images/other.png",
        Domain: "Animal Husbandry",
      },
    ];
    return (
      <div className="h-screen bg-slate-100">
        <NavBar />
        <Navbar1 title="Call an Expert"/>
            <div className="grid grid-cols-2 gap-10  my-20  justify-items-center">
                {
                    phone.map((element) => {
                        return (
                          <div className="h-48 w-1/3 bg-white rounded-xl">
                            <img
                              src={element.Image}
                              alt=""
                            />
                            <div className="flex items-center justify-between mt-3 mx-3">
                              <h1>{element.Domain}</h1>
                              <a href="">
                                <img
                                  src="https://img.icons8.com/?size=30&id=ufkkYBXJSuPy&format=png"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                        );
                    })
                }
        </div>
      </div>
    );
}

export default Call;