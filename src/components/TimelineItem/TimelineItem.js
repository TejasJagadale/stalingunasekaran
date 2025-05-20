import React, { useRef, useEffect, useState } from "react";

const TimelineItem = ({ entry, index, language }) => {
  const ref = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`timeline-item ${index % 2 === 0 ? "left" : "right"} ${
        inView ? "in-view" : ""
      }`}
    >
      <div className="timeline-year" aria-label={`Year ${entry.year}`}>
        {entry.year}
      </div>
      <div className="timeline-content">
        {Array.isArray(entry.items) ? (
          <ul>
            {entry.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{entry.items}</p>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;
