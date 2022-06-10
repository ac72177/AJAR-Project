import logo from './logo.svg';
import './App.css';
import { PlanContainer } from './components/PlanContainer';
import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Login } from "./components/login/login";
import { Signup } from "./components/login/signup";
import Garden from "./components/garden";

function App() {
  return (
    <div className="App">
      <PlanContainer />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
        <BrowserRouter>
            <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path='/home' element={<Garden />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
