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
          <div className="blog__item-container">
            <div className="blog__number">
              <span>{item.id <= 9 ? "0" + item.id + "." : item.id + "."}</span>
            </div>
            <div className="blog__container">
              <div className="blog__filter-list">
                <Link
                  className="blog__filter-item blog__filter--title"
                  to={"/blog/"}
                >
                  {langToggle(item.filter_all_ua, item.filter_all_ru)}
                </Link>
                <Link
                  className="blog__filter-item blog__filter--subtitle"
                  to={"/blog/"}
                >
                  {langToggle(item.type_ua, item.type_ru)}
                </Link>
              </div>
              <Link className="blog__link" to={"/blog/"}>
                <span className="blog__title">
                  {langToggle(item.title_ua, item.title_ru)}
                </span>
              </Link>
              <div className="blog__subtitle">
                <span className="blog__time">
                  {langToggle(item.time_ua, item.time_ru)}
                </span>
                <span className="blog__slash">{" / "}</span>
                <span className="blog__date">{item.date}</span>
              </div>
            </div>
            <Link className="blog__link" to={"/blog/"}>
              <CircleArrow />
            </Link>
          </div>
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
          breakLabel={"..."}
          breakClassName={"pagination__break"}
          breakLinkClassName={"pagination__break-link"}
          onPageChange={changePage}
          containerClassName={"pagination"}
          pageClassName={"pagination__item"}
          pageLinkClassName={"pagination__link"}
          activeClassName={"pagination__item--active"}
          activeLinkClassName={"pagination__link--active"}
          previousClassName={"pagination__previous"}
          nextClassName={"pagination__next"}
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
        />
      </div>
    </section>
  );
};

// BlogPagination.propTypes = {};

export default BlogPagination;
