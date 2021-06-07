import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Layout from '../components/Layout/layout';
import SEO from '../components/seo';
import '../styles/style.sass';

const IndexPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Layout>
        <SEO title={t('Home')} />
      </Layout>
    </>
  );
};

export default IndexPage;
