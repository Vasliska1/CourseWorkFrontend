import Vue from 'vue'
import Router from 'vue-router'
import Auth from "../components/Auth/Auth";
import Catalog from "@/components/Main/Catalog";
import Basket from "@/components/Main/Basket";
import Orders from "../components/User/Orders";
import UserInfo from "../components/User/UserInfo";
import Register from "@/components/Auth/Register";
import Register_city from "@/components/Auth/Register_city";
import Register_district from "@/components/Auth/Register_district";
import Register_end from "@/components/Auth/Register_end";

Vue.use(Router);
let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/auth',
            name: 'auth',
            component: Auth,
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
        },
        {
            path: '/register_city',
            name: 'register_city',
            component: Register_city,
        },
        {
            path: '/register_district',
            name: 'register_district',
            component: Register_district,
        },
        {
            path: '/register_end',
            name: 'register_end',
            component: Register_end,
        },
        {
            path: '/catalog',
            name: 'catalog',
            component: Catalog,

        },
        {
            path: '/basket',
            name: 'basket',
            component: Basket,

        },
        {
            path: '/orders',
            name: 'orders',
            component: Orders,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/user',
            name: 'user',
            component: UserInfo,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '*',
            redirect: '/auth'
        },
    ]

});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!localStorage.getItem('auth')) {
            next({
                path: '/'
            })
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;