import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Login } from "./components/login/login";
import { Signup } from "./components/login/signup";
import Garden from "./components/garden";

function App() {
  return (
    <div className="App">
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
