import Vue from 'vue';
import SvgIcon from './SvgIcon';
//注册全局组件
Vue.component('svg-icon', SvgIcon);

/**
 * 参数1读取svg目录，
 * 参数2是否遍历子集目录
 * 参数3定义遍历文件规则
 */
const req = require.context('./svg', false, /\.svg$/); // 获取当前svg目录所有为.svg结尾的文件
const requireAll = requireContext => {
    // console.log(requireContext);
    // console.log(requireContext.keys());
    return requireContext.keys().map(requireContext); // 解析获取的.svg文件的文件名称，并返回
};
requireAll(req);
