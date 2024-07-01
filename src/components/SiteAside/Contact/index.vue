<template>
  <div class="contact-container">
    <template v-if="datas">
      <a target="_blank" :href="datas.github" class="item">
        <i class="iconfont icon-github"></i>
        <span>{{ datas.githubName }}</span>
      </a>
      <a :href="`mailto: ${datas.mail}`" class="item">
        <i class="iconfont icon-youxiang1"></i>
        <span>{{ datas.mail }}</span>
      </a>
      <a
        :href="`tencent://message/?Menu=yes&uin=${datas.qq}&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45`"
        class="item"
      >
        <div class="active">
          <img :src="datas.qqQrCode" alt="" />
        </div>
        <i class="iconfont icon-QQ-circle-fill"></i>
        <span>{{ datas.qq }}</span>
      </a>
      <a class="item">
        <div class="active">
          <img :src="datas.weixinQrCode" alt="" />
        </div>
        <i class="iconfont icon-weixin-copy"></i>
        <span>{{ datas.weixin }}</span>
      </a>
    </template>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      datas: null,
    };
  },
  computed: mapState("setting", ["data"]),
  mounted() {
    setTimeout(() => {
      const dataArr = this.data;
      this.datas = dataArr;
    }, 2000);
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/iconfont.less";
@import "~@/style/global.less";
.contact-container {
  position: relative;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 0;
  font-size: 13px;
  .item {
    display: flex;
    align-items: center;
    padding: 10px 0;
    position: relative;
    color: @lightWords;
    user-select: none;
    cursor: pointer;
    .iconfont {
      font-size: 20px;
      margin: 0 10px;
    }
    .active {
      width: 90px;
      height: 90px;
      background: #fff;
      background-size: cover;
      position: absolute;
      top: -105px;
      left: 10px;
      z-index: 9;
      padding: 10px;
      border-radius: 5px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      &::after {
        content: "";
        position: absolute;
        border-width: 5px;
        border-style: solid;
        border-color: transparent transparent #fff transparent;
        bottom: -9px;
        left: 50%;
        transform: translateX(-50%) rotate(180deg);
      }
      transition: 0.5s;
      transform-origin: center bottom;
      transform: scaleY(0);
    }
    &:hover {
      color: @primary;
      .active {
        transform: scaleY(1);
      }
    }
  }
}
</style>