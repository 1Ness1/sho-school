import React from "react";

import Layout from "../components/Layout/layout";

import useLanguage from "../Hooks/useLanguages";

import Lessons from "../components/UI/Lessons/Lessons";
import TapeLine from "../components/UI/TapeLine/TapeLine";
import FreeLesson from "../components/UI/FreeLesson/FreeLesson";

import { dataTapeLine } from "../db/dataTapeLine";
// import { dataImages } from "../db/dataImages";
import Modal from "../components/UI/Modal/Modal";
import MainTitle from "../components/UI/MainTitle/MainTitle";
import HomeAbout from "../components/Pages/Home/HomeAbout/HomeAbout";
import HomeBenefits from "../components/Pages/Home/HomeBenefits/HomeBenefits";

import { useTranslation } from "gatsby-plugin-react-i18next";
import { graphql } from "gatsby";
// import SEO from "../components/seo";
import Video from "../components/UI/Video/Video";
import "../styles/style.sass";

const IndexPage = () => {
  const tapeLineData = dataTapeLine;
  const { t } = useTranslation();
  const query = graphql`
    query($language: String!) {
      locales: allLocale(filter: { language: { eq: $language } }) {
        edges {
          node {
            ns
            data
            language
          }
        }
      }
    }
  `;
  const [modalFree, setModalFree] = React.useState(false);
  const [modalOrder, setModalOrder] = React.useState(false);

  const showFreeModal = () => {
    setModalFree(!modalFree);
  };

  const showModalOrder = () => {
    setModalOrder(!modalOrder);
  };
  return (
    <>
      <Layout>
        {/* <SEO title={t("Голована", "Главная")} /> */}
        <MainTitle
          sectionName={"home"}
          titleFirst={useLanguage("Онлайн школа", "Онлайн школа")}
          titleSecond={useLanguage("Іноземних", "Иностранных")}
          titleThird={useLanguage("Мов", "Языков")}
          titleArrow={useLanguage("Почати навчання", "Начать обучение")}
          showFreeModal={showFreeModal}
        />
        <TapeLine
          text={useLanguage(
            tapeLineData.homePage.title_ua,
            tapeLineData.homePage.title_ru
          )}
        />
        <Lessons />
        <Video />
        <HomeAbout showFreeModal={showFreeModal} />
        <TapeLine
          text={useLanguage(
            tapeLineData.result.title_ua,
            tapeLineData.result.title_ru
          )}
        />
        <HomeBenefits />
        <FreeLesson
          container={"free-lesson__container"}
          title={useLanguage(
            "Спробуй вивчати англійську - це просто \n та цікаво!",
            "Спробуй вивчати англійську - це просто \n та цікаво!"
          )}
          showFreeModal={showFreeModal}
        />
        <Modal
          modalFree={modalFree}
          modalOrder={modalOrder}
          showFreeModal={showFreeModal}
          showModalOrder={showModalOrder}
        />
      </Layout>
    </>
  );
};

export default IndexPage;
