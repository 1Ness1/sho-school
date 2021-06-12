import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Layout from "../components/Layout/layout";
import SEO from "../components/seo";
import "../styles/style.sass";

import HomeTitle from "../components/Pages/Home/HomeTitle/HomeTitle";
import Lessons from "../components/UI/Lessons/Lessons";
// import Messanger from "../components/UI/Messanger/Messanger";

import TapeLine from "../components/UI/TapeLine/TapeLine";
// import CyrcleArrow from "../components/UI/Circles/CyrcleArrow/CyrcleArrow";
const IndexPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Layout>
        <SEO title={t("Голована", "Главная")} />
        <HomeTitle />
        <TapeLine />
        <Lessons />
      </Layout>
    </>
  );
};

export default IndexPage;
