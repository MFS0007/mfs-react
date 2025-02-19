import "./App.css";
import "./sass/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import Blog from "./components/Blog.jsx";
import Finance from "./components/Finance.jsx";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// examples
import ThemeContext from "./components/examples/contexts/ThemeContext.jsx";
import A from "./components/examples/context/A.jsx";
import Parent from "./components/examples/children/Parent.jsx";
import Boortstrap from "./components/examples/bootstrap/Bootstrap.jsx";

function App() {
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

      {/* <ThemeContext.Provider value={theme}>
      <A></A>
      </ThemeContext.Provider> */}

      <Parent>
        <div>1st Child</div>
        <div>2nd Child</div>
      </Parent>

      <Boortstrap />
    </>
  );
}

export default App;
