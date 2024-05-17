import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { BrowserRouter } from "react-router-dom"; // Cover the App with BrowserRouter
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

//TODO: Import Boostrap here

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
