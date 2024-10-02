import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import NotFound from './pages/NotFound.vue';
import Projects from './pages/Projects.vue';

const router = createRouter({	
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/projects',
            name: 'projects',
            component: Projects
        },
        {
            path: '/skills',
            name: 'skills',
            component: Projects
        },
        {
            path: '/about',
            name: 'about',
            component: Projects
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