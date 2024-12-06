// import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./Components/Footer.js";
import Navbar from "./Components/Navbar.js";

// Adding analytics 
import { Analytics } from "@vercel/analytics/react"


import AnimatedRoutes from "./Components/AnimatedRoutes.js";

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="//input.css"></link>
    <Router>
        <Navbar />
        <AnimatedRoutes />
        <Footer />
        <Analytics />
      </Router>
    </div>
  );
}

export default App;
