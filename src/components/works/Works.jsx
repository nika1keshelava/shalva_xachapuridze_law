import { useState } from "react";
import "./works.scss";
import { useTranslation } from "react-i18next";

export default function Works() {
  const {t} = useTranslation()
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/man.png",
      title: t("funqciebi"),
      desc: t("funqcia1"),
      img: "./assets/pics/LAP_4673.JPG",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: t("funqciebi"),
      desc: t("funqcia2"),
      img: "./assets/pics/LAP_4676.JPG"
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: t("funqciebi"),
      desc: t("funqcia3"),
      img: "./assets/pics/LAP_4750.JPG"
    },
    {
      id: "4",
      icon: "./assets/writing.png",
      title: t("funqciebi"),
      desc: t("funqcia4"),
      img: "./assets/pics/LAP_4699.JPG"
    },
    
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
