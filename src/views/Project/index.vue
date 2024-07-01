<template>
  <div class="project-container" ref="projectContainer" v-loading="isLoading">
    <a
      v-for="item in data"
      :key="item.id"
      :href="item.url ? item.url : `javascript:alert('该项目无法通过外网访问')`"
      :target="item.url ? '_blank' : '_self'"
      class="project-item"
    >
      <img v-lazy="item.thumb" class="thumb" />
      <div class="info">
        <h2>
          {{ item.name }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a v-if="item.github" :href="item.github" target="_blank"
            >Github -></a
          >
        </h2>
        <p v-for="(desc, i) in item.description" :key="i">{{ desc }}</p>
      </div>
    </a>
    <Empty v-if="data.length === 0 && !isLoading" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import mainScroll from "@/mixins/mainScroll";
import Empty from "@/components/Empty";
export default {
  mixins: [mainScroll("projectContainer")],
  components: {
    Empty,
  },
  created() {
    this.$store.dispatch("project/fetchProjects");
  },
  computed: mapState("project", ["data", "isLoading"]),
};
</script>

<style lang="less" scoped>
.project-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  overflow-y: auto;
  scroll-behavior: smooth;
}
.project-item {
  transition: 0.5s;
  padding: 20px;
  display: flex;
  margin-bottom: 20px;
  &:hover {
    box-shadow: -1px 1px 5px #000;
    transform: scale(1.01) translate(3px, -3px);
    color: inherit;
  }
  .thumb {
    width: 250px;
    min-height: 150px;
    flex: 0 0 auto;
    object-fit: cover;
    border-radius: 5px;
    margin-right: 15px;
  }
  .info {
    line-height: 1.7;
    flex: 1 1 auto;
    h2 {
      margin: 0;
    }
  }
}
</style>