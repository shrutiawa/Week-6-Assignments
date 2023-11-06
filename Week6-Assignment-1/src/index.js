import React, {Component} from "react" //React is a dafault export
import App from "./components/App" //React is a dafault export
import {createRoot } from "react-dom/client"  //createRoot is a named export
createRoot(document.getElementById("root")).render(<div><App/></div>)