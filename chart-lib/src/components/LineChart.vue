<template>
  <canvas ref="lineChart" id="lineChart"></canvas>
</template>

<script>
import Chart from "chart.js";

export default {
  mounted() {
    // var ctx = document.getElementById('lineChart').getContext('2d');
    var ctx = this.$refs.lineChart.getContext('2d');
    var chart = new Chart(ctx, {  // eslint-disable-line no-unused-vars
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'Aprill', 'May', 'June', 'July'],
        datasets: [{
          label: "My First dataset",
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [0, 10, 5, 2, 20, 30, 45],
        }]
      },
      options: {}
    });
  }
}
</script>

<style scoped>

</style>