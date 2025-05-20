import React from "react";
import Masonry from "../Masonry/Masonry";
import "./Photos.css";

const data = [
  { id: 6, image: "/images/photos/img-6.jpg", height: 800 },
  { id: 1, image: "/images/photos/img-1.jpg", height: 700 },
  { id: 2, image: "/images/photos/img-2.jpg", height: 600 },
  { id: 3, image: "/images/photos/img-3.jpg", height: 500 },
  { id: 4, image: "/images/photos/img-4.jpg", height: 600 },
  { id: 5, image: "/images/photos/img-5.jpg", height: 500 },
  { id: 14, image: "/images/photos/img-14.jpg", height: 800 },

  { id: 7, image: "/images/photos/img-7.jpg", height: 800 },
  { id: 8, image: "/images/photos/img-8.jpg", height: 600 },
  { id: 11, image: "/images/photos/img-11.jpg", height: 800 },
  { id: 12, image: "/images/photos/img-12.jpg", height: 600 },
  { id: 13, image: "/images/photos/img-13.jpg", height: 800 }
];

const Photos = ({ language }) => {
  return (
    <div className="container py-5">
      <h2 className="photoshead fosi1">
        {language === "tamil" ? "புகைப்படங்கள்" : "My Gallery"}
      </h2>
      <Masonry data={data} />
    </div>
  );
};

export default Photos;
