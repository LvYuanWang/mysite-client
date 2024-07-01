<template>
  <ul class="rightList-container">
    <li v-for="(item, i) in list" :key="i">
      <span @click="itemClick(item)" :class="{ active: item.isSelect }">{{
        item.name
      }}</span>
      <span
        class="aside"
        @click="itemClick(item)"
        :class="{ active: item.isSelect }"
        >{{ item.aside }}</span
      >
      <RightList :list="item.children" @select="itemClick" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "RightList",
  props: {
    // list层级结构: [{name: 'xxx', isSelect: true, children: [{name: 'yyy', isSelect: false, children: [{name: 'zzz', isSelect: false}]}]}, {name: 'xxx', isSelect: false}]
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    itemClick(item) {
      if (!item.isSelect) {
        this.$emit("select", item);
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.rightList-container {
  list-style: none;
  padding: 0;
  margin-left: 1em;
  user-select: none;
  li {
    min-height: 40px;
    line-height: 40px;
    cursor: pointer;
    font-size: 14px;
    .active {
      color: @warn;
      font-weight: bold;
    }
  }
}
.aside {
  font-size: 12px;
  margin-left: 1em;
  color: @gray;
}
</style>