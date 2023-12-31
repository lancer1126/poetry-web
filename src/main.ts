import { createApp } from "vue";
import App from "./App.vue";

import "./style/css/global.css";
import router from "./router";

const app = createApp(App);
app.use(router).mount("#app");
