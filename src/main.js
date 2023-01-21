import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";

import HomeComponent from "./components/HomeComponent.vue";
import WelcomeComponent from "./components/WelcomeComponent.vue";

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const routes = [
  {
    path: "/",
    component: WelcomeComponent
  },
  {
    path: "/home", 
    component: HomeComponent
  }
];

// router instance setup
const router = createRouter({ 
  history: createWebHistory(), // uses the WebHistory API in the browser (in order to go to previous routes)
  routes
});

const Vue = createApp(App);

Vue.use(router);
Vue.mount("#app");