import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [playing, setPlaying] = useState(false);
  const [order, setOrder] = useState([]);
  const [playerOrder, setPlayerOrder] = useState([]);
  const [rand, setRand] = useState(0);

  function handleColor(color) {
    setPlayerOrder((playerOrder) => [...playerOrder, color]);
    generateColor();
    console.log(playerOrder);
    console.log("hi", order);
  }
  function generateColor() {
    if (rand === 1) {
      setOrder((order) => [...order, "red"]);
    } else if (rand === 2) {
      setOrder((order) => [...order, "blue"]);
    } else if (rand === 3) {
      setOrder((order) => [...order, "yellow"]);
    } else if (rand === 4) {
      setOrder((order) => [...order, "green"]);
    }
    setRand(Math.floor(Math.random() * 4) + 1);
  }

  function handleStart() {
    setRand(Math.floor(Math.random() * 4) + 1);
    generateColor();
    setPlaying(true);
  }

  useEffect(() => {
    setRand(Math.floor(Math.random() * 4) + 1);
  }, []);
  return (
    <div className="App bg-dark spacer fill">
      <div className="container vh-100 d-flex flex-column">
        <div className="text-white text-center col-6 m-auto mt-3 mb-0">
          <h1>Score:</h1>
        </div>
        <div className="row col-6 m-auto mt-5 mb-0 justify-content-center h-25 w-100">
          <div
            className="col-2 me-2 bg-danger rounded-pill color-button h-75"
            onClick={() => handleColor("red")}
          ></div>
          <div
            className="col-2 me-2 bg-primary rounded-pill color-button h-75"
            onClick={() => handleColor("blue")}
          ></div>
        </div>
        <div className="row col-6 m-auto mt-2 mb-2 justify-content-center h-25 w-100">
          <div
            className="col-2 me-2 bg-warning rounded-pill color-button h-75"
            onClick={() => handleColor("yellow")}
          ></div>
          <div
            className="col-2 me-2 bg-success rounded-pill color-button h-75"
            onClick={() => handleColor("green")}
          ></div>
        </div>
        <div
          className={`d-flex justify-content-center ${playing ? "d-none" : ""}`}
        >
          <button type="button" className="btn btn-light" onClick={handleStart}>
            Start game!
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
