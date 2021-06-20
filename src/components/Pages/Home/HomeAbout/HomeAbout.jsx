import React from "react";
import BlockTitle from "../../../UI/BlockTitle/BlockTitle";
// import PropTypes from 'prop-types';
import CyrcleHeart from "../../../UI/Circles/CyrcleHeart/CyrcleHeart";
import CyrcleArrow from "../../../UI/Circles/CyrcleArrow/CyrcleArrow";
import CircleBackground from "../../../UI/Circles/СircleBackground/CircleBackground";

const HomeAbout = () => {
  console.log(CircleBackground);
  return (
    <section className="home__about">
      <div className="wrapper">
        <div className="home__about-title">
          <BlockTitle subTitle={"про нас"} title={`про школу \n та підхід`} />
          <CyrcleHeart />
          <CircleBackground />
        </div>
        <div className="home__content markdown-components">
          <div>
            <p>
              Пояснюючи простими словами і допомагаємо понять мову. Освоюємо
              складну граматику, яка робить Вашу мова серйозніше і правильніше.
            </p>
            <p>
              Ми вчимо слова асоціаціями і використовуємо цікаві підходи і
              методики в своїх уроках.
            </p>
            <p>
              Адже коли ви заговорите англійською мовою легко, це відразу
              помітять оточуючі і запитають, хто ж Вас так навчив.
            </p>
          </div>
          <div>
            <p>
              Але щоб ви зрозуміли, звідки виникає це хибне уявлення людей,
              цуратись насолоди і вихваляти страждання, я розкрию перед вами всю
              картину і роз’ясню.
            </p>
            <p>
              Що саме говорив цей чоловік, який відкрив істину, якого я б назвав
              зодчим щасливого життя.
            </p>
          </div>
        </div>
        <div className="home__buttons">
          <CyrcleArrow titleCyrcle={"Більше про школу"} />
          <CyrcleArrow titleCyrcle={"Безкоштовне заняття"} />
        </div>
      </div>
    </section>
  );
};

// HomeAbout.propTypes = {};

export default HomeAbout;
