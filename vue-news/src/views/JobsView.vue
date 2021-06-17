<template>
  <div>
<!--    <div v-for="job in jobs" v-bind:key="job.id">{{ job.title }}</div>-->
<!--    <div v-for="job in this.$store.state.jobs" v-bind:key="job.id">-->
<!--      {{ job.title }}-->
<!--    </div>-->
    <p v-for="job in this.$store.state.jobs" v-bind:key="job.id">
      <a v-bind:href="job.url">
        {{ job.title }}
      </a>
      <small>
        {{ job.time_ago }}, {{ job.domain }}
      </small>
    </p>
  </div>
</template>

<script>
// import { fetchJobsList } from "../api/index";

export default {
  // data() {
  //   return {
  //     jobs: []
  //   }
  // },
  created() {
    // fetchJobsList()
    // .then(response => this.jobs = response.data)
    // .catch(error => console.log(error));

    this.$store.dispatch('FETCH_JOBS');
  }
}
</script>

<style scoped>

</style>