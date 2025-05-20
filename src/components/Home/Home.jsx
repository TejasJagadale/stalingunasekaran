import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import "./Home.css";
import { useMediaQuery } from "react-responsive";

const Home = ({ language }) => {
  // const [language, setLanguage] = useState('tamil');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState("tab-1");
  const [currentPage, setCurrentPage] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  // const handleTabClick = (tabId) => {
  //   setActiveTab(tabId);
  // };
  const slides = [
    { id: 1, image: "/images/img1.jpg", alt: "Image 1" },
    { id: 2, image: "/images/stalin2.jpg", alt: "Image 2" },
    { id: 3, image: "/images/img3.jpg", alt: "Image 3" },
    { id: 4, image: "/images/img4.jpg", alt: "Image 4" },
    { id: 5, image: "/images/img5.jpg", alt: "Image 5" }
  ];

  const meetings = [
    {
      id: 1,
      image: "./images/meetings/meeting-1.jpg",
      tamilTitle: "இசைஞானி இளையராஜா",
      englishTitle: "Music Legend Ilayaraja",
      year: "2002",
      tamilText:
        "சென்னையில் பிரசாத் ஸ்டுடியோவிலுள்ள இசைஞானி அவர்களின் அறையில் சந்தித்து உரையாடிய போது ....",
      englishText:
        "During a conversation at Prasad Studios in Chennai in the music maestro's room...",
      pdfLink:
        "https://tstalingunasekaran.com/assets/pdf/meetings/ilayaraja.pdf"
    },
    {
      id: 2,
      image: "./images/meetings/meeting-2.jpg",
      tamilTitle: "எழுத்தாளர் ஜெயகாந்தன்",
      englishTitle: "Writer Jeyakanthan",
      year: "2001",
      tamilText:
        "தமிழக முதல்வர் டாக்டர் கலைஞர் அவர்களை அவரது சென்னை – கோபாலபுரம் இல்லத்தில் 28.02.2001 ஆம் தேதி சந்தித்து...",
      englishText:
        "Meeting with Tamil Nadu Chief Minister Dr. Kalaignar at his Chennai - Gopalapuram residence on 28.02.2001...",
      pdfLink:
        "https://tstalingunasekaran.com/assets/pdf/meetings/jeyakanthan.pdf"
    },
    {
      id: 3,
      image: "./images/meetings/meeting-3.jpg",
      tamilTitle: "கலைஞர் மு. கருணாநிதி",
      englishTitle: "Kalaignar M. Karunanidhi",
      year: "2001",
      tamilText:
        "சுமார் ஆறாண்டுகள் தனது வழக்குரைஞர் தொழிலையும் பொருட்படுத்தாது த. ஸ்டாலின் குணசேகரன் மேற்கொண்ட ....",
      englishText:
        "For about six years, T. Stalin Gunasekaran undertook this work regardless of his profession as a lawyer...",
      pdfLink:
        "https://tstalingunasekaran.com/assets/pdf/meetings/karunanithi.pdf"
    }
  ];

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
    }
  ];

  const tabData = useMemo(
    () => [
      {
        id: "articles",
        titleeng: "articles",
        titletamil: "கட்டுரைகள்",
        items: [
          {
            id: 1,
            imgSrc: "/images/ktturaigal/img-1.jpg",
            href: "assets/img/articles/img-1.jpg",
            alt: "Article 1"
          },
          {
            id: 2,
            imgSrc: "/images/ktturaigal/img-11.jpg",
            href: "assets/img/articles/img-2.jpg",
            alt: "Article 2"
          },
          {
            id: 3,
            imgSrc: "/images/ktturaigal/img-12.jpg",
            href: "assets/img/articles/img-3.jpg",
            alt: "Article 3"
          },
          {
            id: 4,
            imgSrc: "/images/ktturaigal/img-13.jpg",
            href: "assets/img/articles/img-4.jpg",
            alt: "Article 4"
          }
        ]
      },
      {
        id: "texts",
        titleeng: "texts",
        titletamil: "உரைகள்",
        items: [
          {
            id: 1,
            imgSrc: "/images/uraigal/img-1 (1).jpg",
            href: "assets/img/texts/img-1.jpg",
            alt: "Text 1"
          },
          {
            id: 2,
            imgSrc: "/images/uraigal/img-11.jpg",
            href: "assets/img/texts/img-2.jpg",
            alt: "Text 2"
          },
          {
            id: 3,
            imgSrc: "/images/uraigal/img-12.jpg",
            href: "assets/img/texts/img-3.jpg",
            alt: "Text 3"
          },
          {
            id: 4,
            imgSrc: "/images/uraigal/img-13.jpg",
            href: "assets/img/texts/img-4.jpg",
            alt: "Text 4"
          }
        ]
      },
      {
        id: "interviews",
        titleeng: "interviews",
        titletamil: "பேட்டிகள்",
        items: [
          {
            id: 1,
            imgSrc: "/images/petigal/img-1.jpg",
            href: "assets/img/interview/img-1.jpg",
            alt: "Interview 1"
          },
          {
            id: 2,
            imgSrc: "/images/petigal/img-11.jpg",
            href: "assets/img/interview/img-2.jpg",
            alt: "Interview 2"
          },
          {
            id: 3,
            imgSrc: "/images/petigal/img-12.jpg",
            href: "assets/img/interview/img-3.jpg",
            alt: "Interview 3"
          },
          {
            id: 4,
            imgSrc: "/images/petigal/img-13.jpg",
            href: "assets/img/interview/img-4.jpg",
            alt: "Interview 4"
          }
        ]
      },
      {
        id: "news",
        titleeng: "news",
        titletamil: "செய்திகள்",
        items: [
          {
            id: 1,
            imgSrc: "/images/seithigal/img-1 (1).jpg",
            href: "assets/img/news/img-1.jpg",
            alt: "News 1"
          },
          {
            id: 2,
            imgSrc: "/images/seithigal/img-11.jpg",
            href: "assets/img/news/img-2.jpg",
            alt: "News 2"
          },
          {
            id: 3,
            imgSrc: "/images/seithigal/img-12.jpg",
            href: "assets/img/news/img-3.jpg",
            alt: "News 3"
          },
          {
            id: 4,
            imgSrc: "/images/seithigal/img-13.jpg",
            href: "assets/img/news/img-4.jpg",
            alt: "News 4"
          }
        ]
      }
    ],
    []
  );

  const videos = [
    {
      id: 1,
      youtubeId: "QGjB81xaxAo",
      tamilTitle: "த.ஸ்டாலின் குணசேகரன் உரை",
      englishTitle: "T. Stalin Gunasekaran Speech"
    },
    {
      id: 2,
      youtubeId: "xueAiolkyl4",
      tamilTitle: "சிறப்புரை நிகழ்வு",
      englishTitle: "Special Address Event"
    },
    {
      id: 3,
      youtubeId: "kQDrsBArrHQ",
      tamilTitle: "பொது நிகழ்ச்சி",
      englishTitle: "Public Event"
    },
    {
      id: 4,
      youtubeId: "QGjB81xaxAo",
      tamilTitle: "மாதிரி வீடியோ 1",
      englishTitle: "Sample Video 1"
    }
  ];
  const counterItems = [
    {
      id: 1,
      icon: "/images/books.png",
      count: 30,
      titletamil: "படைப்புகள்",
      titleeng: "Books",
      link: "creations.php",
      color: "var(--primary)"
    },
    {
      id: 2,
      icon: "/images/script.png",
      count: 20,
      titletamil: "கட்டுரைகள்",
      titleeng: "Articles",
      link: "articles.php",
      color: "var(--secondary)"
    },
    {
      id: 3,
      icon: "/images/multimedia.png",
      count: 25,
      titletamil: "வீடியோக்கள்",
      titleeng: "Videos",
      link: "index.php#videos",
      color: "var(--tertiary)"
    },
    {
      id: 4,
      icon: "/images/gallery.png",
      count: 100,
      titletamil: "புகைபடங்கள்",
      titleeng: "Photos",
      link: "gallery.php",
      color: "var(--quaternary)"
    },
    {
      id: 5,
      icon: "/images/trophy.png",
      count: 50,
      titletamil: "விருதுகள் மற்றும் அங்கீகாரங்கள்",
      titleeng: "Awards and Recognition",
      link: "awards-recognition.php",
      color: "var(--quinary)"
    }
  ];
  const activeTabData =
    tabData.find((tab) => tab.id === activeTab) || tabData[0];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // 4 seconds per slide

    return () => clearInterval(interval);
  }, [slides.length]);

  // Optional: Ensure activeTab is always valid
  useEffect(() => {
    if (!tabData.some((tab) => tab.id === activeTab)) {
      setActiveTab(tabData[0]?.id || "");
    }
  }, [activeTab, tabData]);

  if (!activeTabData || tabData.length === 0) {
    return <div>No content available</div>;
  }

  const videosPerPage = 3;
  const totalPages = Math.ceil(videos.length / videosPerPage);
  const currentVideos = videos.slice(
    currentPage * videosPerPage,
    (currentPage + 1) * videosPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  return (
    <>
      <section className="containeer">
        <motion.div
          className="left-content content-tamil"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 className="name fosi1" variants={itemVariants}>
            {language === "tamil"
              ? "த.ஸ்டாலின் குணசேகரன்"
              : "T. Stalin Gunasekaran"}
          </motion.h1>
          <motion.h2 className="designation fosi2" variants={itemVariants}>
            {language === "tamil"
              ? "பேச்சாளர் | எழுத்தாளர் | வழக்குரைஞர்"
              : "Speaker | Writer | Lawyer"}
          </motion.h2>
          <motion.p className="experience fosi2" variants={itemVariants}>
            {language === "tamil"
              ? "கடந்த 40 ஆண்டுகளாக பல்வேறு தளங்களில் பயணித்து வரும் ஒரு சிறந்த பேச்சாளர்"
              : "An outstanding speaker who has been traveling across various platforms for the past 40 years"}
          </motion.p>
          <motion.button
            className="animated-button"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {language === "tamil" ? "மேலும் அறிய" : "Learn More"}
          </motion.button>
        </motion.div>

        <div className="right-images">
          
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`slide ${index === currentSlide ? "active" : ""}`}
              style={{ "--image": `url(${slide.image})` }}
            >
              <img src={slide.image} alt={slide.alt} />
            </div>
          ))}
        </div>
      </section>
      <section id="about" className="py-5 bg-light">
        <div className="container py-1 py-lg-5">
          {/* Title with animation */}
          <motion.div
            className="row justify-content-start mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="col-lg-8 text-left">
              <h2 className="section-title fosi1 fw-bold">
                <motion.span
                  className="content-tamil mobileres patri"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {language === "tamil"
                    ? "த.ஸ்டாலின் குணசேகரன் பற்றி"
                    : "About T. Stalin Gunasekaran"}
                </motion.span>
              </h2>
            </div>
          </motion.div>

          <div className="row align-items-center justify-content-between">
            {/* Image with animation */}
            <motion.div
              className="col-lg-5 mb-4 mb-lg-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, type: "spring" }}
              viewport={{ once: true }}
            >
              <motion.img
                src="/images/img4.jpg"
                alt="T. Stalin Gunasekaran"
                className="img-fluid rounded shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Content with staggered animations */}
            <motion.div
              className="col-lg-6"
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.3
                  }
                }
              }}
              viewport={{ once: true }}
            >
              <div className="content-tamil ta-text text-start">
                <motion.p
                  className="fosi2"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  {language === "tamil"
                    ? "ஈரோட்டைச் சேர்ந்த த.ஸ்டாலின் குணசேகரன் பள்ளிக் காலத்திலேயேபொதுமேடைகளில் பேசத் தொடங்கியவர். கல்லூரி மாணவராக விளங்கிய போதே பிற கல்லூரிகள் மற்றும் பொதுஅமைப்புகளின் அழைப்பின் பேரில்முக்கிய நிகழ்வுகளில் சொற்பொழிவுகள் நிகழ்த்தி வந்தார்."
                    : "T. Stalin Gunasekaran from Erode began speaking at publicforums during his school days. During his college years, he delivered speeches at major events upon invitations from othercolleges and public organizations."}
                </motion.p>
                <motion.p
                  className="fosi2"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  {language === "tamil"
                    ? "இளம் வயதிலேயே தனது பேச்சுப்பயணத்தைத் தொடங்கிய இவர் கல்வி,வரலாறு, கலை, இலக்கியம், அறிவியல், அரசியல், சமூகவியல், வாழ்வியல், ஆளுமை மேம்பாடு உள்ளிட்ட பல்வகைத் தலைப்புகளில் கடந்த 40 ஆண்டுகளாகத் தொடர்ந்து உரை நிகழ்த்தி வருகிறார்."
                    : "  Starting his speaking journey at a young age, he has been continuously delivering speeches for the past 40 years on various topics including education, history, art, literature, science, politics, sociology, lifestyle, and personality development."}
                </motion.p>
              </div>

              {/* Buttons with animation */}
              <motion.div
                className="mt-4 text-start"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.a
                  href="#books"
                  className="btn btn-primary me-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="content-tamil butonu">
                    {" "}
                    {language === "tamil" ? "நூல்களைக் காண" : "View Books"}{" "}
                  </span>
                </motion.a>
                <motion.a
                  href="#meetings"
                  className="btn btn-outline-primary rounded-pill mobilemeet"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="content-tamil ">
                    {language === "tamil" ? "சந்திப்புகள்" : "Meetings"}
                  </span>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      <section id="journey" className="py-1 py-lg-5">
        <div className="container py-5">
          {/* Title with animation */}
          <motion.div
            className="row justify-content-center mb-5"
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            whileInView={isMobile ? false : { opacity: 1, y: 0 }}
            transition={isMobile ? { duration: 0 } : { duration: 0.6 }}
            viewport={isMobile ? false : { once: true }}
          >
            <div className="col-lg-8 text-center">
              <h2 className="section-title1 fosi1 fw-bold">
                <motion.span
                  className="content-tamil vazhkai"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {language === "tamil" ? "வாழ்க்கைப் பயணம்" : "Life journey"}
                </motion.span>
              </h2>
            </div>
          </motion.div>

          <div className="row">
            <div className="col-lg-12">
              <ul className="timeline">
                {/* Timeline Item 1 */}
                <motion.li
                  initial={isMobile ? false : { opacity: 0, x: -50 }}
                  whileInView={isMobile ? false : { opacity: 1, x: 0 }}
                  transition={isMobile ? { duration: 0 } : { duration: 0.6 }}
                  viewport={isMobile ? false : { once: true, margin: "-50px" }}
                >
                  <motion.div
                    className="timeline-image"
                    whileHover={isMobile ? false : { scale: 1.1 }}
                    transition={
                      isMobile
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 400, damping: 10 }
                    }
                  >
                    1980
                  </motion.div>
                  <motion.div
                    className="timeline-panel"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="timeline-body">
                      <motion.p
                        className="content-tamil fs-5"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        {language === "tamil"
                          ? "சிக்கய்ய நாயக்கர் கல்லுரி மாணவர் பேரவைத் தலைவராக மாணவர்களால் தேர்ந்தெடுக்கபட்டுப் பணியாற்றினார்"
                          : "Started speaking on public platforms during school days."}
                      </motion.p>
                    </div>
                  </motion.div>
                </motion.li>

                {/* Timeline Item 2 */}
                <motion.li
                  initial={isMobile ? false : { opacity: 0, x: -50 }}
                  whileInView={isMobile ? false : { opacity: 1, x: 0 }}
                  transition={isMobile ? { duration: 0 } : { duration: 0.6 }}
                  viewport={isMobile ? false : { once: true, margin: "-50px" }}
                >
                  <motion.div
                    className="timeline-image"
                    whileHover={isMobile ? false : { scale: 1.1 }}
                    transition={
                      isMobile
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 400, damping: 10 }
                    }
                  >
                    1985
                  </motion.div>
                  <motion.div
                    className="timeline-panel1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="timeline-body">
                      <motion.p
                        className="content-tamil fs-5"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        {language === "tamil"
                          ? "தலை சிறந்த இளம் பேச்சாளர் ' என்ற ஜேசீஸ் விருது பெற்றார்"
                          : "Delivered speeches at major events upon invitations from colleges and public organizations."}
                      </motion.p>
                    </div>
                  </motion.div>
                </motion.li>

                {/* Timeline Item 3 */}
                <motion.li
                  initial={isMobile ? false : { opacity: 0, x: -50 }}
                  whileInView={isMobile ? false : { opacity: 1, x: 0 }}
                  transition={isMobile ? { duration: 0 } : { duration: 0.6 }}
                  viewport={isMobile ? false : { once: true, margin: "-50px" }}
                >
                  <motion.div
                    className="timeline-image"
                    whileHover={isMobile ? false : { scale: 1.1 }}
                    transition={
                      isMobile
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 400, damping: 10 }
                    }
                  >
                    1989
                  </motion.div>
                  <motion.div
                    className="timeline-panel"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="timeline-body">
                      <motion.p
                        className="content-tamil fs-5"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        {language === "tamil"
                          ? "தலை சிறந்த இளைஞர்' என்ற ஜேசீஸ் விருது வழங்கப்பட்டது ."
                          : "Publication of 'Jeeva - Muzhakkam'"}
                      </motion.p>
                    </div>
                  </motion.div>
                </motion.li>

                {/* Timeline Item 4 */}
                <motion.li
                  initial={isMobile ? false : { opacity: 0, x: -50 }}
                  whileInView={isMobile ? false : { opacity: 1, x: 0 }}
                  transition={isMobile ? { duration: 0 } : { duration: 0.6 }}
                  viewport={isMobile ? false : { once: true, margin: "-50px" }}
                >
                  <motion.div
                    className="timeline-image"
                    whileHover={isMobile ? false : { scale: 1.1 }}
                    transition={
                      isMobile
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 400, damping: 10 }
                    }
                  >
                    2001
                  </motion.div>
                  <motion.div
                    className="timeline-panel1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="timeline-body">
                      <motion.p
                        className="content-tamil fs-5"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        {language === "tamil"
                          ? "ஈரோடு தமிழ்ச் சங்கப் பேரவை சார்பில் 'சாதனைச் செம்மல் விருது' வழங்கப்பட்டது ."
                          : "Wrote and published several important books"}
                      </motion.p>
                    </div>
                  </motion.div>
                </motion.li>

                {/* Timeline Item 5 */}
                <motion.li
                  initial={isMobile ? false : { opacity: 0, x: -50 }}
                  whileInView={isMobile ? false : { opacity: 1, x: 0 }}
                  transition={isMobile ? { duration: 0 } : { duration: 0.6 }}
                  viewport={isMobile ? false : { once: true, margin: "-50px" }}
                >
                  <motion.div
                    className="timeline-image"
                    whileHover={isMobile ? false : { scale: 1.1 }}
                    transition={
                      isMobile
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 400, damping: 10 }
                    }
                  >
                    2002
                  </motion.div>
                  <motion.div
                    className="timeline-panel"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="timeline-body">
                      <motion.p
                        className="content-tamil fs-5"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        {language === "tamil"
                          ? "ரோட்டரி சங்கத்தின் உயர் விருதான 'For the sake of honour' என்ற விருது இவரது சமூக சேவையைப் பாராட்டி வழங்கப்பட்டது ."
                          : "Has been an excellent orator across various platforms for the past 40 years"}
                      </motion.p>
                    </div>
                  </motion.div>
                </motion.li>
              </ul>
            </div>
          </div>

          {/* எல்லாவற்றையும் காண்க Button with animation */}
          <motion.div
            className="mt-auto text-end"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="all-books.html"
              className="btn-learn-more"
              whileHover={{ scale: 1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">
                <i className="fas fa-arrow-right me-1"></i>{language === "tamil" ? "மேலும் பார்க்க" : "Learn more"} 
              </span>
            </motion.a>
          </motion.div>
        </div>
      </section>
      <section id="meetings" className="py-1 py-lg-5 bg-light">
        <div className="container py-5">
          <motion.div
            className="row justify-content-left mb-5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="col-lg-8 text-start">
              <h2 className="section-title fosi1 fw-bold">
                <span className="content-tamil kurippu">
                  {language === "tamil"
                    ? "குறிப்பிடத்தக்க சந்திப்புகள்"
                    : "Notable Meetings"}
                </span>
              </h2>
            </div>
          </motion.div>

          <div className="row">
            {meetings.map((meeting, index) => (
              <motion.div
                key={meeting.id}
                className="col-md-6 col-lg-4 mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="card h-100 meeting-card shadow-sm">
                  <img
                    src={meeting.image}
                    className="card-img-top"
                    alt={`Meeting with ${meeting.englishTitle}`}
                  />
                  <div className="card-body text-start d-flex flex-column justify-content-between align-items-start">
                    <h4 className="card-title">
                      <span className="content-tamil fosi21">
                        {language === "tamil"
                          ? meeting.tamilTitle
                          : meeting.englishTitle}
                      </span>
                    </h4>
                    <h6 className="text-muted">{meeting.year}</h6>
                    <p className="card-text content-tamil fosi3">
                      {language === "tamil"
                        ? meeting.tamilText
                        : meeting.englishText}
                    </p>
                    <a href={meeting.pdfLink} className="animated-button mt-3">
                      <span className="">
                        {language === "tamil" ? "மேலும் பார்க்க" : "Read More"}
                      </span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-auto text-end"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="all-books.html"
              className="btn-learn-more"
              whileHover={{ scale: 1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">
                <i className="fas fa-arrow-right me-1"></i>
                {language === "tamil" ? "மேலும் பார்க்க" : "Learn more"}
              </span>
            </motion.a>
          </motion.div>
        </div>
      </section>
      <section id="books" className="py-5">
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
                    {/* Added position-relative */}
                    {/* Image column with higher z-index */}
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
                          {book.isSeeAll ? (
                            <motion.div
                              className="mt-auto text-end"
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ delay: 0.8 }}
                              viewport={{ once: true }}
                            >
                              <motion.a
                                href="all-books.html"
                                className="btn-learn-more"
                                whileHover={{ scale: 1 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <span className="circle" aria-hidden="true">
                                  <span className="icon arrow"></span>
                                </span>
                                <span className="button-text">
                                  <i className="fas fa-arrow-right me-1"></i>{" "}
                                  {language === "tamil"
                                    ? "மேலும் பார்க்க"
                                    : "Learn more"}
                                </span>
                              </motion.a>
                            </motion.div>
                          ) : (
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
                          )}
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

      <section id="features" className="features section-bg bg-light py-5">
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="section-header text-start mb-4">
            <motion.h2
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {language === "tamil" ? "இதழ்கள்" : "Pages"}
            </motion.h2>
          </div>

          <div className="row d-flex justify-content-between">
            {/* Left Column - Tab Buttons */}
            <div className="col-md-2">
              <ul className="nav nav-tabs flex-column" role="tablist">
                {tabData.map((tab) => (
                  <motion.li
                    key={tab.id}
                    className="nav-item mb-2"
                    role="presentation"
                    whileHover={{ scale: 1.02 }}
                  >
                    <button
                      className={`nav-link w-100 text-start ${
                        activeTab === tab.id ? "active show" : ""
                      }`}
                      onClick={() => setActiveTab(tab.id)}
                      aria-selected={activeTab === tab.id}
                      role="tab"
                    >
                      <motion.h4
                        className="idhal"
                        animate={{
                          color: activeTab === tab.id ? "#000" : "#000"
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {language === "tamil" ? tab.titletamil : tab.titleeng}
                      </motion.h4>
                    </button>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Right Column - Tab Content */}
            <div className="col-md-10">
              <div className="tab-content">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTabData.id}
                    className="tab-pane active show"
                    id={activeTabData.id}
                    role="tabpanel"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="row">
                      {activeTabData.items?.map((item, index) => (
                        <motion.div
                          key={item.id}
                          className="col-lg-6 col-md-4 col-sm-6 mb-4"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1, duration: 0.4 }}
                        >
                          <a
                            href={item.href}
                            data-gallery="portfolio-gallery-remodeling"
                            className="glightbox preview-link"
                          >
                            <img
                              src={item.imgSrc}
                              className="img-fluid rounded shadow-sm"
                              alt={item.alt}
                            />
                          </a>
                        </motion.div>
                      ))}
                    </div>

                    <motion.div
                      className="mt-auto text-end"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <motion.a
                        href="all-books.html"
                        className="btn-learn-more"
                        whileHover={{ scale: 1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="circle" aria-hidden="true">
                          <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">
                          <i className="fas fa-arrow-right me-1"></i> Learn more
                        </span>
                      </motion.a>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      <section className="counter-section" ref={ref}>
        <div className="container">
          <div className="counter-grid">
            {counterItems.map((item) => (
              <a href={item.link} key={item.id} className="counter-card">
                <div
                  className="icon-container"
                  style={{ backgroundColor: item.color }}
                >
                  <img src={item.icon} alt={item.title} />
                </div>
                <div className="counter-content">
                  <h3 className="counter-number">
                    {inView && (
                      <CountUp
                        start={0}
                        end={item.count}
                        duration={2.5}
                        suffix=" +"
                      />
                    )}
                  </h3>
                  <h5 className="counter-title">
                    {language === "tamil" ? item.titletamil : item.titleeng}
                  </h5>
                </div>
                <div
                  className="hover-effect"
                  style={{ backgroundColor: item.color }}
                ></div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section id="videos" className="py-5 bg-light">
        <motion.div
          className="container py-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="row justify-content-start mb-5 kanoli">
            <div className="col-lg-8 text-center">
              <motion.h2
                className="section-title fosi1 fw-bold"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <span className="content-tamil underline-wrapper">
                  {language === "tamil" ? "காணொளிகள்" : "Videos"}
                  <span className="underline-right"></span>
                </span>
              </motion.h2>
            </div>
          </div>

          <div className="row position-relative">
            {currentVideos.map((video, index) => (
              <motion.div
                key={video.id}
                className="col-md-6 col-lg-4 mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <motion.div
                  className="card shadow-sm border-0 overflow-hidden"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 20px rgba(0,0,0,0.15)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="video-container position-relative">
                    <iframe
                      className="w-100 ratio ratio-16x9"
                      src={`https://www.youtube.com/embed/${video.youtubeId}`}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <motion.div
                    className="card-body text-center bg-white"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h5 className="card-title mb-0">
                      <span className="content-tamil d-block">
                        {language === "tamil" ? video.tamilTitle : video.englishTitle}
                      </span>
                    </h5>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="d-flex justify-content-center mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                className={`btn btn-sm mx-1 ${
                  currentPage === index ? "btn-primary" : "btn-outline-primary"
                }`}
                onClick={() => setCurrentPage(index)}
              >
                {index + 1}
              </button>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};
export default Home;
