/*
 * @Date: 2020-12-30 16:00:54
 * @LastEditors: 曾令宇
 * @LastEditTime: 2020-12-30 16:06:30
 * @FilePath: \vue-next-demo\src\router\index.ts
 */
import { createRouter, createWebHistory, Router } from 'vue-router';
import routes from './routes';
const router: Router = createRouter({ history: createWebHistory(process.env.BASE_URL), routes });
export default router;
