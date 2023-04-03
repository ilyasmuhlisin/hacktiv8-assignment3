import "./index.css";
import { Routes, Route } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Awards from "./pages/Awards";
import Interests from "./pages/Interests";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Experience from "./pages/Experience";

function App() {
  return (
    <div>
      <Row>
        <Col md={2}>
          <Navbar />
        </Col>
        <Col md={9}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/interests" element={<Interests />} />
            <Route path="/awards" element={<Awards />} />
          </Routes>
        </Col>
      </Row>
    </div>
  );
}

export default App;
