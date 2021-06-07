import React from "react";

import "./HeaderCurrency";

function HeaderCurrency({ headerDb }) {
  return (
    <div className="header__currency">
      <button className="header__currency-button">
        {headerDb.currency.currency_hrn}
      </button>
      <button className="header__currency-button">
        {headerDb.currency.currency_rub}
      </button>
      <button className="header__currency-button">
        {headerDb.currency.currency_usd}
      </button>
      <button className=" header__currency-button">
        {headerDb.currency.currency_eur}
      </button>
    </div>
  );
}

export default HeaderCurrency;
