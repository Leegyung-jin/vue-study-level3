<template>
  <div>
<!--    <div v-for="item in ask" v-bind:key="item.id">{{ item.title }}</div>-->
<!--    <div v-for="item in askItems" v-bind:key="item.id">{{ item.title }}</div>-->
    <p  v-for="item in $store.state.ask" v-bind:key="item.id">
      <a v-bind:href="item.url">
        {{ item.title }}
      </a>
      <small>
        {{ item.time_ago }} by {{ item.user }}
      </small>
    </p>
  </div>
</template>

<script>
// import { fetchAskList } from "../api/index";
// import { mapState } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  // data() {
  //   return {
  //     ask: []
  //   }
  // },
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

</style>