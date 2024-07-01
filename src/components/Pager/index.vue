<template>
  <div v-if="pagerNumber > 1" class="pager-container">
    <a @click="clickPage(1)" :class="{ disabled: current === 1 }">|&lt;&lt;</a>
    <a @click="clickPage(current - 1)" :class="{ disabled: current === 1 }"
      >&lt;&lt;</a
    >
    <a
      v-for="(n, i) in pagerArr"
      @click="clickPage(n)"
      :class="{ active: current === n }"
      :key="i"
      >{{ n }}</a
    >
    <a
      @click="clickPage(current + 1)"
      :class="{ disabled: current === pagerNumber }"
      >&gt;&gt;</a
    >
    <a
      @click="clickPage(pagerNumber)"
      :class="{ disabled: current === pagerNumber }"
      >&gt;&gt;|</a
    >
  </div>
</template>

<script>
export default {
  props: {
    // 当前页码
    current: {
      type: Number,
      default: 1,
    },
    // 总数据量
    total: {
      type: Number,
      default: 0,
    },
    // 页容量
    limit: {
      type: Number,
      default: 10,
    },
    // 可见页码数
    visibleNumber: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    // 总页数
    pagerNumber() {
      return Math.ceil(this.total / this.limit);
    },
    // 最小页码
    visibleMin() {
      let min = this.current - Math.floor(this.visibleNumber / 2);
      if (min < 1) {
        min = 1;
      }
      return min;
    },
    // 最大页码
    visibleMax() {
      let max = this.visibleMin + this.visibleNumber - 1;
      if (max > this.pagerNumber) {
        max = this.pagerNumber;
      }
      return max;
    },
    // 页码数组
    pagerArr() {
      let pagArr = [];
      for (let i = this.visibleMin; i <= this.visibleMax; i++) {
        pagArr.push(i);
      }
      return pagArr;
    },
  },
  methods: {
    // 点击页码
    clickPage(newPage) {
      if (newPage < 1) {
        newPage = 1;
      }
      if (newPage > this.pagerNumber) {
        newPage = this.pagerNumber;
      }
      if (newPage === this.current) {
        return;
      }
      // 抛出事件将新页码传递给父组件
      this.$emit("changeNumber", newPage);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.pager-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  cursor: pointer;
  & > a {
    color: @primary;
    margin: 0 7px;
    user-select: none;
    &.disabled {
      color: @gray;
      cursor: not-allowed;
    }
    &.active {
      color: @dark;
      font-weight: bold;
      cursor: auto;
    }
  }
}
</style>