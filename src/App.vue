<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <div class="left">
          <SiteAside />
        </div>
      </template>
      <template #default>
        <RouterView />
      </template>
    </Layout>
    <Totop />
  </div>
</template>

<script>
import Layout from "./components/Layout";
import SiteAside from "./components/SiteAside";
import Totop from "./components/Totop";
export default {
  components: {
    Layout,
    SiteAside,
    Totop,
  },
};
</script>

<style lang="less" scoped>
.app-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .left {
    height: 100%;
  }
}
</style>