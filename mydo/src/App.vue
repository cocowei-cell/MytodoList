<template>
  <div id="app">
    <headers />
    <keep-alive include="index">
      <router-view></router-view>
    </keep-alive>
    <tab-bar />
  </div>
</template>

<script>
import TabBar from "@/components/TabBar";
import Headers from "@/components/Headers";
export default {
  name: "App",
  components: {
    TabBar,
    Headers
  },
  async created() {
    var local = localStorage.getItem("tokenasdzxcvf");
    if (local) {
      this.$store.commit("modifyState", true);
      this.$store.commit("token", local);
    } else {
      this.$store.commit("modifyState", false);
    }
    this.$store.dispatch("getCount");
  }
};
</script>

<style>
body {
  min-width: 315px;
}
h1,
h2,
p {
  margin: 0;
  padding: 0;
}
* {
  box-sizing: border-box;
}
body {
  background-color: #f7f8fa;
}
</style>
