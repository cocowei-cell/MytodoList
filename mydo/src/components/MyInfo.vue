<template>
  <div>
    <div class="myInfo">
      <van-cell-group>
        <van-cell title="已完成数" :value="$store.state.Success" />
        <van-cell title="未完成数" :value="$store.state.noSuccess" />
        <van-cell title="完成质量" :value="mass" />
      </van-cell-group>
    </div>
    <div class="logout">
      <button @click.prevent="btnLog">
        退出登录
      </button>
    </div>
  </div>
</template>

<script>
import { Dialog } from "vant";
export default {
  name: "MyInfo",
  methods: {
    btnLog() {
      Dialog.confirm({
        title: "您确定要退出吗？",
        message: "QAQ~"
      })
        .then(() => {
          localStorage.removeItem("tokenasdzxcvf");
          this.$store.commit("modifyState", false);
          this.$store.commit("token", "");
          this.$emit("logout");
        })
        .catch(() => {
          return;
        });
    }
  },
  created() {
    this.$store.dispatch("getCount");
  },
  computed: {
    mass() {
      var success = this.$store.state.Success;
      var noSuccess = this.$store.state.noSuccess;
      if (noSuccess > success) return "差";
      else if (success > noSuccess * 2) return "优";
      else if (success === 0 && noSuccess === 0) return "无";
      else return "中"
    }
  }
};
</script>
<style scoped>
.myInfo {
  border-top: 1px solid #ccc;
}
.logout {
  margin-top: 20px;
}
.logout button {
  width: 100%;
  height: 40px;
  outline: 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #fff;
  background-color: #00a1d6;
}
</style>