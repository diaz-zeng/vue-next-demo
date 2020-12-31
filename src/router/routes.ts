/*
 * @Date: 2020-12-30 16:00:48
 * @LastEditors: 曾令宇
 * @LastEditTime: 2020-12-30 17:30:52
 * @FilePath: \vue-next-demo\src\router\routes.ts
 */
import { RouteRecordRaw } from 'vue-router';
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../components/HelloWorld'),
  },
  {
    path: '/about',
    component: () => import('../components/About'),
  },
];

export default routes;
