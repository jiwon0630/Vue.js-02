// Vue.js 2 설정
// import Vue from "vue";
// import App from "./App.vue";
// import router from "./router";

// Vue.config.productionTip = false;

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount("#app");

// Vue.js 3 설정
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router) // Vue Router 등록

app.mount('#app')
