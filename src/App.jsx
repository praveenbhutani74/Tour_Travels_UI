import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar.jsx";
import TourCard from "./components/TourCard";
import data from "./data";

function App() {
  return (
    <div className="App">
      <Navbar />
      {data.map((item) => (
        <TourCard key={item.id} {...item} />
      ))}
    </div>
  );
}

export default App;
