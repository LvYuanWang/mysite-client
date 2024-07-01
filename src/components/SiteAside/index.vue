<template>
  <div class="siteaside-container" v-loading="isLoading">
    <template v-if="datas">
      <Avatar :url="datas.avatar" :size="150" />
      <h1 class="title">{{ datas.siteTitle }}</h1>
      <Menu />
    </template>
    <Contact />
    <p class="footer" v-if="datas">{{ datas.icp }}</p>
  </div>
</template>

<script>
import Avatar from "../Avatar";
import Menu from "./Menu";
import Contact from "./Contact";
import { mapState } from "vuex";
export default {
  data() {
    return {
      datas: null,
      isLoading: false,
    };
  },
  components: {
    Avatar,
    Menu,
    Contact,
  },
  computed: mapState("setting", ["data"]),
  mounted() {
    this.isLoading = true;
    setTimeout(() => {
      const dataArr = this.data;
      this.datas = dataArr;
      this.isLoading = false;
    }, 2000);
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.siteaside-container {
  position: relative;
  height: 100%;
  width: 230px;
  display: inline-block;
  background-color: #000;
}
.menu-container {
  margin-bottom: 20px;
}
.avatar-container {
  margin: 10px 40px;
}
.footer {
  color: #cccccc79;
  text-align: center;
  font-size: 12px;
}
.title {
  color: #fff;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  user-select: none;
}
</style>