/*
 * @Date: 2020-12-29 21:30:30
 * @LastEditors: 曾令宇
 * @LastEditTime: 2020-12-30 17:28:50
 * @FilePath: \vue-next-demo\src\shim.d.ts
 */
declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}
// declare module '*.module.less' {
//   const classes: { [key: string]: string };
//   export default classes;
// }

declare module '*.module.less' {
  const content: any;
  export default content;
}
