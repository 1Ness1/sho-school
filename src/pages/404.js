import React from "react";
// import { useTranslation } from "gatsby-plugin-react-i18next";
import Layout from "../components/Layout/layout";
// import SEO from "../components/seo";

const NotFoundPage = () => {
  // const { t } = useTranslation();
  return (
    <Layout>
      {/* <SEO title={t("404: Not found")} /> */}
      <h1>404</h1>
    </Layout>
  );
};

export default NotFoundPage;
