import { React, useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Registration from "./Registration";
import Forecast from "./Forecast";
import Update from "./Update";
import Call from "./Call";
import Faq from "./Faq";
import Raise from "./Raise";
import Track from "./Track";
import Notification from "./Notification";
import axios from "axios";
import Info from "./Info";

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/forecast" element={<Forecast />} />
          <Route path="/update" element={<Update />} />
          <Route path="/call" element={<Call />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/raise" element={<Raise />} />
          <Route path="/track" element={<Track />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/forecast1" element={<Forecast />} />
          <Route path="/call1" element={<Call />} />
          <Route path="/Faq1" element={<Faq />} />
          <Route path="/raise1" element={<Raise />} />
          <Route path="/track1" element={<Track />} />
          <Route path="/update1" element={<Update />} />

          <Route path="/notification1" element={<Notification />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
