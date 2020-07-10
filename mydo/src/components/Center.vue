<template>
  <div>
    <div class="center">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Center"
};
</script>
<style scoped>
.center {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 65%;
}
</style>