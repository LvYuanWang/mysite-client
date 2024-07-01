<template>
  <div class="test-container">
    <div v-for="(ico, i) in types" :key="i">
      <Icon :type="ico" />
      <span>{{ ico }}</span>
    </div>
  </div>
</template>

<script>
import Icon, { types } from "./";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      types,
    };
  },
};
</script>

<style lang="less" scoped>
.icon-container {
  font-size: 32px;
}
.test-container {
  width: 580px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  user-select: none;
  & > div {
    margin: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>