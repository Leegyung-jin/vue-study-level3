import Chart from 'chart.js';

export default {
    install(Vue) {  // eslint-disable-line no-unused-vars
        Vue.prototype.$_Chart = Chart;

        // BarChart.Vue
        // this.$_Chart

        // LineChart.vue
        // this.$_Chart
    }
}