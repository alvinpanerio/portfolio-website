import "./index.css";

import { createApp } from "vue";
import App from "./App.vue";

import Unicon from "vue-unicons";
import { uniGithub, uniFileAlt } from "vue-unicons/dist/icons";

import { MotionPlugin } from "@vueuse/motion";

Unicon.add([uniGithub, uniFileAlt]);

createApp(App).use(Unicon).use(MotionPlugin).mount("#app");
