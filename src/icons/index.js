import Vue from 'vue';
import SvgIcon from './SvgIcon';
//注册全局组件
Vue.component('svg-icon', SvgIcon)

/**
 * 参数1读取svg目录，
 * 参数2是否遍历子集目录
 * 参数3定义遍历文件规则
 */
const req = require.context('./svg', false, /\.svg$/);
const requireAll = (requireContext) => {
    console.log(requireContext.keys());
    return requireContext.keys().map(requireContext)
}

requireAll(req)