<template>
  <div class="menu-container">
    <RouterLink
      v-for="item in icons"
      :exact="item.name === 'Blog' ? false : true"
      :key="item.name"
      class="item"
      :to="{ name: item.name }"
    >
      <i class="iconfont" :class="item.icon"></i>
      <span>{{ item.text }}</span>
    </RouterLink>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        {
          name: "Home",
          icon: "icon-shouye",
          text: "首页",
          // exact: true, // 激活状态是否要精确匹配
        },
        {
          name: "Blog",
          icon: "icon-wodewenzhang",
          text: "文章",
          // exact: false,
        },
        {
          name: "About",
          icon: "icon-guanyuwomen",
          text: "关于我",
          // exact: true,
        },
        {
          name: "Project",
          icon: "icon-yuandaimaxiayoudaima",
          text: "项目&效果",
          // exact: true,
        },
        {
          name: "Message",
          icon: "icon-liuyanban-05",
          text: "留言板",
          // exact: true,
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/iconfont.less";
.menu-container {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  .item {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    padding: 10px 0 10px 30px;
    color: rgba(255, 255, 255, 0.5);
    font-size: 14px;
    .iconfont {
      font-size: 20px;
      margin-right: 10px;
    }
    span {
      font-weight: bold;
    }
    &:hover {
      transition: 0.5s;
      color: rgba(255, 255, 255);
    }
    &.router-link-active {
      background-color: rgba(255, 255, 255, 0.4);
      color: rgba(255, 255, 255, 0.8);
    }
  }
}
</style>