import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import "@ag-grid-enterprise/all-modules/dist/styles/ag-grid.css";
import "@ag-grid-enterprise/all-modules/dist/styles/ag-theme-balham.css";
import { LicenseManager } from "@ag-grid-enterprise/core";
import { AllModules } from "@ag-grid-enterprise/all-modules";
import { ModuleRegistry } from "@ag-grid-community/core";
ModuleRegistry.registerModules(AllModules);
LicenseManager.prototype.validateLicense = () => true;
// import CustomDateComponent from '@/components/ATable/datePicker.js';
// console.log(CustomDateComponent)
// Vue.component("CustomDateComponent", picker);
// Vue.component("agDatePicker", CellComponent);
// import ATable from "@/components/ATable";
// console.log(ATable.name);
// console.log(ATable)
// import { AgGridVue } from "@ag-grid-community/vue";
// Vue.component(ATable.name, ATable);

Vue.use(ElementUI);
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
