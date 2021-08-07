const dataNav = [
  {
    id: 1,
    title_ua: "Головна",
    title_ru: "Главная",
    link: "/",
  },
  {
    id: 2,
    type: "services",
    title_ua: "Послуги",
    title_ru: "Услуги",
    subMenu: [
      {
        id: 1,
        prefix_ua: "Онлайн уроки ",
        prefix_ru: "Онлайн уроки ",
        title_ua: "Онлайн уроки Англійської мови",
        title_ru: "Онлайн уроки Английского языка",
        link: "/english-lessons/",
      },
      {
        id: 2,
        prefix_ua: "Онлайн уроки ",
        prefix_ru: "Онлайн уроки ",
        title_ua: "Онлайн уроки Німецької мови",
        title_ru: "Онлайн уроки Немецкого языка",
        link: "/english-lessons/",
      },
      {
        id: 3,
        prefix_ua: "Онлайн уроки ",
        prefix_ru: "Онлайн уроки ",
        title_ua: "Онлайн уроки Французької мови",
        title_ru: "Онлайн уроки Французкого языка",
        link: "/english-lessons/",
      },
      {
        id: 4,
        prefix_ua: "Онлайн уроки ",
        prefix_ru: "Онлайн уроки ",
        title_ua: "Онлайн уроки Іспанської мови",
        title_ru: "Онлайн уроки Испанского языка",
        link: "/english-lessons/",
      },
    ],
  },
  {
    id: 3,
    title_ua: "Про нас",
    title_ru: "О нас",
    link: "/about/",
  },
  {
    id: 4,
    title_ua: "Блог",
    title_ru: "Блог",
    link: "/blog/",
  },
  {
    id: 5,
    type: "contacts",
    title_ua: "Контакти",
    title_ru: "Контакты",
  },
];

export default dataNav;
