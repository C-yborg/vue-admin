import router from './index';
import { getToken, removeToken, removeUsername } from '@/utils/app';
import store from '../store/index';
//白名单  非法进入其他路由时自动跳转会登录页
const whiteRouter = ['/login'];

//导航守卫
router.beforeEach((to, from, next) => {
    if (getToken()) {
        if (to.path === '/login') {
            removeToken(); //如果从其他面切回登录页 则清除token
            removeUsername();
            store.commit('app/SET_TOKEN', '');
            store.commit('app/SET_USERNAME', '');
            next();
        } else {
            next();
        }
    } else {
        if (whiteRouter.indexOf(to.path) !== -1) {
            next();
        } else {
            next('/login'); //如果next中有参数，则再次调用beforeEach
        }
    }
});
