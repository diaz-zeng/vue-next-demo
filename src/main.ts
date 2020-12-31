/*
 * @Date: 2020-12-29 21:17:32
 * @LastEditors: 曾令宇
 * @LastEditTime: 2020-12-30 16:12:11
 * @FilePath: \vue-next-demo\src\main.ts
 */
import { createApp } from 'vue';
import App from './App';
import './index.less';
import router from './router';
const app = createApp(App);

app.use(router);

app.mount('#app');
