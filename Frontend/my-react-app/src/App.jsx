import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GetName from "./Myntra";
import MensWear from "./Components/MensWear/MensWear";
import FusionWear from "./Components/FusionWear/FusionWear";
import GetMovieList from "./Components/GetMovieList/GetMovieList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyntraDashboard from "./Components/MyntraDashboard/MyntraDashboard";
import Men from "./Components/Men/Men";
import Women from "./Components/Women/Women";
import TrainSearch from "./Components/TrainSearch/TrainSearch";
import TrainList from "./Components/TrainList/TrainList";
import Login from "./Components/Login/Login";

const data = "sdfsjsdhf";
function App() {
  const [userName, updateUserName] = useState("Deekshith");
  const [password, updatePassword] = useState("275347625673452");
  function handleUserName(event) {
    updateUserName(event.target.value);
  }

  function handlePassword(event) {
    updatePassword(event.target.value);
  }

  function handleLogin() {
    console.log(userName, password);
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyntraDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/train-search" element={<TrainSearch />} />
          <Route path="/train-list" element={<TrainList />} />

          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
