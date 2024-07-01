<template>
  <div style="position: relative">
    <Loading v-if="loading" />
    <button @click="loading = !loading">隐藏/显现</button>
  </div>
</template>

<script>
import Loading from "./";
export default {
  data() {
    return {
      loading: true,
    };
  },
  components: { Loading },
};
</script>

<style>
</style>