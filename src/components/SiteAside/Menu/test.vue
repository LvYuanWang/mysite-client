<template>
  <div class="test-container">
    <Menu />
  </div>
</template>

<script>
import Menu from "./";
export default {
  components: { Menu },
};
</script>

<style scoped>
.test-container {
  width: 400px;
  height: 500px;
  border: 1px solid #ccc;
}
</style>