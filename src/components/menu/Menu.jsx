import "./menu.scss";
import { useTranslation } from "react-i18next";


export default function Menu({ menuOpen, setMenuOpen }) {

  const {t} = useTranslation()


  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro">{t("menu1")}</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#portfolio">{t("menu2")}</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#works">{t("menu3")}</a>
        </li>
        
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#contact">{t("menu4")}</a>
        </li>
      </ul>
    </div>
  );
}
