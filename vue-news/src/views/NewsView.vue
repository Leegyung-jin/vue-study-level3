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
    console.log('호출전',this);

    fetchNewsList()
    .then(response => {
      console.log('호출후',this);
      this.users = response.data;
    })
    .catch(function(error) {
      console.log(error);
    })
  }
}
</script>

<style scoped>

</style>