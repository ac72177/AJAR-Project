import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import dummyData from "./dummyData.json";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App data={dummyData} />
    </React.StrictMode>
);
