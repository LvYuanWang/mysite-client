<template>
  <div class="blogComment-container">
    <MessageArea
      title="评论列表"
      :subTitle="`(${data.total})`"
      :list="data.rows"
      :isListLoading="isLoading"
      @submit="commentTextSubmit"
    />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchData.js";
import { getComments, postComments } from "@/api/blog.js";
import { BaseUrl } from "@/store/urlConfig";
import formateDate from "@/utils/formateDate";
export default {
  mixins: [fetchData({ total: 0, rows: [] })],
  components: {
    MessageArea,
  },
  data() {
    return {
      page: 1,
      limit: 10,
    };
  },
  computed: {
    hasMore() {
      return this.data.total > this.data.rows.length;
    },
  },
  created() {
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  destoryed() {
    this.$bus.$off("mainScroll", this.handleScroll);
  },
  methods: {
    async handleScroll(dom) {
      if (this.isLoading || !dom) {
        return;
      }
      const range = 100; // 定一个可接受的范围,在这个范围内都算达到了底部
      const dec = Math.abs(dom.scrollTop + dom.clientHeight - dom.scrollHeight);
      if (dec <= range) {
        this.fetchMore();
      }
    },
    async fetchData() {
      let resp = await getComments(
        this.$route.params.id,
        this.page,
        this.limit
      );
      resp.rows.forEach((item) => {
        item.avatar = BaseUrl + item.avatar;
        item.createDate = formateDate(item.createDate);
      });
      return resp;
    },
    // 加载下一页评论
    async fetchMore() {
      if (!this.hasMore) {
        return;
      }
      this.isLoading = true;
      this.page++;
      const fetchResp = await this.fetchData();
      this.data.total = fetchResp.total;
      this.data.rows = this.data.rows.concat(fetchResp.rows);
      this.isLoading = false;
    },
    async commentTextSubmit(comment, callback) {
      const resp = await postComments({
        blogId: this.$route.params.id,
        ...comment,
      });
      resp.avatar = BaseUrl + resp.avatar;
      this.data.rows.unshift(resp);
      this.data.total++;
      callback("评论成功");
    },
  },
};
</script>

<style lang="less" scoped>
.blogComment-container {
  margin: 30px 0;
}
</style>