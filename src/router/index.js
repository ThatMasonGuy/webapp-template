import { isAuthenticated } from '../Auth';
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import CreateAccount from '../views/CreateAccount.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { requiresAuth: true, title: 'Home', requiresHeader: true }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: { requiresAuth: false, title: 'Login', requiresHeader: false }
    },
    {
        path: '/create-account',
        name: 'CreateAccount',
        component: CreateAccount,
        meta: { requiresAuth: false, title: 'Create Account', requiresHeader: false }
    },
    {
        path: '/about',
        name: 'About',
        component: About,
        meta: { requiresAuth: true, title: 'About', requiresHeader: true }
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
        meta: { requiresAuth: true, title: 'Contact', requiresHeader: true }
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const isAuthenticated = localStorage.getItem('user');

    if (requiresAuth && !isAuthenticated) {
        next('/login');
    } else if (to.path === '/login' && isAuthenticated) {
        next('/');
    } else {
        next();
    }
});

export default router;
