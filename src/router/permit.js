import router from './index';
import { getToken } from '@/utils/app';

//白名单  非法进入其他路由时自动跳转会登录页
const whiteRouter = ['/login'];

//导航守卫
router.beforeEach((to, from, next) => {
    // console.log(to);
    // console.log(from);
    if (getToken()) {
        next();
        console.log('存在');
    } else {
        if (whiteRouter.indexOf(to.path) !== -1) {
            next();
        } else {
            next('/login'); //如果next中有参数，则再次调用beforeEach
        }
    }
});
