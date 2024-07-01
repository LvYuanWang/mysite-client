<template>
  <div id="messageArea-container" class="messageArea-container">
    <DataForm v-on="$listeners" />
    <h2>
      {{ title }} <span>{{ subTitle }}</span>
    </h2>
    <DataList :list="list" />
    <div class="loading" v-loading="isListLoading"></div>
  </div>
</template>

<script>
import DataList from "./DataList.vue";
import DataForm from "./DataForm.vue";
export default {
  components: {
    DataForm,
    DataList,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    subTitle: {
      type: String,
      default: "",
    },
    list: {
      type: Array,
      default: () => [],
    },
    isListLoading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="less" scoped>
.loading {
  position: relative;
  height: 100px;
}
</style>