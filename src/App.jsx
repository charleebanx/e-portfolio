import { Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import Home from "./routes/Home";
import About from "./routes/About";
import Portfolio from "./routes/Portfolio";
import Contact from "./routes/Contact";

const App = () => {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundColor: "#f8fafc", // global background (soft blush)
        color: "#1e293b",           // default text color (neutral dark)
        fontFamily: "'Inter', sans-serif", // optional: global font
      }}
    >
      <Navbar
        style={{
          backgroundColor: "#ffffff", // navbar background (card white)
          borderBottom: "1px solid #475569", // neutral border
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
