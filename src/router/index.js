import Vue from 'vue'
import VueRouter from 'vue-router'
// 加载条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(VueRouter);


const routes = [
    {
        path: '/',
        name: 'Index',
        component: () => import( '../views/Index.vue'),
        children: [
            {
                path: '/section',
                name: 'Section',
                component: () => import('@/views/Section.vue'),
                meta: {
                    title: "场景",
                }
            }
        ]
    }
    , {
        path: '/login',
        name: 'Login',
        component: () => import( '../views/Login.vue')
    }
    ,{
        path: '/setting',
        name: 'Setting',
        component: () => import( '../views/Setting.vue')
    },{
        path: '/save',
        name: 'Save',
        component: () => import( '../views/Save.vue')
    },
    {
        path: '*',
        name: '404',
        component: () => import( '../views/404.vue')
    },
]

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
};

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

// 路由守卫
router.beforeEach((to, from, next) => {
    NProgress.start()
    const isLogin = localStorage.token ? true : false;
    if (to.path == '/login' || to.path == '/register') {//'login'和'register'相当于是路由白名单
        next();
    } else {
        //如果token存在，就正常跳转，如果不存在，则说明未登陆，则跳转到'login'
        // isLogin ? next() : next("/login");
        next();
    }
});

router.afterEach(() => {
    NProgress.done()
})

export default router
