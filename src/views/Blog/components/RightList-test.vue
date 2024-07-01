<template>
  <RightList :list="list" @select="selectClick" />
</template>

<script>
import RightList from "./RightList";
export default {
  components: {
    RightList,
  },
  data() {
    return {
      list: [
        { name: "a", isSelect: false },
        {
          name: "b",
          isSelect: false,
          children: [
            { name: "b-1", isSelect: false },
            { name: "b-2", isSelect: false },
            { name: "b-3", isSelect: false },
            {
              name: "b-4",
              isSelect: false,
              children: [
                { name: "b-4-1", isSelect: false },
                { name: "b-4-2", isSelect: false },
                { name: "b-4-3", isSelect: false },
              ],
            },
            { name: "b-5", isSelect: false },
          ],
        },
        { name: "c", isSelect: false },
        {
          name: "d",
          isSelect: true,
          children: [
            { name: "d-1", isSelect: false },
            { name: "d-2", isSelect: false },
            { name: "d-3", isSelect: false },
            {
              name: "d-4",
              isSelect: false,
              children: [
                { name: "d-4-1", isSelect: false },
                { name: "d-4-2", isSelect: false },
                { name: "d-4-3", isSelect: false },
              ],
            },
            { name: "d-5", isSelect: false },
          ],
        },
        { name: "e", isSelect: false },
      ],
    };
  },
  methods: {
    selectClick(item) {
      console.log(item);
    },
  },
};
</script>

<style>
</style>