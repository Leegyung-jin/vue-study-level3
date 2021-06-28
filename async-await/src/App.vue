<template>
  <div>
    <button @click="loginUser1">login</button>
    <h1>List</h1>
    <ul>
      <p v-for="(item, index) in items" :key="index">{{ item }}</p>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import handleException from './utils/handler';

export default {
  data() {
    return {
      items: [],
    }
  },
  methods: {
    loginUser() {
      axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(response => {
          if (response.data.id === 1) {
            console.log('1- 사용자가 인증되었습니다.');
            axios.get('https://jsonplaceholder.typicode.com/todos')
              .then(response => {
                this.items = response.data;
              });
          }
        })
        .catch(error => console.log(error));
    },
    async loginUser1() {
      try {
        var response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
        if (response.data.id === 1) {
          console.log('2- 사용자가 인증되었습니다.')
          var list = await axios.get('https://jsonplaceholder.typicode.com/todos');
          this.items = list.data;
        }
      } catch (error) {
        handleException(error);
        console.log(error);
      }
    }
  }
}
</script>