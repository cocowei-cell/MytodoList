<template>
  <div>
    <div class="pad" v-if="isShow">
      <slide />
      <add-search @addAcValue="values" />
      <list :newInfo="newInfo" />
    </div>
    <div class="noLogin" v-else>
      您还未登录
    </div>
  </div>
</template>

<script>
import Slide from "@/components/slide";
import List from "@/components/List";
import AddSearch from "@/components/AddSearch";
import request from "@/network/request";
export default {
  name: "index",
  data() {
    return {
      newInfo: {}
    };
  },
  components: {
    Slide,
    List,
    AddSearch
  },
  methods: {
    async values(value) {
      var final = value.date.replace(/\s/g, "");
      final = final.replace(/\//gi, ".");
      let { addInfo } = await request({
        url: "/api/addAc",
        method: "POST",
        data: `startTime=${final}&token=${this.$store.state.token}&actions=${value.value}`
      });
      this.$store.dispatch("getCount");
      this.newInfo.startTime = addInfo.startTime;
      this.newInfo.actions = addInfo.actions;
      this.newInfo._id = addInfo._id;
      // 调用子组件中的一个方法addAc 这里不知道为什么子组件监听不到变化
      this.$children[2].addAc();
      this.newInfo = {};
      this.$children[1].empty();
    }
  },
  computed: {
    isShow() {
      return this.$store.state.login;
    }
  }
};
</script>
<style scoped>
.pad {
  padding-top: 60px;
}
.noLogin {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
}
</style>