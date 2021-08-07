import React from "react";
import TapeLine from "../components/UI/TapeLine/TapeLine";
import Layout from "../components/Layout/layout";
import MainTitle from "../components/UI/MainTitle/MainTitle";
import useLanguage from "../Hooks/useLanguages";
import { dataTapeLine } from "../db/dataTapeLine";
import FreeLesson from "../components/UI/FreeLesson/FreeLesson";
import ServicesCards from "../components/Pages/Services/ServicesCards/ServicesCards";
import ServicesAccordion from "../components/Pages/Services/ServicesAccordion/ServicesAccordion";
import Crumbs from "../components/UI/Crumbs/Crumbs";
import { dataCrumbs } from "../db/dataCrumbs";
import Modal from "../components/UI/Modal/Modal";
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
  const [modalFree, setModalFree] = React.useState(false);
  const [modalOrder, setModalOrder] = React.useState(false);

  const showFreeModal = () => {
    setModalFree(!modalFree);
  };

  const showModalOrder = () => {
    setModalOrder(!modalOrder);
  };
  const crumbs = dataCrumbs.services;
  return (
    <Layout>
      <MainTitle
        sectionName={"home"}
        titleFirst={useLanguage("онлайн уроки", "онлайн уроки")}
        titleSecond={useLanguage("англійської", "английского")}
        titleThird={useLanguage("Мови", "Языка")}
        titleArrow={useLanguage("Перейти до тарифів", "Перейти к тарифам")}
        showFreeModal={showFreeModal}
      />
      <TapeLine
        text={useLanguage(
          dataTapeLine.services.title_ua,
          dataTapeLine.services.title_ru
        )}
      />
      <ServicesCards showModalOrder={showModalOrder} />
      {/* slider */}
      {/* гармошка */}
      <ServicesAccordion />

      <FreeLesson
        container={"free-lesson__services-container"}
        title={useLanguage(
          "Сумніваєшся? \n Спробуй пробний урок! Тобі сподобається!",
          "Сомневаешься? \n Попробуй пробный урок! Тебе понравится!"
        )}
        showFreeModal={showFreeModal}
      />
      <Crumbs crumbs={crumbs} />
      {/* pagination */}
      <Modal
        modalFree={modalFree}
        modalOrder={modalOrder}
        showFreeModal={showFreeModal}
        showModalOrder={showModalOrder}
      />
    </Layout>
  );
};

export default ServicesPage;
