<template>
  <div class="test-container">
    <Contact />
  </div>
</template>

<script>
import Contact from "./";
export default {
  components: { Contact },
};
</script>

<style scoped>
.test-container {
  width: 300px;
  background: blue;
}
</style>