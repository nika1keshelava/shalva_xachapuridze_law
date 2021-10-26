import "./intro.scss";
import { useTranslation } from "react-i18next";


export default function Intro() {
  const {t} = useTranslation()
  

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img  src="assets/shalvaMain.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <img id="logo" src="assets/LOGO/KInc_KHACHAPURIDZETEXT.png"   />
          <h2> {t("xach")} </h2>
          <br></br>
          
          <br></br>
          <h3>
            {t("sferoebi")}: <span> 
              <ul className = "list">
                <li>{t("sfero1")}</li>
                <li>{t("sfero2")}</li>
                <li>{t("sfero3")}</li>
                
              </ul>
               </span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
