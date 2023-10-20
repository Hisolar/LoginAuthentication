import "./assets/main.css";
import axios from "axios";
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
axios.defaults.headers["Accept"] = "application/json";

axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    if (error.response.status == 401) {
      router.push({ name: "login" });
    }
    return Promise.reject(error);
  }
);

axios.defaults.headers.common = {
  Authorization: `Bearer ${localStorage.getItem("user_token")}`,
};

app.use(createPinia());
app.use(router);

app.mount("#app");
