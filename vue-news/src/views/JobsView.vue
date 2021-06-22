<template>
  <div>
    <list-item></list-item>
<!--    <ul class="jobs-list">-->
<!--      <li v-for="job in this.$store.state.jobs" v-bind:key="job.id" class="post">-->
<!--        <div class="points">-->
<!--          ▶-->
<!--        </div>-->
<!--        <div>-->
<!--          <p class="jobs-title">-->
<!--            <a v-bind:href="job.url">-->
<!--              {{ job.title }}-->
<!--            </a>-->
<!--          </p>-->
<!--          <small class="link-text">-->
<!--            {{ job.time_ago }} by-->
<!--            <a :href="job.url">-->
<!--              {{ job.domain }}-->
<!--            </a>-->
<!--          </small>-->
<!--        </div>-->
<!--      </li>-->
<!--    </ul>-->
  </div>
</template>

<script>
// import { fetchJobsList } from "../api/index";
import ListItem from "../components/ListItem";

export default {
  components: {
    ListItem
  },
  created() {
    this.$store.dispatch('FETCH_JOBS');
  }
}
</script>