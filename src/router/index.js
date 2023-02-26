import { createRouter, createWebHistory } from "vue-router";
import HomeView from "/src/views/HomeView.vue";
import UserView from "/src/views/UserView.vue";
import MerchantView from "/src/views/MerchantView.vue";

const routes = [
    {
        path: "/",
        name: "HomeView",
        component: HomeView,
    },
    {
        path: "/user",
        name: "UserView",
        component: UserView,
    },
    {
        path: "/merchant",
        name: "MerchantView",
        component: MerchantView,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;