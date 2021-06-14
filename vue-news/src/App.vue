<template>
  <div id="app">
    <!-- 1 - Strongly Recommended -->
    <!-- <ToolBar></ToolBar>-->
    <!-- 2 - Essential -->
    <tool-bar></tool-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar";

export default {
  components: {
    ToolBar,
  },
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
</style>
