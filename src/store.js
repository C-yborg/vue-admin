import Vue from "vue";
import Vuex from "vuex";
import { Login } from '@/api/login'

Vue.use(Vuex);

export default new Vuex.Store({
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
  modules: {}
});
