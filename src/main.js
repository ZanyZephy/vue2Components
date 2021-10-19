import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import { ModuleRegistry, AllModules } from "@ag-grid-enterprise/all-modules";
ModuleRegistry.registerModules(AllModules);
import { LicenseManager } from "@ag-grid-enterprise/core";
LicenseManager.prototype.validateLicense = function () {
  return true;
};

Vue.use(ElementUI);
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
