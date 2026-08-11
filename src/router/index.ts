import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: HomeView,
  // },
  // {
  //   path: "/berita/:id",
  //   name: "berita",
  //   component: BeritaView,
  // },
  // {
  //   path: "/:pathMatch(.*)*",
  //   name: "not-found",
  //   component: NotFoundView,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;