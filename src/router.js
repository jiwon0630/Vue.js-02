// Vue.js 2 설정
// import Vue from "vue";
// import VueRouter from "vue-router";
// import ErrorPage from "./views/ErrorPage.vue";
// import Home from "./views/Home.vue";

// Vue.use(VueRouter); // vue 에서 vue router 를 사용하기 위해 알려줘야합니다.

// const router = new VueRouter({
//     mode: "history", // browser history mode 를 사용합니다.
//     routes: [
//         { path: "/", component:Home },
//         { path: "*", component: ErrorPage }
//     ] // path 별 component 를 추가합니다.
// });

// export default router;

// Vue.js 3 설정
import { createRouter, createWebHistory } from 'vue-router';
import ErrorPage from "./views/ErrorPage.vue";
import Home from "./views/Home.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'ErrorPage',
    component: ErrorPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;