import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Login } from "./components/login/login";
import { Signup } from "./components/login/signup";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
