<template>
  <div>
<!--    <div v-for="user in users" v-bind:key="user.id">{{ user.title }}</div>-->
<!--    <div v-for="user in $store.state.news" v-bind:key="user.id">{{ user.title }}</div>-->
    <p  v-for="item in $store.state.news" v-bind:key="item.id">
      <a v-bind:href="item.url">
        {{ item.title }}
      </a>
      <small>
        {{ item.time_ago }} by
<!--        <router-link v-bind:to="'/user/' + item.user">{{ item.user }}</router-link>-->
        <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
      </small>
    </p>
  </div>
</template>

<script>
// import axios from 'axios';
// import { fetchNewsList } from '../api/index'
export default {
  // data(){
  //   return {
  //     users: []
  //   }
  // },
  // 컴포넌트가 생성되자마자 실행되는 로직
  created() {
    this.$store.dispatch('FETCH_NEWS');

    // // 1
    // fetchNewsList()
    // .then(response => {
    //   console.log('호출후',this);
    //   // 2
    //   this.users = response.data;
    // })
    // .catch(function(error) {
    //   console.log(error);
    // })
  }
}
</script>

<style scoped>

</style>