<template>
  <div>
    <ul class="ask-list">
      <li v-for="item in $store.state.ask" v-bind:key="item.id" class="post">
        <div class="points">
          {{ item.points }}
        </div>
        <div>
          <p class="ask-title">
            <router-link v-bind:to="`item/${item.id}`">
              {{ item.title }}
            </router-link>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            <router-link v-bind:to="`user/${item.user}`">
              {{ item.user }}
            </router-link>
          </small>
        </div>
      </li>
    </ul>

<!--    <p v-for="item in $store.state.ask" v-bind:key="item.id">-->
<!--      <router-link v-bind:to="`item/${item.id}`">-->
<!--        {{ item.title }}-->
<!--      </router-link>-->
<!--      <small>{{ item.time_ago }} by {{ item.user }}</small>-->
<!--    </p>-->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    // #3
    ...mapGetters({
      askItems: 'fetchedAsk'
    }),

    // #2
    // ...mapState({
    //   fetchedAsk: state => state.ask
    // })

    // #1
    // ask() {
    //   return this.$store.state.ask;
    // }
  },
  created() {
    // var vm = this;
    // fetchAskList()
    // .then(function(response) {
    //   vm.ask = response.data;
    // })
    // .catch(function(error) {
    //   console.log(error)
    // })

    this.$store.dispatch('FETCH_ASK');
  }
}
</script>

<style scoped>
.ask-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;  /* 가로에서 중앙정렬 */
  color: #42b883;
}
.ask-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>