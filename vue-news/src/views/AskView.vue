<template>
  <div>
<!--    <ul class="ask-list">-->
<!--      <li v-for="item in $store.state.ask" v-bind:key="item.id" class="post">-->
<!--        <div class="points">-->
<!--          {{ item.points }}-->
<!--        </div>-->
<!--        <div>-->
<!--          <p class="ask-title">-->
<!--            <router-link v-bind:to="`item/${item.id}`">-->
<!--              {{ item.title }}-->
<!--            </router-link>-->
<!--          </p>-->
<!--          <small class="link-text">-->
<!--            {{ item.time_ago }} by-->
<!--            <router-link v-bind:to="`user/${item.user}`">-->
<!--              {{ item.user }}-->
<!--            </router-link>-->
<!--          </small>-->
<!--        </div>-->
<!--      </li>-->
<!--    </ul>-->
    <list-item></list-item>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex';
import ListItem from "../components/ListItem";

export default {
  created() {
    this.$store.dispatch('FETCH_ASK');
  },
  components: {
    ListItem
  }
}
</script>