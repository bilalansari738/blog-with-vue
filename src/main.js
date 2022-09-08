import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vue2Editor from "vue2-editor";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import 'firebase/auth';
import firebase from 'firebase/app'


Vue.use(Vue2Editor);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false;


let app;
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
})