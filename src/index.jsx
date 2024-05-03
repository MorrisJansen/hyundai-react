import React from "react";
import ReactDOMClient from "react-dom/client";
import { CampagneHyundai } from "./screens/CampagneHyundai";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<CampagneHyundai />);
