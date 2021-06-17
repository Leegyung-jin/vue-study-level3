<template>
  <div>
    <ul class="news-list">
      <li v-for="item in $store.state.news" v-bind:key="item.id" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <p class="news-title">
            <a v-bind:href="item.url">
              {{ item.title }}
            </a>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            <router-link v-bind:to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
          </small>
        </div>
      </li>
    </ul>
<!--    <p  v-for="item in $store.state.news" v-bind:key="item.id">-->
<!--      <a v-bind:href="item.url">-->
<!--        {{ item.title }}-->
<!--      </a>-->
<!--      <small>-->
<!--        {{ item.time_ago }} by-->
<!--        <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>-->
<!--      </small>-->
<!--    </p>-->
  </div>
</template>

<script>
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
.news-list {
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
.news-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>