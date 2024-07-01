<template>
  <div class="blogTOC-container">
    <h2>目录</h2>
    <RightList :list="tocWithSelect" @select="selectClick" />
  </div>
</template>

<script>
import RightList from "./RightList.vue";
import { debounce } from "@/utils";
export default {
  components: {
    RightList,
  },
  props: {
    toc: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      activeAnchor: "",
    };
  },
  computed: {
    tocWithSelect() {
      const getToc = (toc = []) => {
        return toc.map((item) => ({
          ...item,
          isSelect: item.anchor === this.activeAnchor,
          children: getToc(item.children),
        }));
      };
      return getToc(this.toc);
    },
    doms() {
      const doms = [];
      const addToDoms = (toc) => {
        for (const t of toc) {
          doms.push(document.getElementById(t.anchor));
          if (t.children && t.children.length) {
            addToDoms(t.children);
          }
        }
      };
      addToDoms(this.toc);
      return doms;
    },
  },
  created() {
    this.mainScrollDebounce = debounce(this.setSelect, 50);
    this.$bus.$on("mainScroll", this.mainScrollDebounce);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.mainScrollDebounce);
  },
  methods: {
    selectClick(item) {
      location.hash = item.anchor;
    },
    // 设置activeAnchor为正确的值
    setSelect(scrollDom) {
      if (!scrollDom) {
        return;
      }
      this.activeAnchor = "";
      const range = 200;
      for (const dom of this.doms) {
        if (!dom) {
          continue;
        }
        const top = dom.getBoundingClientRect().top;
        if (top >= 0 && top <= range) {
          // 在规定的范围内
          this.activeAnchor = dom.id;
          return;
        } else if (top > range) {
          // 在规定的范围下方
          return;
        } else {
          // 在规定的范围上方
          this.activeAnchor = dom.id;
        }
      }
    },
  },
};
</script>

<style lang="less" scoped>
.blogTOC-container {
  h2 {
    font-size: 1em;
    margin: 0;
    letter-spacing: 2px;
    font-weight: bold;
  }
}
</style>