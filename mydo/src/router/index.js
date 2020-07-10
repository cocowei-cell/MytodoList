import Vue from 'vue';
import Router from 'vue-router';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({ showSpinner: false });
const index = () => import('@/views/index');
const profile = () => import('@/views/profile');
Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile,
    },
  ],

})
// 全局导航守卫添加Nprogress效果
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
router.afterEach(() => {
  NProgress.done()
})

export default router;
