<template>
  <div>
    <div class="title">
      <van-cell title="选择活动日期" :value="date" @click="show = true" />
      <van-calendar v-model="show" type="range" @confirm="onConfirm" />
    </div>
    <div class="add">
      <van-search
        v-model="value"
        show-action
        label="事件"
        placeholder="请输入事件"
      >
        <template #action>
          <div class="addAc" @click="onSearch">添加</div>
        </template>
      </van-search>
    </div>
  </div>
</template>

<script>
import { Dialog } from "vant";
export default {
  data() {
    return {
      date: "",
      show: false,
      value: ""
    };
  },
  methods: {
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      const [start, end] = date;
      this.show = false;
      this.date = `${this.formatDate(start)} - ${this.formatDate(end)}`;
    },
    onSearch() {
      let date = this.date.trim();
      let value = this.value.trim();
      if (date.length === 0) {
        Dialog.alert({
          title: "请选择日期",
          message: ""
        });
        return;
      }
      if (value.length === 0) {
        Dialog.alert({
          title: "请输入事件",
          message: ""
        });
        return;
      }
      this.$emit("addAcValue", { date: this.date, value: value });
    },
    empty() {
      (this.date = ""), (this.value = "");
    }
  }
};
</script>
<style scoped>
.title {
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
.add {
  border-bottom: 1px solid #ccc;
}
.addAc {
  text-align: center;
  width: 60px;
  color: #fff;
  background-color: #1989fa;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>