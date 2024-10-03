import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({	
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        // 404 not found rule
        {
            path: "/:pathMatch(.*)*",
            name: "not-found",
            component: NotFound
        }
    ]
});

export { router };