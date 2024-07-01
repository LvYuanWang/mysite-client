<template>
  <div class="blogList-container" v-loading="isLoading">
    <ul class="list" ref="list">
      <li class="item" v-for="item in data.rows" :key="item.id">
        <div class="thumb" v-if="item.thumb">
          <RouterLink :to="{ name: 'BlogDetail', params: { id: item.id } }">
            <img v-lazy="item.thumb" :alt="item.title" :title="item.title" />
          </RouterLink>
        </div>
        <div class="content">
          <RouterLink :to="{ name: 'BlogDetail', params: { id: item.id } }">
            <h3 class="title">{{ item.title }}</h3>
          </RouterLink>
          <div class="content-data">
            <span>日期: {{ item.createDate }}</span>
            <span>浏览: {{ item.scanNumber }}</span>
            <span>评论: {{ item.commentNumber }}</span>
            <RouterLink
              :to="{
                name: 'CategoryBlog',
                params: {
                  categoryId: item.category.id,
                },
              }"
              ><span>{{ item.category.name }}</span></RouterLink
            >
          </div>
          <div class="content-text">
            {{ item.description }}
          </div>
        </div>
      </li>
      <Pager
        v-if="data.total"
        :current="routeInfo.page"
        :total="data.total"
        :limit="routeInfo.limit"
        :visibleNumber="10"
        @changeNumber="pageChange"
      />
      <Empty v-if="data.rows.length === 0 && !isLoading" />
    </ul>
  </div>
</template>

<script>
import Pager from "@/components/Pager";
import fethData from "@/mixins/fetchData.js";
import { getBlogs } from "@/api/blog.js";
import mainScroll from "@/mixins/mainScroll.js";
import Empty from "@/components/Empty";
import formateDate from "@/utils/formateDate";
import { BaseUrl } from "@/store/urlConfig";
export default {
  mixins: [fethData({ total: 0, rows: [] }), mainScroll("list")],
  components: {
    Pager,
    Empty,
  },
  computed: {
    routeInfo() {
      const categoryId = this.$route.params.categoryId || -1;
      const page = +this.$route.query.page || 1;
      const limit = +this.$route.query.limit || 10;
      return {
        categoryId,
        page,
        limit,
      };
    },
  },
  methods: {
    async fetchData() {
      let resp = await getBlogs(
        this.routeInfo.page,
        this.routeInfo.limit,
        this.routeInfo.categoryId
      );
      resp.rows.forEach((item) => {
        item.thumb = BaseUrl + item.thumb;
        item.createDate = formateDate(item.createDate);
      });
      return resp;
    },
    pageChange(newPage) {
      const query = {
        page: newPage,
        limit: this.routeInfo.limit,
      };
      if (this.routeInfo.categoryId === -1) {
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        this.$router.push({
          name: "CategoryBlog",
          query,
          params: {
            categoryId: this.routeInfo.categoryId,
          },
        });
      }
    },
  },
  watch: {
    async $route() {
      this.isLoading = true;
      this.$refs.list.scrollTop = 0;
      let resp = await this.fetchData();
      this.data = resp;
      this.isLoading = false;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.blogList-container {
  width: 100%;
  .list {
    list-style: none;
    margin: 0;
    padding: 20px 0 0 0;
    overflow-y: scroll;
    // 设置平滑滚动
    scroll-behavior: smooth;
    // 溢出时显示滚动条
    height: calc(100vh - 20px);
    // 设置滚动条样式
    /* 滚动条整体 */
    &::-webkit-scrollbar {
      width: 6px;
    }
    /* 滚动条滑块 */
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
      background: rgba(0, 0, 0, 0.5);
    }
    .item {
      padding: 10px 0;
      margin: 0 20px;
      display: flex;
      border-bottom: 2px solid rgba(0, 0, 0, 0.1);
      img {
        width: 180px;
        border-radius: 5px;
      }
      .content {
        margin-left: 10px;
        .title {
          font-size: 20px;
          margin: 5px 0;
        }
        .content-data {
          font-size: 13px;
          color: @lightWords;
          margin-bottom: 15px;
          span {
            margin-right: 10px;
          }
        }
        .content-text {
          font-size: 14px;
          font-weight: bold;
        }
      }
    }
  }
}
</style>