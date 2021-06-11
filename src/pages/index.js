import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Layout from "../components/Layout/layout";
import SEO from "../components/seo";
import "../styles/style.sass";

import HomeTitle from "../components/Pages/Home/HomeTitle/HomeTitle";
// import Messanger from "../components/UI/Messanger/Messanger";

// import CyrcleArrow from "../components/UI/Circles/CyrcleArrow/CyrcleArrow";
const IndexPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Layout>
        <SEO title={t("Голована", "Главная")} />
        <div className="home__wrapper">
          <HomeTitle />
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;
