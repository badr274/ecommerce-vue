import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Pinia configuration
import { createPinia } from "pinia";

// Swiper configuration
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Emitter configuration
import mitt from "mitt";
const emitter = mitt();

// Vuetify configuration
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App)
  .use(router)
  .provide("emitter", emitter)
  .use(createPinia())
  .use(vuetify)
  .mount("#app");
