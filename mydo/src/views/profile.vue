<template>
  <div class="pad">
    <div class="reg" v-if="regShow">
      <regester @regSuccess="regSuccess"></regester>
    </div>

    <div class="info1" v-else>
      <div v-if="!state">
        <login />
      </div>
      <div v-else>
        <my-info @logout="logout" />
      </div>
      <div style="margin: 16px;" v-if="!state">
        <van-button @click="btnClick" round block type="info">
          注册
        </van-button>
      </div>
    </div>
  </div>
</template>

<script>
import Login from "@/components/login";
import MyInfo from "@/components/MyInfo";
import Regester from "@/components/regester";
export default {
  name: "profile",
  data() {
    return {
      state: false,
      isShow: false,
      regShow: false
    };
  },
  components: {
    Login,
    MyInfo,
    Regester
  },
  methods: {
    logout() {
      this.state = false;
    },
    btnClick() {
      this.regShow = true;
    },
    regSuccess() {
      this.regShow = false;
    }
  },
  created() {
    if (this.$store.state.login) {
      this.state = true;
    } else {
      this.state = false;
    }
  }
};
</script>
<style scoped>
.pad {
  padding-top: 60px;
}
</style>