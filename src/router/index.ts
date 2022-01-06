import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, position) {
    return { top: 0 };
  },
  routes: [
    {
      path: "/",
      name: "TheSite",
      component: () => import("../views/TheUser.vue"),

    },
  ],
});

export default router;
