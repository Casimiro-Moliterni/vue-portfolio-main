import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import NotFound from './pages/NotFound.vue';
import ProjectDetails from './pages/ProjectDetails.vue';

const router = createRouter({	
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path:'/projects/:slug',
            name:'single-project',
            component:ProjectDetails
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