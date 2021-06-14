import React from "react";

import Layout from "../components/Layout/layout";

import useLanguage from "../Hooks/useLanguages";

import Lessons from "../components/UI/Lessons/Lessons";
import TapeLine from "../components/UI/TapeLine/TapeLine";

import { dataTapeLine } from "../db/dataTapeLine";

import HomeTitle from "../components/Pages/Home/HomeTitle/HomeTitle";
import HomeAbout from "../components/Pages/Home/HomeAbout/HomeAbout";
import HomeBenefits from "../components/Pages/Home/HomeBenefits/HomeBenefits";

// import { useTranslation } from "gatsby-plugin-react-i18next";
// import { graphql } from "gatsby";
// import SEO from "../components/seo";

import "../styles/style.sass";

const IndexPage = () => {
  const tapeLineData = dataTapeLine;
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
    <>
      <Layout>
        {/* <SEO title={t("Голована", "Главная")} /> */}
        <HomeTitle />
        <TapeLine
          text={useLanguage(
            tapeLineData.homePage.title_ua,
            tapeLineData.homePage.title_ru
          )}
        />
        <Lessons />
        {/* <Video image={image} /> */}
        <HomeAbout />
        <TapeLine
          text={useLanguage(
            tapeLineData.result.title_ua,
            tapeLineData.result.title_ru
          )}
        />
        <HomeBenefits />
      </Layout>
    </>
  );
};

export default IndexPage;
