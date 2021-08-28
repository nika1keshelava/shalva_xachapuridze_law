import "./portfolio.scss";

import { useTranslation } from "react-i18next";

export default function Portfolio() {
  const {t} = useTranslation()

  return (
    <div className="portfolio" id="portfolio">
      <section className="introduction-section">
        <h1>{t("about")} - {t("shalva")}</h1>
        
        
      </section>
      <section className="location-section">
        <h2>{t("mdgomareoba")}</h2>
        <p>{t('mdgomareobebi')}</p>
      </section>
      <section className="location-section">
        <h2>{t("ganatleba")}</h2>
        <p>{t('ganatlebebi')}</p>
      </section>
      <section className="location-section">
        <h2>{t("samushaoSfero")}</h2>
        <ul>
          <li>{t("samushaoSfero1")}</li>
          <li>{t("samushaoSfero2")}</li>
          <li>{t("samushaoSfero3")}</li>
        </ul>
      </section>

      <section className="questions-section">
        <h1>{t("samushaoGamocdileba")}</h1>
        <br></br>
        <p>{t("samushaoGamocdileba1")}</p>
        <p>{t("samushaoGamocdileba2")}</p>
        <p>{t("samushaoGamocdileba3")}</p>
        <p>{t("samushaoGamocdileba4")}</p>
        <p>{t("samushaoGamocdileba5")}</p>
        <p>{t("samushaoGamocdileba6")}</p>
        <p>{t("samushaoGamocdileba7")}</p>
      </section>
    </div>
  );
}
