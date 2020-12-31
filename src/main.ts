/*
 * @Date: 2020-12-29 21:17:32
 * @LastEditors: 曾令宇
 * @LastEditTime: 2020-12-31 10:09:46
 * @FilePath: \vue-next-demo\src\main.ts
 */
import { createApp } from 'vue';
import App from './App';
import './index.less';
import router from './router';
import store from './store';
const app = createApp(App);

app.use(router);

app.use(store);

app.mount('#app');
