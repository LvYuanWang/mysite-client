<template>
  <div class="test-container">
    <Avatar
      url="https://tse3-mm.cn.bing.net/th/id/OIP-C.dkoI3uicTfwRSf7g1CAHNQHaFj?w=228&h=180&c=7&r=0&o=5&pid=1.7"
      :size="200"
    />
    <Avatar
      url="https://tse2-mm.cn.bing.net/th/id/OIP-C.CC7FEpE0svWOW_mwCFrINgHaFW?w=239&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
      :size="200"
    />
  </div>
</template>

<script>
import Avatar from "./";
export default {
  components: {
    Avatar,
  },
};
</script>

<style scoped>
.test-container {
  display: flex;
  justify-content: space-around;
  margin: 50px 0;
}
</style>