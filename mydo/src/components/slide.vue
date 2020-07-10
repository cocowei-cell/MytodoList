<template>
  <div>
    <van-notice-bar left-icon="volume-o" :text="count" mode="closeable" />
  </div>
</template>

<script>
export default {
  name: "slide",
  computed: {
    count() {
      return `您还有${this.$store.state.noSuccess}个任务未完成`;
    }
  }
};
</script>
<style scoped>
</style>