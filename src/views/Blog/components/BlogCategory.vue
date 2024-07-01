<template>
  <div class="blogCategory-container" v-loading="isLoading">
    <h2>文章分类</h2>
    <RightList :list="list" @select="selectClick" />
  </div>
</template>

<script>
import RightList from "./RightList";
import fetchData from "@/mixins/fetchData.js";
import { getBlogType } from "@/api/blog.js";
export default {
  mixins: [fetchData([])],
  components: {
    RightList,
  },
  computed: {
    categoryId() {
      return this.$route.params.categoryId || -1;
    },
    limit() {
      return +this.$route.query.limit || 10;
    },
    list() {
      const totalArticle = this.data.reduce((a, b) => a + b.articleCount, 0);
      const result = [
        { id: -1, name: "全部", articleCount: totalArticle },
        ...this.data,
      ];
      return result.map((item) => ({
        ...item,
        isSelect: item.id === this.categoryId,
        aside: `${item.articleCount}篇`,
      }));
    },
  },
  methods: {
    async fetchData() {
      const resp = await getBlogType();
      return resp;
    },
    selectClick(item) {
      item.isSelect = true;
      const query = {
        page: 1,
        limit: this.limit,
      };
      if (item.id === -1) {
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        this.$router.push({
          name: "CategoryBlog",
          query,
          params: {
            categoryId: item.id,
          },
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.blogCategory-container {
  width: 220px;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  overflow-y: scroll;
  position: relative;
  h2 {
    font-size: 1em;
    margin: 0;
    letter-spacing: 2px;
    font-weight: bold;
  }
}
</style>