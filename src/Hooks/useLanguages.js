import { useContext } from "react";
import { I18nContext } from "gatsby-plugin-react-i18next";

const useLanguages = (ukr, rus) => {
  const {
    i18n: { language },
  } = useContext(I18nContext);

  if (language === "ua") {
    return ukr;
  } else {
    return rus;
  }
};

export default useLanguages;
