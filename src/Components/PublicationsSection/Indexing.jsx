import React from "react";
import "./Publication.css";

const indexing = [
  { img: "/images/indexing/1.webp", title: "Indexing partner 1" },
  { img: "/images/indexing/2.jpeg", title: "Indexing partner 2" },
  { img: "/images/indexing/3.jpeg", title: "Indexing partner 3" },
  { img: "/images/indexing/4.png", title: "Indexing partner 4" },
  { img: "/images/indexing/5.webp", title: "Indexing partner 5" },
  { img: "/images/indexing/6.webp", title: "Indexing partner 6" },
  { img: "/images/indexing/7.webp", title: "Indexing partner 7" },
  { img: "/images/indexing/8.webp", title: "Indexing partner 8" },
  { img: "/images/indexing/9.webp", title: "Indexing partner 9" },
  { img: "/images/indexing/10.webp", title: "Indexing partner 10" },
];

function Indexing() {
  return (
    <div className="index">
      <b className="sectionLabel">
        Abstracted and indexed in (Springer Series, Approved)
      </b>

      <div className="IndexImages">
        {indexing.map((item) => (
          <div className="indexImg" key={item.img}>
            <img src={item.img} alt={item.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Indexing;
