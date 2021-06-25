import React from "react";
// import { useTranslation } from "gatsby-plugin-react-i18next";
import Layout from "../components/Layout/layout";
import BlogPagination from "../components/Pages/Blog/BlogPagination/BlogPagination";
// import useLanguage from "../Hooks/useLanguages";
// import SEO from "../components/seo";

const Blog = () => {
  // const { t } = useTranslation();
  return (
    <Layout>
      <BlogPagination />
    </Layout>
  );
};

export default Blog;
