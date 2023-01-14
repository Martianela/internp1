import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import About from "./Routes/About";
import Destination from "./Routes/Destination";
import Home from "./Routes/Home";
import Profile from "./Routes/Profile";

function App() {
  const [place, setPlace] = useState(1);

  return (
    <div className="sm:w-[80%] w-[95%] mx-auto">
      <Routes>
        <Route path={"/"} element={<Home setPlace={setPlace} />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/profile"} element={<Profile />} />
        <Route path="/:place" element={<Destination place={place} />} />
      </Routes>
    </div>
  );
}

export default App;
