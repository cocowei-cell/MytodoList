<template>
  <div>
    <center v-if="loading">
      <loading color="#1989fa" type="spinner" />
    </center>

    <div>
      <van-form class="van-form">
        <van-field
          v-model="email"
          name="用户名"
          label="邮箱"
          placeholder="请输入邮箱"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="请输入密码6-16位数字和字母"
        />
        <div style="margin: 16px;">
          <van-button @click="btnClick" round block type="info">
            注册
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import request from "../network/request";
import Loading from "../components/loading";
import Center from "../components/Center";
import { Dialog } from "vant";
export default {
  name: "regester",
  components: {
    Loading,
    Center
  },
  data() {
    return {
      pattern1: /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/,
      pattern2: /^[A-Za-z0-9]{3,16}$/,
      email: "",
      password: "",
      loading: false
    };
  },
  methods: {
    async btnClick() {
      var email = this.email.trim();
      var password = this.password.trim();
      var len1 = email.length;
      var len2 = password.length;
      if (len1 === 0) {
        alert("请输入账号");
        return;
      }
      if (len2 === 0) {
        alert("请输入密码");
        return;
      }
      if (!this.pattern1.test(email)) {
        alert("请输入正确格式的邮箱");
        return;
      }
      if (!this.pattern2.test(password)) {
        alert("请输入正确的密码格式");
        return;
      }
      this.loading = true;
      let info = await request({
        url: "/api/reg",
        method: "post",
        data: `email=${email}&password=${password}`
      });
      this.loading = false;
      if (info.code === 1) {
        Dialog.alert({
          title: "注册成功",
          message: "快去登录吧~"
        });
        this.$emit("regSuccess");
      } else {
        Dialog.alert({
          title: "注册失败",
          message: "邮箱已被占用"
        });
      }
    }
  }
};
</script>
<style scoped>
.van-form {
  border-top: 1px solid #ccc;
}
</style>