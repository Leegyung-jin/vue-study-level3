<template>
  <div>
    <ul class="jobs-list">
      <li v-for="job in this.$store.state.jobs" v-bind:key="job.id" class="post">
        <div class="points">
          ▶
        </div>
        <div>
          <p class="jobs-title">
            <a v-bind:href="job.url">
              {{ job.title }}
            </a>
          </p>
          <small class="link-text">
            {{ job.time_ago }} by
            <a :href="job.url">
              {{ job.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul>
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
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;  /* 가로에서 중앙정렬 */
  color: #42b883;
}
.jobs-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.jobs-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>