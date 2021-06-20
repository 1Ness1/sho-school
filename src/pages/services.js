import React from "react";
import TapeLine from "../components/UI/TapeLine/TapeLine";
import Layout from "../components/Layout/layout";
import MainTitle from "../components/UI/MainTitle/MainTitle";
import useLanguage from "../Hooks/useLanguages";
import { dataTapeLine } from "../db/dataTapeLine";
import FreeLesson from "../components/UI/FreeLesson/FreeLesson";
import ServicesCards from "../components/Pages/Services/ServicesCards/ServicesCards";
// import { useTranslation } from "gatsby-plugin-react-i18next";
// import { graphql } from "gatsby";
const ServicesPage = () => {
  // const { t } = useTranslation();
  // const query = graphql`
  //   query($language: String!) {
  //     locales: allLocale(filter: { language: { eq: $language } }) {
  //       edges {
  //         node {
  //           ns
  //           data
  //           language
  //         }
  //       }
  //     }
  //   }
  // `;
  return (
    <Layout>
      <MainTitle
        sectionName={"home"}
        titleFirst={useLanguage("онлайн уроки", "онлайн уроки")}
        titleSecond={useLanguage("англійської", "английского")}
        titleThird={useLanguage("Мови", "Языка")}
        titleArrow={useLanguage("Перейти до тарифів", "Перейти к тарифам")}
      />
      <TapeLine
        text={useLanguage(
          dataTapeLine.services.title_ua,
          dataTapeLine.services.title_ru
        )}
      />
      <ServicesCards />
      {/* slider */}
      {/* гармошка */}
      <FreeLesson
        container={"free-lesson__services-container"}
        title={useLanguage(
          "Сумніваєшся? \n Спробуй пробний урок! Тобі сподобається!",
          "Сомневаешься? \n Попробуй пробный урок! Тебе понравится!"
        )}
      />
      {/* pagination */}
    </Layout>
  );
};

export default ServicesPage;
