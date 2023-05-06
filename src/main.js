import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import App from "./App.vue";
import router from "./router";

// 全局样式
import "@/style/global.scss";

const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(pinia);

app.use(router);

app.mount("#app");

// // 检测到更新提醒
// let pwaMessage = null;
// navigator.serviceWorker.addEventListener("onupdatefound", () => {
//   console.info("发现站点更新，正在下载新版本");
//   pwaMessage = $message.loading("发现站点更新，正在下载新版本", {
//     closable: true,
//     duration: 0,
//   });
// });
// // 更新完成提醒
// navigator.serviceWorker.addEventListener("controllerchange", () => {
//   console.info("站点已更新，刷新后生效");
//   if (pwaMessage) pwaMessage?.destroy();
//   $message.info("站点已更新，刷新后生效", {
//     closable: true,
//     duration: 0,
//   });
// });
