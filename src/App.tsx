import "./index.css";
import HomePage from "./HomePage";
import About from "./About";
import Artists from "./Artists";
import Art from "./Art";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Artists" element={<Artists />} />
          <Route path="/Art" element={<Art />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
