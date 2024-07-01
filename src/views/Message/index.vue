<template>
  <div class="message-container" ref="messageContainer">
    <MessageArea
      title="留言板"
      :subTitle="`(${data.total})`"
      :list="data.rows"
      :isListLoading="isLoading"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchData";
import * as mesApi from "@/api/message";
import mainScroll from "@/mixins/mainScroll";
import { BaseUrl } from "@/store/urlConfig";
import formateDate from "@/utils/formateDate";
export default {
  mixins: [fetchData({ total: 0, rows: [] }), mainScroll("messageContainer")],
  components: {
    MessageArea,
  },
  data() {
    return {
      page: 1,
      limit: 10,
    };
  },
  created() {
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  computed: {
    hasMore() {
      return this.data.total > this.data.rows.length;
    },
  },
  destoryed() {
    this.$bus.$off("mainScroll", this.handleScroll);
  },
  methods: {
    async fetchData() {
      const resp = await mesApi.getMessages(this.page, this.limit);
      resp.rows.forEach((item) => {
        item.avatar = BaseUrl + item.avatar;
        item.createDate = formateDate(item.createDate);
      });
      return resp;
    },
    async handleSubmit(data, callback) {
      const content = await mesApi.postMessage(data);
      content.avatar = BaseUrl + content.avatar;
      this.data.rows.unshift(content);
      this.data.total++;
      callback("提交成功");
    },
    async handleScroll(dom) {
      if (this.isLoading || !dom) {
        return;
      }
      const range = 100;
      const dec = Math.abs(dom.scrollTop + dom.clientHeight - dom.scrollHeight);
      if (dec <= range) {
        this.fetchMore();
      }
    },
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
  },
};
</script>

<style lang="less" scoped>
.message-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  overflow-y: auto;
  scroll-behavior: smooth;
}
</style>