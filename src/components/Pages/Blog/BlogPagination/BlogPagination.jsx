import React from "react";
import { dataBlog } from "../../../../db/dataBlog";
import ReactPaginate from "react-paginate";
import CircleArrow from "../../../UI/Circles/CyrcleArrow/CyrcleArrow";
import ArrowLeft from "../../../../svg/arrow-left.svg";
import ArrowRight from "../../../../svg/arrow-right.svg";
import useLanguage from "../../../../Hooks/useLanguages";
import { Link } from "gatsby-plugin-react-i18next";
// import PropTypes from 'prop-types';

const BlogPagination = () => {
  const langToggle = useLanguage;
  const blogList = dataBlog.blog;

  const [articles] = React.useState(blogList.slice(0, 1000));
  const [pageNumber, setPageNumber] = React.useState(0);

  const articlesPerPage = 8;
  const pagesVisited = pageNumber * articlesPerPage;

  const displayArticles = articles
    .slice(pagesVisited, pagesVisited + articlesPerPage)
    .map((item) => {
      return (
        <li className="blog__item" key={item.id}>
          <Link className="blog__link" to={"/blog/"}>
            <div className="blog__number">
              <span>{item.id <= 9 ? "0" + item.id + "." : item.id + "."}</span>
            </div>
            <div className="blog__container">
              <div className="blog__filter-list">
                <span className="blog__filter-item blog__filter--title">
                  {langToggle(item.filter_all_ua, item.filter_all_ru)}
                </span>
                <span className="blog__filter-item blog__filter--subtitle">
                  {langToggle(item.type_ua, item.type_ru)}
                </span>
              </div>
              <span className="blog__title">
                {langToggle(item.title_ua, item.title_ru)}
              </span>
              <div className="blog__subtitle">
                <span className="blog__time">
                  {langToggle(item.time_ua, item.time_ru)}
                </span>
                <span className="blog__slash">{" / "}</span>
                <span className="blog__date">{item.date}</span>
              </div>
            </div>
            <CircleArrow />
          </Link>
        </li>
      );
    });
  const pageCount = Math.ceil(blogList.length / articlesPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <section>
      <div className="wrapper">
        <ul className="blog__list">{displayArticles}</ul>
        <ReactPaginate
          previousLabel={<ArrowLeft />}
          nextLabel={<ArrowRight />}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"pagination"}
          pageClassName={"pagination__item"}
          pageLinkClassName={"pagination__link"}
          activeClassName={"pagination__item--active"}
          activeLinkClassName={"pagination__link--active"}
          previousClassName={"pagination__previous"}
          nextClassName={"pagination__next"}
        />
      </div>
    </section>
  );
};

// BlogPagination.propTypes = {};

export default BlogPagination;
