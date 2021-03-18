import { Login } from '@/api/login';

const app = {
    namespaced: true,
    state: {
        isCollapse: JSON.parse(sessionStorage.getItem('isCollapse')) || false, //控制左侧导航伸缩
        to_ken: '',
        username: '',
    },
    getters: {},
    mutations: {
        SET_COLLAPSE(state) {
            state.isCollapse = !state.isCollapse;
            //存储在sessrionStorage中
            sessionStorage.setItem(
                'isCollapse',
                JSON.stringify(state.isCollapse)
            );
        },
        SET_TOKEN(state, value) {
            state.to_ken = value;
        },
        SET_USERNAME(state, value) {
            state.username = value;
        },
    },
    actions: {
        login(content, requestData) {
            return new Promise((resolve, reject) => {
                Login(requestData)
                    .then(response => {
                        console.log(response);
                        let data = response.data.data;
                        resolve(response); //返回数据
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },
    },
};

export default app;
