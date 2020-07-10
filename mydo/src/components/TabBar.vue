<template>
  <div>
    <van-tabbar route class="TabBar">
      <van-tabbar-item replace to="/index" icon="home-o">任务</van-tabbar-item>
      <van-tabbar-item replace to="/profile" icon="user-o"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>
<style scoped>
.TabBar {
  box-shadow: -1px 0px 1px #000;
}
</style>