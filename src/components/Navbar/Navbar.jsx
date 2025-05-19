import { Link } from "react-router-dom";
import "../Home/Home.css";
import { motion } from "framer-motion";
import { useState } from "react";

const navbarVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const mobileMenuVariants = {
  hidden: { y: -300, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <motion.nav
        className="navbar navbar-expand-lg fixed-top bg-white shadow-sm"
        initial="hidden"
        animate="visible"
        variants={navbarVariants}
      >
        <div className="container">
          {/* Mobile-only short name */}
          <a className="navbar-brand fw-bold d-lg-none" href="#home">
            குணசேகரன்
          </a>
          
          {/* Desktop-only full name */}
          <a className="navbar-brand fw-bold d-none d-lg-block" href="#home">
            த. ஸ்டாலின் குணசேகரன்
          </a>
          
          <button
            className="navbar-toggler ms-auto border-0"
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <i className="bi bi-list fs-2"></i>
          </button>

          <div className="desktop-menu d-none d-lg-block">
            <ul className="navbar-nav ms-auto navcontentmain">
              <li className="nav-item navcontent">
                <Link className="nav-link" to="/">
                  முகப்பு
                </Link>
              </li>
              <li className="nav-item navcontent">
                <Link className="nav-link" to="/about">
                  பற்றி
                </Link>
              </li>
              <li className="nav-item navcontent">
                <a className="nav-link" href="#books">
                  நூல்கள்
                </a>
              </li>
              <li className="nav-item navcontent">
                <a className="nav-link" href="#meetings">
                  சந்திப்புகள்
                </a>
              </li>
              <li className="nav-item navcontent">
                <a className="nav-link" href="#videos">
                  புகைப்படங்கள்
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link navcontent1" href="contact.html">
                  தொடர்பு
                </a>
              </li>
            </ul>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="mobile-menu d-lg-none"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={mobileMenuVariants}
        >
          <ul className="navbar-nav">
            <li className="nav-item navcontent">
              <Link className="nav-link" to="/" onClick={toggleMenu}>
                முகப்பு
              </Link>
            </li>
            <li className="nav-item navcontent">
              <Link className="nav-link" to="/about" onClick={toggleMenu}>
                பற்றி
              </Link>
            </li>
            <li className="nav-item navcontent">
              <a className="nav-link" href="#books" onClick={toggleMenu}>
                நூல்கள்
              </a>
            </li>
            <li className="nav-item navcontent">
              <a className="nav-link" href="#meetings" onClick={toggleMenu}>
                சந்திப்புகள்
              </a>
            </li>
            <li className="nav-item navcontent">
              <a className="nav-link" href="#videos" onClick={toggleMenu}>
                புகைப்படங்கள்
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link navcontent1" href="contact.html" onClick={toggleMenu}>
                தொடர்பு
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;