import { NavLink } from "react-router-dom";
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

const Navbar = ({ language, toggleLanguage }) => {
  // Receive props
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
          <NavLink className="navbar-brand fw-bold d-lg-none" to="/">
            {language === "tamil" ? "குணசேகரன்" : "Gunasekaran"}
          </NavLink>

          {/* Desktop-only full name */}
          <NavLink className="navbar-brand fw-bold d-none d-lg-block" to="/">
            {language === "tamil"
              ? "த. ஸ்டாலின் குணசேகரன்"
              : "T. Stalin Gunasekaran"}
          </NavLink>

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
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    isActive ? "nav-link active-nav-link" : "nav-link"
                  }
                  end
                >
                  {language === "tamil" ? "முகப்பு" : "Home"}
                </NavLink>
              </li>
              <li className="nav-item navcontent">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "nav-link active-nav-link" : "nav-link"
                  }
                >
                  {language === "tamil" ? "பற்றி" : "About"}
                </NavLink>
              </li>
              <li className="nav-item navcontent">
                <NavLink
                  to="/books"
                  className={({ isActive }) =>
                    isActive ? "nav-link active-nav-link" : "nav-link"
                  }
                >
                  {language === "tamil" ? "நூல்கள்" : "Books"}
                </NavLink>
              </li>
              <li className="nav-item navcontent">
                <NavLink
                  to="/meetings"
                  className={({ isActive }) =>
                    isActive ? "nav-link active-nav-link" : "nav-link"
                  }
                >
                  {language === "tamil" ? "சந்திப்புகள்" : "Meetings"}
                </NavLink>
              </li>
              <li className="nav-item navcontent">
                <NavLink
                  to="/#videos"
                  className={({ isActive }) =>
                    isActive ? "nav-link active-nav-link" : "nav-link"
                  }
                >
                  {language === "tamil" ? "புகைப்படங்கள்" : "Gallery"}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link navcontent1 active-nav-link"
                      : "nav-link navcontent1"
                  }
                >
                  {language === "tamil" ? "தொடர்பு" : "Contact"}
                </NavLink>
              </li>
            </ul>
          </div>
          <button
            onClick={toggleLanguage} // Use the prop instead of local state
            className="language-toggle"
          >
            {language === "tamil" ? "English" : "தமிழ்"}
          </button>
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
              <NavLink
                to="/home"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive ? "nav-link active-nav-link" : "nav-link"
                }
                end
              >
                முகப்பு
              </NavLink>
            </li>
            <li className="nav-item navcontent">
              <NavLink
                to="/about"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive ? "nav-link active-nav-link" : "nav-link"
                }
              >
                பற்றி
              </NavLink>
            </li>
            <li className="nav-item navcontent">
              <NavLink
                to="/books"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive ? "nav-link active-nav-link" : "nav-link"
                }
              >
                நூல்கள்
              </NavLink>
            </li>
            <li className="nav-item navcontent">
              <NavLink
                to="/meetings"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive ? "nav-link active-nav-link" : "nav-link"
                }
              >
                சந்திப்புகள்
              </NavLink>
            </li>
            <li className="nav-item navcontent">
              <NavLink
                to="/videos"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive ? "nav-link active-nav-link" : "nav-link"
                }
              >
                புகைப்படங்கள்
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive
                    ? "nav-link navcontent1 active-nav-link"
                    : "nav-link navcontent1"
                }
              >
                தொடர்பு
              </NavLink>
            </li>
          </ul>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
