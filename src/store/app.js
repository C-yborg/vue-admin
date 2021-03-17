import { Login } from '@/api/login';

const app = {
    state: {
        isCollapse: JSON.parse(sessionStorage.getItem('isCollapse')) || false, //控制左侧导航伸缩
    },
    getters: {
    },
    mutations: {
        SET_COLLAPSE(state) {
            state.isCollapse = !state.isCollapse;
            //存储在sessrionStorage中
            sessionStorage.setItem('isCollapse', JSON.stringify(state.isCollapse))
        },
    },
    actions: {
        login(content, requestData) {
            return new Promise((resolve, reject) => {
                Login(requestData).then(response => {
                    resolve(response) //返回数据
                }).catch(error => {
                    reject(error)
                })
            })
        }
    },
}

export default app;