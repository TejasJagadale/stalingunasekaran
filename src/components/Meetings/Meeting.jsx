import React from "react";
import { motion } from "framer-motion";

const Meeting = ({ language }) => {
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
    },
    {
      id: 4,
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
      id: 5,
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
      id: 6,
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
    },
    {
      id: 7,
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
  return (
    <section id="meetings" className="py-1 py-lg-5 bg-light">
      <div className="container">
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
      </div>
    </section>
  );
};

export default Meeting;
