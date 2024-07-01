<template>
  <div class="imageLoader-container">
    <img v-if="!everythingLoaded" class="image-front" :src="placeholder" />
    <img
      @load="handleLoad"
      class="image-back"
      :src="src"
      :style="{ opacity: originOpacity, transition: `opacity ${duration}ms` }"
    />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 500,
    },
  },
  data() {
    return {
      originLoaded: false, // 原图是否加载完成
      everythingLoaded: false, // 所有图片是否加载完成
    };
  },
  computed: {
    originOpacity() {
      return this.originLoaded ? 1 : 0;
    },
  },
  methods: {
    handleLoad() {
      this.originLoaded = true;
      // 将事件传递给父组件
      this.$emit("load");
      setTimeout(() => {
        this.everythingLoaded = true;
      }, this.duration);
    },
  },
};
</script>

<style lang="less" scoped>
.imageLoader-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    &.image-front {
      filter: blur(2vw);
    }
  }
}
</style>