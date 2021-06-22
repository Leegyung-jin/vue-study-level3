<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex';
import ListItem from "../components/ListItem";
import bus from "../utils/bus";

export default {
  created() {
    bus.$emit('start:spinner');
    setTimeout(() => {
      this.$store.dispatch('FETCH_ASK')
        .then(() => {
          console.log('fetched');
          bus.$emit('end:spinner');
        })
        .catch((error) => {
          console.log(error)
        });
    }, 3000);
  },
  components: {
    ListItem
  }
}
</script>