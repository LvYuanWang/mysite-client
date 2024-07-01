<template>
  <div @click="handleClick" v-show="isShow" class="toTop-container">Top</div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
  created() {
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  destoryed() {
    this.$bus.$off("mainScroll", this.handleScroll);
  },
  methods: {
    handleScroll(dom) {
      if (!dom) {
        this.isShow = false;
        return;
      }
      this.isShow = dom.scrollTop >= 1000;
    },
    handleClick() {
      this.$bus.$emit("setMainScroll", 0);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.toTop-container {
  width: 50px;
  height: 50px;
  background-color: @primary;
  border-radius: 50%;
  position: fixed;
  right: 50px;
  bottom: 50px;
  line-height: 50px;
  text-align: center;
  z-index: 99;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  user-select: none;
}
</style>