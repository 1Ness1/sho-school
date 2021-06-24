import React from "react";
// import { useTranslation } from "gatsby-plugin-react-i18next";
import Layout from "../components/Layout/layout";
import TapLinkAuthor from "../components/Pages/TapLink/TapLinkAuthor/TapLinkAuthor";
import TapLinkList from "../components/Pages/TapLink/TapLinkList/TapLinkList";
// import SEO from "../components/seo";
const TapLink = () => {
  // const { t } = useTranslation();
  return (
    <Layout tapLink={"none"}>
      {/* <SEO title={t("404: Not found")} /> */}
      <h1 className="visually-hidden">Список ссылок</h1>
      <div className="wrapper">
        <TapLinkAuthor />
        <TapLinkList />
      </div>
    </Layout>
  );
};

export default TapLink;
