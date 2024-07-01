<template>
  <div
    class="home-container"
    ref="container"
    @wheel="containerWheel"
    v-loading="isLoading"
  >
    <ul
      class="image-container"
      :style="{
        height: containerHt,
        top: containerTp,
      }"
      @transitionend="isWheel = false"
    >
      <li
        v-for="item in data"
        :key="item.id"
        :style="{ height: containerHeight + 'px' }"
      >
        <Carouselltem :imageData="item" />
      </li>
    </ul>
    <ul class="nav">
      <li
        v-for="(item, i) in data"
        :class="i === index ? 'active' : ''"
        :key="item.id"
        @click="handleClick(i)"
      ></li>
    </ul>
    <span v-show="index > 0" class="icon icon-up" @click="index--">
      <Icon type="arrowUp" />
    </span>
    <span
      v-show="index < data.length - 1"
      class="icon icon-down"
      @click="index++"
    >
      <Icon type="arrowDown" />
    </span>
  </div>
</template>

<script>
import Carouselltem from "./Carouselltem";
import Icon from "@/components/Icon";
import { mapState } from "vuex";
export default {
  components: {
    Carouselltem,
    Icon,
  },
  data() {
    return {
      index: 0,
      containerHeight: 0,
      isWheel: false,
    };
  },
  created() {
    this.$store.dispatch("banner/fetchBanner");
  },
  mounted() {
    this.containerResize();
    window.addEventListener("resize", this.containerResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.containerResize);
  },
  computed: {
    containerHt() {
      return this.data.length * 100 + "%";
    },
    containerTp() {
      return -this.index * this.containerHeight + "px";
    },
    ...mapState("banner", ["data", "isLoading"]),
  },
  methods: {
    handleClick(index) {
      this.index = index;
    },
    containerWheel(e) {
      if (this.isWheel) {
        return;
      }
      if (e.deltaY < 0 && this.index > 0) {
        this.isWheel = true;
        this.index--;
      }
      if (e.deltaY > 0 && this.index < this.data.length - 1) {
        this.isWheel = true;
        this.index++;
      }
    },
    containerResize() {
      this.containerHeight = this.$refs.container.clientHeight;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  user-select: none;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .image-container {
    position: absolute;
    left: 0;
    width: 100%;
    transition: 0.5s;
    li {
      width: 100%;
    }
  }
  .icon {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 30px;
    color: @gray;
    cursor: pointer;
    &-up {
      top: 0px;
      animation: iconUp 2s infinite;
    }
    &-down {
      bottom: 0px;
      animation: iconDown 2s infinite;
    }
  }
  .nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: auto;
    right: 5px;
    li {
      @size: 10px;
      box-sizing: border-box;
      border: 1px solid @gray;
      width: @size;
      height: @size;
      border-radius: @size;
      margin: 5px 0;
      cursor: pointer;
      &.active {
        background-color: #fff;
      }
    }
  }
}
@beating: 10px;
@keyframes iconUp {
  0% {
    transform: translateX(-50%) translateY(0px);
  }
  50% {
    transform: translateX(-50%) translateY(-@beating);
  }
  100% {
    transform: translateX(-50%) translateY(0px);
  }
}
@keyframes iconDown {
  0% {
    transform: translateX(-50%) translateY(0px);
  }
  50% {
    transform: translateX(-50%) translateY(@beating);
  }
  100% {
    transform: translateX(-50%) translateY(0px);
  }
}
</style>