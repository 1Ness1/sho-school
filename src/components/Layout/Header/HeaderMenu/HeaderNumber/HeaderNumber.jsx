import React from "react";

import "./HeaderNumber";

function HeaderNumber({ headerData }) {
  const telNumber = headerData.numbers;
  const telLink = headerData.numbers.tel.replace(/[- ()]/g, "");
  return (
    <a className="header__num" href={"tel:" + telLink}>
      {telNumber.tel}
    </a>
  );
}

export default HeaderNumber;
