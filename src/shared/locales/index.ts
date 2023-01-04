import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./en";
import vi from "./vi";

export const resources = {
  en,
  vi,
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: "en",
    ns: Object.keys(en),
    resources,
    interpolation: {
      format: function (value, format, lng) {
        if (value instanceof Date) {
          const date = value as Date;
          const d = date.getDate();
          const m = date.getMonth() + 1;
          const y = date.getFullYear();
          const monthName = date.toLocaleString(lng, { month: "short" });
          if (format === "m/d/y") {
            return `${m}/${d}/${y}`;
          } else if (format === "d/m/y") {
            return `${d}/${m}/${y}`;
          } else if (format === "dd/LLL/yyyy") {
            return `${d}/${monthName}/${y}`;
          } else {
            return `${d}/${m}/${y}`;
          }
        }
        return value;
      },
    },
  });

export default i18n;
