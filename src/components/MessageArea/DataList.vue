<template>
  <div class="dataList-container">
    <ul class="list">
      <li v-for="item in list" :key="item.id">
        <Avatar :url="item.avatar" :size="50" />
        <div class="text">
          <div class="textTop">
            <span class="name">{{ item.nickname }}</span>
            <span class="time">{{ item.createDate }}</span>
          </div>
          <div class="comment">{{ item.content }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
export default {
  props: {
    list: {
      tyep: Array,
      default: () => [],
    },
  },
  components: {
    Avatar,
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.list {
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    user-select: none;
    display: flex;
    padding: 20px 0 30px 0;
    border-bottom: 1px solid @gray;
    .text {
      width: 100%;
      margin-left: 20px;
      .textTop {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        .name {
          font-size: 16px;
          font-weight: bold;
          color: @success;
        }
        .time {
          font-size: 13px;
          font-weight: bold;
          color: @gray;
        }
      }
    }
  }
}
</style>