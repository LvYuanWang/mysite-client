<template>
  <div class="blogDetail-container">
    <h1>{{ blog.title }}</h1>
    <div class="date">
      <span>日期: {{ blog.createDate }}</span>
      <span>浏览: {{ blog.scanNumber }}</span>
      <a href="#messageArea-container">评论: {{ blog.commentNumber }}</a>
      <RouterLink
        :to="{
          name: 'CategoryBlog',
          params: {
            categoryId: blog.category.id,
          },
        }"
        >{{ blog.category.name }}</RouterLink
      >
    </div>
    <div v-html="blog.htmlContent" class="markdown-body"></div>
  </div>
</template>

<script>
import "highlight.js/styles/github.css";
export default {
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/markdown.css";
@import "~@/style/var.less";
.date {
  font-size: 12px;
  color: @gray;
  span,
  a {
    margin-right: 10px;
  }
}
.markdown-body {
  margin: 1.2em 0;
}
</style>