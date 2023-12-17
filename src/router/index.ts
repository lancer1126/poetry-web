import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

export const constantRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/home/index.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes as RouteRecordRaw[]
});

export default router;
