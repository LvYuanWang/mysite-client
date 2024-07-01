<template>
  <Layout>
    <div ref="mainContainer" class="main-container" v-loading="isLoading">
      <BlogDetail :blog="data" v-if="data" />
      <BlogComment v-if="!isLoading" />
    </div>
    <template #right>
      <div class="right-container" v-loading="isLoading">
        <BlogTOC :toc="data.toc" v-if="data" />
      </div>
    </template>
  </Layout>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";
import { getBlogsById } from "@/api/blog.js";
import Layout from "@/components/Layout";
import BlogDetail from "./components/BlogDetail.vue";
import BlogTOC from "./components/BlogTOC.vue";
import BlogComment from "./components/BlogComment.vue";
import mainScroll from "@/mixins/mainScroll.js";
import { titleController } from "@/utils";
export default {
  mixins: [fetchData(null), mainScroll("mainContainer")],
  components: {
    BlogDetail,
    BlogTOC,
    Layout,
    BlogComment,
  },
  methods: {
    async fetchData() {
      let resp = await getBlogsById(this.$route.params.id);
      if (!resp) {
        this.$router.push("/404");
        return;
      }
      titleController.setControllTitle(resp.title);
      return resp;
    },
  },
  updated() {
    const hash = location.hash;
    location.hash = "";
    setTimeout(() => {
      location.hash = hash;
    }, 50);
  },
};
</script>

<style lang="less" scoped>
.main-container {
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  /* 滚动条整体 */
  &::-webkit-scrollbar {
    width: 6px;
  }
  // 平滑滚动
  scroll-behavior: smooth;
  /* 滚动条滑块 */
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: rgba(0, 0, 0, 0.5);
  }
}
.right-container {
  width: 220px;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  overflow-y: scroll;
  position: relative;
}
</style>