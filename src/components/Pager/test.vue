<template>
  <div>
    <pager
      :total="total"
      :current="current"
      @changeNumber="newPagerNumber($event)"
    />
  </div>
</template>

<script>
import Pager from "./";
export default {
  components: {
    Pager,
  },
  data() {
    return {
      total: 300,
      current: 1,
    };
  },
  methods: {
    // 注册事件
    newPagerNumber(newPage) {
      this.current = newPage;
    },
  },
};
</script>