<template>
  <img class="loading-container" :src="loading" />
</template>

<script>
import loading from "@/assets/loading.svg";

export default {
  data() {
    return {
      loading,
    };
  },
};
</script>


<style lang="less" scoped>
.loading-container {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>