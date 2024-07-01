<template>
  <div
    class="carouselltem-container"
    ref="container"
    @mousemove="containerMove"
    @mouseleave="containerLeave"
  >
    <div class="image-container" ref="image" :style="imagePosition">
      <ImageLoader
        @load="this.setFontContentWidth"
        :src="imageData.bigImg"
        :placeholder="imageData.midImg"
      />
      <div class="title" ref="title">{{ imageData.title }}</div>
      <div class="blog" ref="blog">{{ imageData.description }}</div>
    </div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
export default {
  props: ["imageData"],
  components: {
    ImageLoader,
  },
  data() {
    return {
      titleWidth: 0,
      blogWidth: 0,
      containerSize: null, // 外层容器的尺寸
      innerSize: null, // 里层图片的尺寸
      mouseX: 0, // 鼠标在容器内的X坐标
      mouseY: 0, // 鼠标在容器内的Y坐标
    };
  },
  mounted() {
    this.titleWidth = this.$refs.title.clientWidth;
    this.blogWidth = this.$refs.blog.clientWidth;
    this.setSizes();
    this.mouseX = this.center.x;
    this.mouseY = this.center.y;
    window.addEventListener("resize", this.setSizes);
  },
  destroyed() {
    window.removeEventListener("resize", this.setSizes);
  },
  methods: {
    setFontContentWidth() {
      // title容器宽度
      this.$refs.title.style.opacity = 1;
      this.$refs.title.style.transition = "1s";
      this.$refs.title.style.width = 0;
      // 强行reflow
      this.$refs.title.clientWidth;
      this.$refs.title.style.width = this.titleWidth + "px";
      // blog容器宽度
      this.$refs.blog.style.opacity = 1;
      this.$refs.blog.style.width = 0;
      this.$refs.blog.style.transition = "2s 1s";
      // 强行reflow
      this.$refs.blog.clientWidth;
      this.$refs.blog.style.width = this.blogWidth + "px";
    },
    setSizes() {
      this.containerSize = {
        width: this.$refs.container.clientWidth,
        height: setTimeout(() => {
          this.$refs.container.clientHeight;
        }, 0),
      };
      this.innerSize = {
        width: this.$refs.image.clientWidth,
        height: setTimeout(() => {
          this.$refs.image.clientHeight;
        }, 0),
      };
    },
    containerMove(e) {
      const rect = this.$refs.container.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
    },
    containerLeave() {
      this.mouseX = this.center.x;
      this.mouseY = this.center.y;
    },
  },
  computed: {
    imagePosition() {
      if (!this.innerSize || !this.containerSize) {
        return;
      }
      const excrtWidth = this.innerSize.width - this.containerSize.width; // 多出的宽度
      const excrtHeight = this.innerSize.height - this.containerSize.height; // 多出的高度
      const left = (-excrtWidth * this.mouseX) / this.containerSize.width; // 鼠标在容器内的X坐标: 鼠标在容器内的X坐标 / 容器的宽度
      const top = (-excrtHeight * this.mouseY) / this.containerSize.height; // 鼠标在容器内的Y坐标: 鼠标在容器内的Y坐标 / 容器的高度
      return {
        transform: `translate(${left}px, ${top}px)`,
      };
    },
    center() {
      return {
        x: this.containerSize.width / 2,
        y: this.containerSize.height / 2,
      };
    },
  },
};
</script>

<style lang="less" scoped>
.carouselltem-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  .image-container {
    width: 120%;
    height: 120%;
    position: absolute;
    left: 0;
    top: 0;
    transition: 0.5s;
    .title,
    .blog {
      position: absolute;
      left: 10%;
      transform: translateY(-50%);
      letter-spacing: 3px;
      color: #fff;
      // text-shadow: 横向 纵向 扩散范围 颜色;
      text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
        0 1px 0 rgba(0, 0, 0, 0.5), 0 1px 0 rgba(0, 0, 0, 0.5);
      overflow: hidden;
      white-space: nowrap;
      opacity: 0;
    }
    .title {
      top: ceil(50% - 6px);
      font-size: 2em;
    }
    .blog {
      top: 50%;
      font-size: 1.2em;
    }
  }
}
</style>