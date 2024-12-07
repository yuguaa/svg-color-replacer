import Vue from 'vue';

// 定义一个模块，声明一个 Vue 组件
declare module '*.vue' {
  // 导出 Vue 组件的类型定义
  export default Vue;
}