import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react"; // Add useState
import Aos from "aos";
import "./App.css";
import Home from "./components/Home/Home.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import About from "./components/About/About.jsx";
import ScrollToTopButton from "./components/ScrolltoTop/ScrollToTopButton.jsx";
import Books from "./components/Books/Books.jsx";
import Photos from "./components/Photos/Photos.jsx";
import Meeting from "./components/Meetings/Meeting.jsx";

function App() {
  const [language, setLanguage] = useState("tamil"); // State moved to App.js

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "tamil" ? "english" : "tamil"));
  };

  useEffect(() => {
    Aos.init({
      duration: 800,
      easing: "ease-in-out",
      once: true
    });
  }, []);

  return (
    <Router>
      <div className="App">
        {/* Pass language & toggleLanguage to Navbar */}
        <Navbar language={language} toggleLanguage={toggleLanguage} />
        <Routes>
          {/* Pass language to all pages */}
          <Route path="/" element={<Home language={language} />} />
          <Route path="/about" element={<About language={language} />} />
          <Route path="/books" element={<Books language={language} />} />
          <Route path="/photos" element={<Photos language={language} />} />
          <Route path="/meetings" element={<Meeting language={language} />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer language={language} /> {/* If Footer needs language */}
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;
