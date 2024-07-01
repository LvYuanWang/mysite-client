<template>
  <form ref="form" class="dataForm-container" @submit.prevent="dataformSubmit">
    <div class="form-item">
      <div class="nickName-container">
        <input
          type="text"
          placeholder="用户昵称"
          maxlength="10"
          v-model="formData.nickname"
        />
        <span class="tip">{{ formData.nickname.length }}/10</span>
      </div>
      <div class="error">{{ error.nickname }}</div>
    </div>
    <div class="form-item">
      <div class="formBody-container">
        <textarea
          placeholder="输入内容"
          maxlength="300"
          v-model="formData.content"
        ></textarea>
        <span class="tip">{{ formData.content.length }}/300</span>
      </div>
      <div class="error">{{ error.content }}</div>
    </div>
    <div class="form-item">
      <div class="button-area">
        <button :disabled="isSubmiting" :class="{ disabled: isSubmiting }">
          {{ isSubmiting ? "提交中..." : "提交" }}
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        nickname: "",
        content: "",
      },
      error: {
        nickname: "",
        content: "",
      },
      isSubmiting: false,
    };
  },
  methods: {
    dataformSubmit() {
      this.error.nickname = this.formData.nickname ? "" : "请输入昵称";
      this.error.content = this.formData.content ? "" : "请输入内容";
      if (this.error.content || this.error.nickname) return;
      this.isSubmiting = true;
      this.$emit("submit", this.formData, (successMsg) => {
        this.$showMessage({
          content: successMsg,
          type: "success",
          duration: 1500,
          container: this.$refs.form,
          onClose: () => {
            this.formData.content = "";
            this.formData.nickname = "";
            this.isSubmiting = false;
          },
        });
      });
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.dataForm-container {
  .form-item {
    margin-bottom: 30px;
    .tip {
      font-size: 12px;
      position: absolute;
      right: 5px;
      bottom: 5px;
    }
    .nickName-container {
      display: inline-block;
      position: relative;
      input[type="text"] {
        font-weight: bold;
        width: 500px;
        height: 35px;
        line-height: 35px;
        padding-left: 10px;
        border: 1px dashed @lightWords;
        // 取消默认样式
        outline: none;
        border-radius: 5px;
        // 聚焦时边框颜色
        &:focus {
          border-color: @primary;
        }
      }
    }
    .formBody-container {
      display: inline-block;
      width: 100%;
      position: relative;
      textarea {
        box-sizing: border-box;
        width: 100%;
        height: 120px;
        outline: none;
        border: 1px dashed @lightWords;
        // 取消默认样式
        resize: none;
        padding: 10px;
        font-weight: bold;
        border-radius: 5px;
        &:focus {
          border-color: @primary;
        }
      }
    }
    .button-area {
      button {
        width: 100px;
        height: 35px;
        font-weight: bold;
        color: #fff;
        background: @primary;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        &:hover {
          background: darken(@primary, 10%);
        }
        &.disabled {
          background: @lightWords;
          cursor: not-allowed;
        }
      }
    }
    .error {
      position: absolute;
      margin: 5px 0;
      font-weight: bold;
      color: @danger;
    }
  }
}
</style>