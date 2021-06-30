<template>
  <div>
    <h1>Chart.js</h1>
    <bar-chart></bar-chart>
    <LineChart></LineChart>
  </div>
</template>

<script>
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";

export default {
  components: {
    BarChart,
    LineChart
  }
}
</script>

<style>
</style>
