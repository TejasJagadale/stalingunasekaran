import React from "react";
import { motion } from "framer-motion";

const Books = ({ language }) => {
  const books = [
    {
      id: 1,
      image: "/images/books/jeevamuzhakam.png",
      tamilTitle: "ஜீவா - முழக்கம்",
      englishTitle: "Jeeva - Muzhakkam",
      year: "1997",
      tamilDescription:
        "இந்திய சுதந்திர தினம் ஐம்பதாண்டுப் பொன் விழாவை முன்னிட்டு 'ஜீவா முழக்கம்' ...",
      englishDescription:
        "On the occasion of the 50th anniversary of Indian Independence Day 'Jeeva Muzhakkam'...",
      downloadLink: "./padaipugal/jeeva-mulakkam.pdf"
    },
    {
      id: 2,
      image: "/images/books/desaviduthalai.png",
      tamilTitle: "தேசவிடுதலையும் தியாகச் சுடர்களும்",
      englishTitle: "Desa Viduthalaiyum Thiyagach Chudarkalum",
      year: "1997",
      tamilDescription:
        "இந்நூல் 'ஜீவா முழக்கம்' -இதழின் சுதந்திர தினப் பொன்விழா மலரில் இடம் பெற்றுள்ள முக்கிய கட்டுரைகளை உள்ளடக்கிய ...",
      englishDescription:
        "This book contains important articles featured in the 'Jeeva Muzhakkam' independence day special edition...",
      downloadLink: "./padaipugal/தேசவிடுதலையும் தியாகச் சுடர்களும்.pdf"
    },
    {
      id: 3,
      image: "/images/books/viduthalaivelli.png",
      tamilTitle: "விடுதலை வேள்வியில் தமிழகம்",
      englishTitle: "Viduthalai Vellvil Tamilagam",
      year: "1997",
      tamilDescription:
        "சுமார் ஆறாண்டுகள் தனது வழக்குரைஞர் தொழிலையும் பொருட்படுத்தாது த. ஸ்டாலின் குணசேகரன் மேற்கொண்ட ....",
      englishDescription:
        "About six years of legal practice was set aside by T. Stalin Gunasekaran to focus on...",
      downloadLink: "./padaipugal/விடுதலை வேள்வியல் தமிழகம்.pdf"
    },
    {
      id: 4,
      image: "/images/books/varalaru.png",
      tamilTitle: "மேலும் நூல்கள்",
      englishTitle: "More Books",
      year: "Explore",
      tamilDescription: "மேலும் பல நூல்களை ஆராயவும்...",
      englishDescription: "Explore more of our publications...",
      isSeeAll: true
    },
    {
      id: 5,
      image: "/images/books/jeevamuzhakam.png",
      tamilTitle: "ஜீவா - முழக்கம்",
      englishTitle: "Jeeva - Muzhakkam",
      year: "1997",
      tamilDescription:
        "இந்திய சுதந்திர தினம் ஐம்பதாண்டுப் பொன் விழாவை முன்னிட்டு 'ஜீவா முழக்கம்' ...",
      englishDescription:
        "On the occasion of the 50th anniversary of Indian Independence Day 'Jeeva Muzhakkam'...",
      downloadLink: "./padaipugal/jeeva-mulakkam.pdf"
    },
    {
      id: 6,
      image: "/images/books/desaviduthalai.png",
      tamilTitle: "தேசவிடுதலையும் தியாகச் சுடர்களும்",
      englishTitle: "Desa Viduthalaiyum Thiyagach Chudarkalum",
      year: "1997",
      tamilDescription:
        "இந்நூல் 'ஜீவா முழக்கம்' -இதழின் சுதந்திர தினப் பொன்விழா மலரில் இடம் பெற்றுள்ள முக்கிய கட்டுரைகளை உள்ளடக்கிய ...",
      englishDescription:
        "This book contains important articles featured in the 'Jeeva Muzhakkam' independence day special edition...",
      downloadLink: "./padaipugal/தேசவிடுதலையும் தியாகச் சுடர்களும்.pdf"
    },
    {
      id: 7,
      image: "/images/books/viduthalaivelli.png",
      tamilTitle: "விடுதலை வேள்வியில் தமிழகம்",
      englishTitle: "Viduthalai Vellvil Tamilagam",
      year: "1997",
      tamilDescription:
        "சுமார் ஆறாண்டுகள் தனது வழக்குரைஞர் தொழிலையும் பொருட்படுத்தாது த. ஸ்டாலின் குணசேகரன் மேற்கொண்ட ....",
      englishDescription:
        "About six years of legal practice was set aside by T. Stalin Gunasekaran to focus on...",
      downloadLink: "./padaipugal/விடுதலை வேள்வியல் தமிழகம்.pdf"
    },
    {
      id: 8,
      image: "/images/books/varalaru.png",
      tamilTitle: "மேலும் நூல்கள்",
      englishTitle: "More Books",
      year: "Explore",
      tamilDescription: "மேலும் பல நூல்களை ஆராயவும்...",
      englishDescription: "Explore more of our publications...",
      isSeeAll: true
    },
    {
      id: 9,
      image: "/images/books/jeevamuzhakam.png",
      tamilTitle: "ஜீவா - முழக்கம்",
      englishTitle: "Jeeva - Muzhakkam",
      year: "1997",
      tamilDescription:
        "இந்திய சுதந்திர தினம் ஐம்பதாண்டுப் பொன் விழாவை முன்னிட்டு 'ஜீவா முழக்கம்' ...",
      englishDescription:
        "On the occasion of the 50th anniversary of Indian Independence Day 'Jeeva Muzhakkam'...",
      downloadLink: "./padaipugal/jeeva-mulakkam.pdf"
    },
    {
      id: 10,
      image: "/images/books/desaviduthalai.png",
      tamilTitle: "தேசவிடுதலையும் தியாகச் சுடர்களும்",
      englishTitle: "Desa Viduthalaiyum Thiyagach Chudarkalum",
      year: "1997",
      tamilDescription:
        "இந்நூல் 'ஜீவா முழக்கம்' -இதழின் சுதந்திர தினப் பொன்விழா மலரில் இடம் பெற்றுள்ள முக்கிய கட்டுரைகளை உள்ளடக்கிய ...",
      englishDescription:
        "This book contains important articles featured in the 'Jeeva Muzhakkam' independence day special edition...",
      downloadLink: "./padaipugal/தேசவிடுதலையும் தியாகச் சுடர்களும்.pdf"
    },
    {
      id: 11,
      image: "/images/books/viduthalaivelli.png",
      tamilTitle: "விடுதலை வேள்வியில் தமிழகம்",
      englishTitle: "Viduthalai Vellvil Tamilagam",
      year: "1997",
      tamilDescription:
        "சுமார் ஆறாண்டுகள் தனது வழக்குரைஞர் தொழிலையும் பொருட்படுத்தாது த. ஸ்டாலின் குணசேகரன் மேற்கொண்ட ....",
      englishDescription:
        "About six years of legal practice was set aside by T. Stalin Gunasekaran to focus on...",
      downloadLink: "./padaipugal/விடுதலை வேள்வியல் தமிழகம்.pdf"
    },
    {
      id: 12,
      image: "/images/books/varalaru.png",
      tamilTitle: "மேலும் நூல்கள்",
      englishTitle: "More Books",
      year: "Explore",
      tamilDescription: "மேலும் பல நூல்களை ஆராயவும்...",
      englishDescription: "Explore more of our publications...",
      isSeeAll: true
    },
    {
      id: 13,
      image: "/images/books/jeevamuzhakam.png",
      tamilTitle: "ஜீவா - முழக்கம்",
      englishTitle: "Jeeva - Muzhakkam",
      year: "1997",
      tamilDescription:
        "இந்திய சுதந்திர தினம் ஐம்பதாண்டுப் பொன் விழாவை முன்னிட்டு 'ஜீவா முழக்கம்' ...",
      englishDescription:
        "On the occasion of the 50th anniversary of Indian Independence Day 'Jeeva Muzhakkam'...",
      downloadLink: "./padaipugal/jeeva-mulakkam.pdf"
    },
    {
      id: 14,
      image: "/images/books/desaviduthalai.png",
      tamilTitle: "தேசவிடுதலையும் தியாகச் சுடர்களும்",
      englishTitle: "Desa Viduthalaiyum Thiyagach Chudarkalum",
      year: "1997",
      tamilDescription:
        "இந்நூல் 'ஜீவா முழக்கம்' -இதழின் சுதந்திர தினப் பொன்விழா மலரில் இடம் பெற்றுள்ள முக்கிய கட்டுரைகளை உள்ளடக்கிய ...",
      englishDescription:
        "This book contains important articles featured in the 'Jeeva Muzhakkam' independence day special edition...",
      downloadLink: "./padaipugal/தேசவிடுதலையும் தியாகச் சுடர்களும்.pdf"
    },
    {
      id: 15,
      image: "/images/books/viduthalaivelli.png",
      tamilTitle: "விடுதலை வேள்வியில் தமிழகம்",
      englishTitle: "Viduthalai Vellvil Tamilagam",
      year: "1997",
      tamilDescription:
        "சுமார் ஆறாண்டுகள் தனது வழக்குரைஞர் தொழிலையும் பொருட்படுத்தாது த. ஸ்டாலின் குணசேகரன் மேற்கொண்ட ....",
      englishDescription:
        "About six years of legal practice was set aside by T. Stalin Gunasekaran to focus on...",
      downloadLink: "./padaipugal/விடுதலை வேள்வியல் தமிழகம்.pdf"
    }
  ];
  return (
    <section id="books">
      <div className="container py-1 py-lg-5">
        <motion.div
          className="row justify-content-start mb-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="col-lg-8 text-left">
            <h2 className="section-title fosi1 fw-bold">
              <span className="content-tamil fosi1 noolgal">
                {language === "tamil" ? "நூல்கள்" : "Books"}{" "}
              </span>
            </h2>
          </div>
        </motion.div>

        <div className="row">
          {books.map((book, index) => (
            <motion.div
              key={book.id}
              className="col-md-6 col-lg-6 mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="card h-100 book-card shadow-sm hover-effect-card">
                <div className="row g-0 h-100 position-relative">
                  {" "}
                  <div className="col-md-5 d-flex align-items-center p-2 position-relative z-2">
                    {" "}
                    {/* Added z-2 */}
                    <img
                      src={book.image}
                      className={`imagebooks ${
                        book.isSeeAll ? "rounded-start" : "rounded"
                      }`}
                      alt={book.tamilTitle}
                    />
                  </div>
                  {/* Content column */}
                  <div className="col-md-7 position-relative z-1">
                    {" "}
                    {/* Added z-1 */}
                    <div
                      className={`card-body d-flex flex-column ${
                        book.isSeeAll
                          ? "h-100"
                          : "justify-content-between h-100"
                      }`}
                    >
                      <div className="text-start">
                        <h4 className="card-title">
                          <span className="content-tamil fosi21">
                            {language === "tamil"
                              ? book.tamilTitle
                              : book.englishTitle}
                          </span>
                        </h4>
                        <h6 className="text-muted">{book.year}</h6>
                        <p className="card-text content-tamil fs-6">
                          {language === "tamil"
                            ? book.tamilDescription
                            : book.englishDescription}
                        </p>
                      </div>
                      <div
                        className={
                          book.isSeeAll ? "mt-auto text-end" : "text-end"
                        }
                      >
                          <motion.a
                            href={book.downloadLink}
                            className="btn btn-primary btn-sm hover-effect-btn"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <i className="fas fa-file-pdf me-1"></i> Download
                          </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Books;
