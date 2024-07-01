<template>
  <div class="test-container">
    <Empty :text="text" />
  </div>
</template>

<script>
import Empty from "./";
export default {
  components: {
    Empty,
  },
  data() {
    return {
      text: "无数据",
    };
  },
};
</script>

<style scoped>
.test-container {
  position: relative;
  width: 400px;
  height: 400px;
  background: red;
}
</style>