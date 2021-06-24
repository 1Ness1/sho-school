import React from "react";
// import { useTranslation } from "gatsby-plugin-react-i18next";
import Layout from "../components/Layout/layout";
import CircleArrow from "../components/UI/Circles/CyrcleArrow/CyrcleArrow";
import CircleBackground from "../components/UI/Circles/СircleBackground/CircleBackground";
import useLanguage from "../Hooks/useLanguages";
// import SEO from "../components/seo";

const NotFoundPage = () => {
  // const { t } = useTranslation();
  return (
    <Layout>
      {/* <SEO title={t("404: Not found")} /> */}
      <div className="wrapper">
        <div className="not-found__container">
          <h1 className="not-found__title">404</h1>
          <p className="not-found__description">
            oops... сторінку не знайдено!
          </p>
          <CircleArrow
            titleCyrcle={useLanguage(
              "на головну сторінку",
              "на главную страницу"
            )}
          />
          <CircleBackground />
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
