import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import "@ag-grid-enterprise/all-modules/dist/styles/ag-grid.css";
import "@ag-grid-enterprise/all-modules/dist/styles/ag-theme-alpine.css";
import { LicenseManager } from "@ag-grid-enterprise/core";
import { AllModules } from "@ag-grid-enterprise/all-modules";
import { ModuleRegistry } from "@ag-grid-community/core";

ModuleRegistry.registerModules(AllModules);
LicenseManager.prototype.validateLicense = () => true;
import { AgGridVue } from "@ag-grid-community/vue";
Vue.component(AgGridVue.name, AgGridVue);

Vue.use(ElementUI);
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
