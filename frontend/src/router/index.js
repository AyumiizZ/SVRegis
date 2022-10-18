import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";
import SignInView from "@/views/SignInView.vue";
import ComingSoonView from "@/views/ComingSoonView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/signin",
    name: "signin",
    component: SignInView,
  },
  {
    path: "/applicant",
    name: "applicant",
    component: ComingSoonView,
  },
  {
    path: "/responsible",
    name: "responsible",
    component: ComingSoonView,
  },
  {
    path: "/approver",
    name: "approver",
    component: ComingSoonView,
  },
  {
    path: "/domain-regis",
    name: "domain-regis",
    component: ComingSoonView,
  },
  {
    path: "/host-req",
    name: "host-req",
    component: ComingSoonView,
  },
  {
    path: "/host-regis",
    name: "host-regis",
    component: ComingSoonView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
