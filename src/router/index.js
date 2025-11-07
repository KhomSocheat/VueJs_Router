import { createRouter,createWebHistory } from "vue-router";
import Home from '../pages/Home.vue'
import About from "../pages/About.vue";
import Job from "../pages/Job/Job.vue";
import JobDetails from "../pages/Job/JobDetails.vue";
import NotFound from "../pages/Job/NotFound.vue";
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/job',
        name: 'Job',
        component : Job
    },
    {
        path: '/jobdetail/:id',
        name: 'JobDetails',
        component: JobDetails,  
        props: true
    },
    {
        // redirect from old route to new route
        path: '/all-jobs',
        redirect: { name: 'Job' }
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;