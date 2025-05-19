import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaPaperPlane
} from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [language, setLanguage] = useState("english"); // 'english' or 'english'

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log("Subscribed with:", email);
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "english" ? "english" : "english"));
  };
  return (
    <motion.footer
      className="bg-dark text-white py-5"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container">
        <motion.div className="row" variants={containerVariants}>
          {/* About */}
          <motion.div
            className="col-lg-4 mb-4 mb-lg-0 text-start"
            variants={itemVariants}
          >
            <h5 className="fw-bold mb-3">
              {language === "english"
                ? "த.ஸ்டாலின் குணசேகரன்"
                : "T. Stalin Gunasekaran"}
            </h5>
            <p className="mb-3">
              {language === "english"
                ? "கடந்த 40 ஆண்டுகளாக பல்வேறு தளங்களில் சிறந்த சொற்பொழிவாளராக திகழ்கிறார்"
                : "Has been an excellent orator across various platforms for the past 40 years"}
            </p>
            <div className="social-icons">
              <a href="#" className="text-white me-3">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-white me-3">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-white me-3">
                <FaYoutube size={20} />
              </a>
              <a href="#" className="text-white">
                <FaInstagram size={20} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="col-lg-4 mb-4 mb-lg-0" variants={itemVariants}>
            <h5 className="fw-bold mb-3 text-start">
              {language === "english" ? "விரைவு இணைப்புகள்" : "Quick Links"}
            </h5>
            <ul className="list-unstyled text-start">
              {[
                { id: "home", ta: "முகப்பு", en: "Home" },
                { id: "about", ta: "பற்றி", en: "About" },
                { id: "books", ta: "நூல்கள்", en: "Books" },
                { id: "meetings", ta: "சந்திப்புகள்", en: "Meetings" },
                { id: "videos", ta: "காணொளிகள்", en: "Videos" }
              ].map((link) => (
                <li className="mb-2" key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-white text-decoration-none"
                  >
                    {language === "english" ? link.ta : link.en}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div className="col-lg-4 text-start" variants={itemVariants}>
            <h5 className="fw-bold mb-3">
              {language === "english" ? "செய்திமடல்" : "Newsletter"}
            </h5>
            <p className="mb-3">
              {language === "english"
                ? "புதிய நிகழ்வுகள் மற்றும் செய்திகளைப் பெற இங்கே பதிவு செய்யுங்கள்"
                : "Subscribe here to get updates and news"}
            </p>
            {subscribed ? (
              <div className="alert alert-success">
                {language === "english"
                  ? "வாழ்த்துக்கள்! வெற்றிகரமாக பதிவு செய்யப்பட்டது."
                  : "Thank you for subscribing!"}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="d-flex">
                <input
                  type="email"
                  className="form-control me-2"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button className="btn btn-primary" type="submit">
                  <FaPaperPlane />
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>

        {/* Bottom */}
        <motion.div className="row mt-4" variants={itemVariants}>
          <div className="col-12 text-center">
            <hr className="my-4" />
            <div className="d-flex justify-content-center align-items-center mb-2">
              <button
                onClick={toggleLanguage}
                className="btn btn-sm btn-outline-light me-2"
              >
                {language === "english" ? "English" : "தமிழ்"}
              </button>
              <p className="mb-0">
                © {new Date().getFullYear()} T. Stalin Gunasekaran. All Rights
                Reserved.
              </p>
            </div>
            <p className="text-muted small">
              {language === "english"
                ? "இந்த வலைத்தளம் அன்புடன் உருவாக்கப்பட்டது"
                : "Made with ❤️"}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
