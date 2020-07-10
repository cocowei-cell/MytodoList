<template>
  <div>
    <van-popup v-model="show">内容</van-popup>
  </div>
</template>

<script>
export default {
  name: "bounce",
  props: {
    show: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    showPopup() {
      this.show = true;
    }
  }
};
</script>
<style scoped>
</style>