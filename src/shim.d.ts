/*
 * @Date: 2020-12-29 21:30:30
 * @LastEditors: 曾令宇
 * @LastEditTime: 2020-12-29 22:13:50
 * @FilePath: \vite-demo\src\shim.d.ts
 */
declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}
declare module '*.module.less' {
  const classes: { [key: string]: string };
  export default classes;
}