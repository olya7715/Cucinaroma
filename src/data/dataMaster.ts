export type DataCardMaster = {
  src: string;
  name: string;
  prise: number;
  duration: number;
  linkTitle: string;
  page: "pizza_tiramisu" | "pasta_tiramisu" | "nioki_tiramisu" | "wino";
};

export const dataMaster: DataCardMaster[] = [
  {
    src: "/images/master_pizza.jpg",
    name: "Приготуємо піцу і тірамісу",
    prise: 75,
    duration: 2,
    linkTitle: "Замовити",
    page: "pizza_tiramisu",
  },
  {
    src: "/images/master_pasta.jpg",
    name: "Готуємо пасту та тірамісу",
    prise: 75,
    duration: 2,
    linkTitle: "Замовити",
    page: "pasta_tiramisu",
  },
  {
    src: "/images/master_gniochi.jpg",
    name: "Приготуємо ньокі та тірамісу",
    prise: 75,
    duration: 2,
    linkTitle: "Замовити",
    page: "nioki_tiramisu",
  },
  {
    src: "/images/master_vino.jpg",
    name: "Винна дегустація та італійські закуски",
    prise: 80,
    duration: 2,
    linkTitle: "Замовити",
    page: "wino",
  },
];
