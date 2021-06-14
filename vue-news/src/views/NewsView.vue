<template>
  <div>
    <div v-for="user in users" v-bind:key="user.id">{{ user.title }}</div>
  </div>
</template>

<script>
// import axios from 'axios';
import { fetchNewsList } from '../api/index'
export default {
  data(){
    return {
      users: []
    }
  },
  // 컴포넌트가 생성되자마자 실행되는 로직
  created() {
    var vm = this;
    // axios.get('https://api.hnpwa.com/v0/news/1.json')
    fetchNewsList()
    .then(function(response) {
      console.log(response);
      vm.users = response.data;
    })
    .catch(function(error) {
      console.log(error);
    })
    // getNewsList();
  }
}
</script>

<style scoped>

</style>