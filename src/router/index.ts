import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./HomeView.vue";
import DailyView from "./DailyView.vue";

const routes = [
    { path: "/", component: HomeView },
    { path: "/daily", component: DailyView },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
