import React from "react";
// import PropTypes from 'prop-types';

// ? &#183; точка в центре
const TapeLine = () => {
  return (
    <section className="tape">
      <div className="tape__line tape__line--stroke">
        <span className="tape__text tape__text--stroke">
          працюємо з мозком - а не з книжками &#183; працюємо з мозком - а не з
          книжками
        </span>
      </div>
      <div className="tape__line tape__line--fill">
        <span className="tape__text tape__text--fill">
          працюємо з мозком - а не з книжками &#183; працюємо з мозком - а не з
          книжками
        </span>
      </div>
    </section>
  );
};

// TapeLine.propTypes = {};

export default TapeLine;
