// import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

//pages
import Home from "../Pages/Home.js";
import Innota from "../Pages/Innota.js";
import Axis from "../Pages/Axis.js";

//Componnets
// import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    // <AnimatePresence mode="wait">
    <Routes location={location} key={location.pathname}>
      <Route exact path="/" element={<Home />} />
      <Route exact path="Innota" element={<Innota />} />
      <Route exact path="Axis" element={<Axis />} />
    </Routes>
    // </AnimatePresence>
  );
}

export default AnimatedRoutes;
