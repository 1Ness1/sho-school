import React from "react";
// import PropTypes from 'prop-types';
import useLanguage from "../Hooks/useLanguages";

import Layout from "../components/Layout/layout";
// ! UI
import MainTitle from "../components/UI/MainTitle/MainTitle";
import Video from "../components/UI/Video/Video";
import Quote from "../components/UI/Quote/Quote";
import BlockTitle from "../components/UI/BlockTitle/BlockTitle";
import Lessons from "../components/UI/Lessons/Lessons";
import FreeLesson from "../components/UI/FreeLesson/FreeLesson";
// ! Pages component
import AboutMarkdown from "../components/Pages/About/AboutMarkdown/AboutMarkdown";
import AboutTeacher from "../components/Pages/About/AboutTeacher/AboutTeacher";
import AboutStory from "../components/Pages/About/AboutStory/AboutStory";
const About = () => {
  return (
    <Layout>
      <MainTitle
        sectionName={"about__title"}
        titleFirst={useLanguage("Онлайн школа", "Онлайн школа")}
        titleSecond={useLanguage("Іноземних", "Иностранных")}
        titleThird={useLanguage("Мов", "Языков")}
        titleArrow={useLanguage("Почати навчання", "Начать обучение")}
      >
        <span className="about__subtitle">
          {useLanguage("про школу та підхід", "Про школу и подход")}
        </span>
      </MainTitle>
      <Video />
      <AboutMarkdown
        sectionClass={"about__markdown"}
        title={useLanguage(
          "Онлайн школа \n ШО? School",
          "Онлайн школа \n ШО? School"
        )}
        subTitle={useLanguage("про школу", "О школе")}
      >
        <>
          <div>
            <p>
              Онлайн навчання іноземним мовам - це відмінна можливість заощадити
              свій час і витратити його з максимальною користю.
            </p>
            <p>
              Онлайн навчання мовам дозволяє займатися там, де вам зручно. І це
              теж велика перевага. Адже часто люди дуже хочуть вивчати мови, але
              соромляться займатися в групі через нестачу знань.
            </p>
          </div>
          <div>
            <p>
              Зрозумівши логіку мови, ви зможете без проблем спілкуватися нею як
              усно, так і письмово. Ми пояснюю складне простими словами,
              Використовуючи конкретні приклади з життя.
            </p>
            <p>
              Навчання мовам онлайн в Шо?School - це в першу чергу живе
              спілкування, а не контроль ваших занять з книгами.
            </p>
          </div>
        </>
      </AboutMarkdown>
      <AboutMarkdown
        sectionClass={"about__markdown"}
        title={useLanguage(
          "підхід та Метод \n асоціацій",
          "подход и метод \n ассоциаций"
        )}
        subTitle={useLanguage("метод", "метод")}
      >
        <>
          <div>
            <p>
              Під час занять в нашій школі словниковий запас швидко розширюється
              завдяки методу асоціацій. А для закріплення вивченого і визначення
              слабких місць після кожних 9-ти занять проводиться тестування.
            </p>
            <p>
              Тому ви самі можете побачити, наскільки ефективно ваше навчання
              іноземним мовам онлайн.
            </p>
          </div>
          <div>
            <p>
              Ми працюємо по одній програмі: нуль підручників, комунікативна
              методика (ми розмовляємо на уроці), пояснюю граматику по ходу,
              буквально на пальцях.
            </p>
            <p>
              Ми любимо дітей, дружимо з ними і залучаємо їх, щоб розмовляв,
              базікали і вчили жива мова, із задоволенням. (Так, таке можливо)
            </p>
          </div>
        </>
      </AboutMarkdown>
      <Quote
        quote={useLanguage(
          "Ми закохуємо в іноземні мови, навіть якщо вас до цього лякало саме це слово",
          "Ми закохуємо в іноземні мови, навіть якщо вас до цього лякало саме це слово"
        )}
      />
      <Lessons>
        <BlockTitle
          title={useLanguage(
            "ми вчимо \n таким мовам:",
            "Мы учим \n таким языкам"
          )}
          subTitle={("навчимо", "научим")}
        />
      </Lessons>
      <AboutTeacher
        title={useLanguage("пощастило бути \n творцем", "Повезло быть творцом")}
        subTitle={useLanguage("душа школи", "душа школи")}
      />
      <Quote
        sectionClass={"Second"}
        quote={useLanguage(
          "Якщо забрати у мене інгліш - моя батарейка сяде!",
          "Якщо забрати у мене інгліш - моя батарейка сяде!"
        )}
      />
      <AboutStory />

      <FreeLesson
        container={"free-lesson__about"}
        title={useLanguage(
          "Кожен раз, коли ви \n відкладаєте пробний урок, ми сумуємо!",
          "Кожен раз, коли ви \n відкладаєте пробний урок, ми сумуємо!"
        )}
      />
    </Layout>
  );
};

// about.propTypes = {};

export default About;
