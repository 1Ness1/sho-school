import React from "react";

import "./HeaderNumber";

function HeaderNumber({ headerDb }) {
  const telLink = headerDb.numbers.tel.replace(/[- ()]/g, "");
  return (
    <a className="header__num" href={"tel:" + telLink}>
      {headerDb.numbers.tel}
    </a>
  );
}

export default HeaderNumber;
