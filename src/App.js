import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react"; // Add useState
import "./App.css";
import Home from "./components/Home/Home.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import About from "./components/About/About.jsx";
import ScrollToTopButton from "./components/ScrolltoTop/ScrollToTopButton.jsx";

function App() {
  const [language, setLanguage] = useState("tamil"); // State moved to App.js

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "tamil" ? "english" : "tamil"));
  };

  return (
    <Router>
      <div className="App">
        {/* Pass language & toggleLanguage to Navbar */}
        <Navbar language={language} toggleLanguage={toggleLanguage} />
        
        <Routes>
          {/* Pass language to all pages */}
          <Route path="/" element={<Home language={language} />} />
          <Route path="/about" element={<About language={language} />} />
        </Routes>
        
        <Footer language={language} /> {/* If Footer needs language */}
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;