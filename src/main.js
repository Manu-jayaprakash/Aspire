import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import VueSplide from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/splide.min.css";

createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus)
  .use(VueSplide)
  .mount("#app");
