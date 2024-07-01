<template>
  <div class="test-container">
    <Layout>
      <div class="main">主区域，宽度占满剩余空间，溢出隐藏</div>
      <template #right>
        <div class="right">右边栏区域,宽度适应内容,溢出隐藏</div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./";
export default {
  components: {
    Layout,
  },
};
</script>

<style scoped>
.test-container {
  width: 1000px;
  height: 600px;
  outline: 2px solid;
  margin: 0 auto;
}
.left {
  width: 200px;
  height: 100%;
  background-color: #f00;
}
.main {
  width: 100%;
  height: 100%;
  background-color: #0f0;
}
.right {
  width: 150px;
  height: 100%;
  background-color: #00f;
}
</style>