<template>
  <div class="layout-container">
    <div class="left">
      <slot name="left"> </slot>
    </div>
    <div class="main">
      <slot> </slot>
    </div>
    <div class="right">
      <slot name="right"> </slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style  lang="less" scoped>
.layout-container {
  display: flex;
  height: 100%;
  width: 100%;
  .left,
  .right {
    flex: 0 0 auto; // 不伸缩，不缩小，初始值
    overflow: hidden;
  }
  .main {
    flex: 1 1 auto; // 伸缩，缩小，初始值
    overflow: hidden;
  }
}
</style>