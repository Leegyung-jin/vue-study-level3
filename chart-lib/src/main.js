import Vue from 'vue'
import App from './App.vue'
import ChartPlugint from "./plugins/ChartPlugin";

Vue.config.productionTip = false

// install();
Vue.use(ChartPlugint);

new Vue({
  render: h => h(App),
}).$mount('#app')
