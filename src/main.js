import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "/Users/supanutmaiyos/Documents/GitHub/pii/build/css/variables.css";
import "./assets/tailwind.css";

const app = createApp(App);

app.use(router);

app.mount("#app");