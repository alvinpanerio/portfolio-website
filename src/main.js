import "./index.css";

import { createApp } from "vue";
import App from "./App.vue";

import Unicon from "vue-unicons";
import { uniGithub, uniFileAlt } from "vue-unicons/dist/icons";

import { MotionPlugin } from "@vueuse/motion";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Unicon.add([uniGithub, uniFileAlt]);

library.add(fas, fab);

createApp(App)
  .use(Unicon)
  .use(MotionPlugin)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
