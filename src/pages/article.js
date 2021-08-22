import React from "react";
import Layout from "../components/Layout/layout";

import useLanguage from "../Hooks/useLanguages";

import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { graphql } from "gatsby";
import ArticleTitle from "../components/Pages/Article/ArticleTitle/ArticleTitle";

// ? Стрелки пагинации
import PaginationArrow from "../components/UI/PaginationArrow/PaginationArrow";
// ? Поделиться
import Share from "../components/UI/Share/Share";
// ? Хлебные крошки
import Crumbs from "../components/UI/Crumbs/Crumbs";
import { dataCrumbs } from "../db/dataCrumbs";

const Article = () => {
  const crumbs = dataCrumbs.article;
  // ! путь к объекту в котором массив крошек
  const { t } = useTranslation();
  const query = graphql`
    query($language: String!) {
      locales: allLocale(filter: { language: { eq: $language } }) {
        edges {
          node {
            ns
            data
            language
          }
        }
      }
    }
  `;
  return (
    <Layout>
      <article className="article">
        <ArticleTitle
          title={"7 ідей ЯК ВЧИТИ АНГЛІЙСЬКу в НОВОРІЧНІ СВЯТА"}
          subTitle={"1 хв 40 сек. читати"}
          date={" 27.03.2020"}
        >
          {/* LINKs from gatsby */}
          <Link className="article__link" to="/blog/">
            всі статті
          </Link>
          <Link className="article__link" to="/blog/">
            грамматика для всіх
          </Link>
        </ArticleTitle>
        <StaticImage
          src="../images/article_image-1.jpg"
          alt="photo"
          placeholder="blurred"
          layout="fullWidth"
        />
        <div className="markdown-component article-markdown">
          <div className="article__wrapper">
            <div>
              <p>
                Якщо вам хтось скаже що в свята не хочеться вчить, а не вірте!
                Вони просто не вчилися з нами, адже у нас англійська просто таки
                хочеться вчить і вдень і вночі.
              </p>
              <p>
                У такий період англійська ніби натякає що "Ей, якщо хочеш
                веселощів - без мене ніяк". Адже всі фільми, пісні і розваги
                краще в оригіналі, з західної душею.
              </p>
              <p>
                І якщо ви вже твердо вирішили зробити свої свята чарівними, і
                непомітно повчати англійська ця стаття допоможе вам з ідеями.
              </p>
            </div>
            <div>
              <h3>01. Подивіться Різдвяний фільм з субтитрами</h3>
              <p>
                Це ідеальний варіант для всієї родини, або для посиденьок з
                друзями. Ті, хто починає вивчати, можуть читати, а то хто знає
                англійську добре, потреніт на слух. І все у виграші!
              </p>
              <h4>Наші фаворити:</h4>
              <ul>
                <li>Чотири Різдва</li>
                <li>Один Дома</li>
                <li>Любите Куперов </li>
                <li>Реальне Кохання</li>
                <li>Грінч</li>
              </ul>
            </div>
            <div>
              <h3>02. Поставте з дітьми сценку</h3>
              <p>
                А чим їх ще занять? Коли ваші діти, і діти гостей збираються
                разом, підкинути їм ідейка поставить казку, або ситуацію нібито
                "Санта Клаус вибирає нові сани", і тоді їх вже не зупинити. А
                вам розваги та спокій на час їх репетиції.
              </p>
            </div>
            <div>
              <h3>03. Пограйте в Alias</h3>
              <p>
                Це коли вам потрібно пояснити якесь поняття, використовуючи інші
                слова (наприклад, у вас картка зі словом "помідор", і ви
                говорите гравцям "це такий червоний плід, Який додають в салат
                Цезар). Це так смішно англійською мовою, адже потрібно робити
                все швидко, і вже точно хтось із компанії буде тупить (але точно
                не ви).
              </p>
            </div>
            <StaticImage
              src="../images/article_image-2.jpg"
              alt="photo"
              placeholder="blurred"
              layout="fullWidth"
            />
            <div>
              <h3>
                04. Напишіть список бажань / список подяк / список досягнень
                англійською
              </h3>
              <p>
                Говорити про підсумки року - це дуже цікаво і корисно, і зараз
                стало дуже популярним. На цьому завданні досить початкового
                рівня, і бонусом можна повчати нові слова (раптом, ми хочете
                нову овощетерку).
              </p>
            </div>
            <div>
              <h3>05. Підписуйте постік чи сторіс англійською</h3>
              <p>
                Наприклад, можна копіювати терміни з Різдвяних пісень, нібито
                Let It Snow. Виглядає цікавіше, і як раз буде вам привід
                перевести терміни з пісень.
              </p>
            </div>
            <div>
              <h3>06. Підпишіть листівки англійською мовою</h3>
              <p>
                I wish you health, wealth, big house, many kids ... - це те що
                зрозуміють ваші друзі, і то що додасть ще один + в вашу карму
                інгліш.
              </p>
            </div>
            <div>
              <h3>07. Напишіть листа Санте</h3>
              <p>
                Ну, або ваша дитина, а ви допоможете. Це настільки мотивує, коли
                мама теж знає англійську, і може допомогти з цим. Мало того що
                душевно проведете час, так ще і скільки нового можна подивитися
                в перекладач, і написати в Письмецо.
              </p>
              <p>А уявляєте, як ви себе похваліть вже від однієї ідеї?</p>
              <p>
                А якщо кілька? Наскільки пропаде ваш страх говорить англійською?
              </p>
              <p>
                Ну а раптом вам набридло святкувати, і душа просить повчитися -
                давайте до нас на безкоштовне заняття.
              </p>
              <p>
                <b>Merry Christmas and a Happy New Year</b>
              </p>
            </div>
            <StaticImage
              src="../images/article_image-3.jpg"
              alt="photo"
              placeholder="blurred"
              layout="fullWidth"
            />
          </div>
        </div>
        <Share />
        <PaginationArrow
          textLeft={useLanguage("попередня стаття", "предыдущая статья")}
          textRight={useLanguage("наступна стаття", "следущая статья")}
        />
        {/* рекомендованные статьи с padding: 220px 0 */}
        <Crumbs crumbs={crumbs} />
      </article>
    </Layout>
  );
};

// blog-article.propTypes = {};

export default Article;
