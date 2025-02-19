import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import "./sass/main.scss";

import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

import Blog from "./components/Blog.js";
import Finance from "./components/Finance";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ThemeContext from "./components/examples/contexts/ThemeContext";

import A from "./components/examples/context/A.js";

import Parent from "./components/examples/children/Parent";
import Boortstrap from "./components/examples/bootstrap/Bootstrap";

function App() {
  const theme = { isDark: "true" };

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/finance" element={<Finance />} />
        </Routes>
        <Footer />
      </Router>

      {/* examples */}

      <ThemeContext.Provider value={theme}>
        <A></A>
      </ThemeContext.Provider>

      <Parent>
        <div>1st Child</div>
        <div>2nd Child</div>
      </Parent>

      <Boortstrap />
    </>
  );
}

export default App;
