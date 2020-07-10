<template>
  <div>
    <van-loading :type="type" :color="color" />
  </div>
</template>

<script>
export default {
  name: "loading",
  props: {
    color: {
      type: String,
      default: "#c9c9c9"
    },
    type: {
      type: String,
      default: "circular"
    }
  }
};
</script>
<style scoped>
</style>