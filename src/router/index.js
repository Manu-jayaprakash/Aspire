import { createRouter, createWebHashHistory } from "vue-router";
import CardPage from "../views/CardPage.vue";

const routes = [
  {
    path: "/",
    name: "CardPage",
    component: CardPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
