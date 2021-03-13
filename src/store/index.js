import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isCollapse: sessionStorage.getItem('isCollapse') || false, //控制左侧导航伸缩
  },
  getters: {
  },
  mutations: {
    SET_COLLAPSE(state) {
      state.isCollapse = !state.isCollapse;
      //存储在sessrionStorage中
      sessionStorage.setItem('isCollapse',JSON.stringify(state.isCollapse))
    },
  },
  actions: {},
  modules: {}
});
