<template>
  <div>
    <div class="item">
      <span @click="upState(id)" class="items">{{ date }}</span>
      <p @click="valueClick" class="items">{{ getValue }}</p>
      <button class="itemsPec" @click="deleteClick(id)">删除</button>
    </div>
  </div>
</template>

<script>
import { Dialog } from "vant";
import request from "@/network/request";
export default {
  name: "ListItem",
  props: {
    date: {
      type: String
    },
    value: {
      type: String
    },
    id: String
  },
  methods: {
    valueClick() {
      Dialog.alert({
        title: "详细活动",
        message: this.value
      });
    },
    async deleteClick(id) {
      Dialog.confirm({
        title: "确定要删除吗？",
        message: this.value
      })
        .then(async () => {
          await request({
            url: "/api/removeAc",
            method: "post",
            data: `id=${id}&token=${localStorage.getItem("tokenasdzxcvf")}`
          });
          this.$emit("deupClick", id);
        })
        .catch(() => {
          return;
        });
    },
    // 更新状态
    async upState(id) {
      Dialog.confirm({
        title: "确认已经完成该事件？",
        message: this.value
      })
        .then(async () => {
          await request({
            url: "/api/upState",
            method: "post",
            data: `id=${id}&token=${localStorage.getItem("tokenasdzxcvf")}`
          });
          this.$emit("deupClick", id);
        })
        .catch(() => {
          return;
        });
    }
  },
  computed: {
    getValue() {
      return this.value.length > 13
        ? this.value.substr(0, 5) + "..."
        : this.value;
    }
  }
};
</script>
<style scoped>
.item {
  display: flex;
  justify-content: space-between;
  margin-top: 2px;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid #ccc;
}
.item p {
  flex: 1;
  color: #1989fa;
  margin-left: 11px;
}
.item button {
  border: 0;
  color: #fff;
  background-color: #1989fa;
  border-radius: 4px;
  padding: 8px;
  font-size: 0.8rem;
}
</style>