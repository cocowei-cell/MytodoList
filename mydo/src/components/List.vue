<template>
  <div>
    <div v-show="isShow">
      <center>
        <loading color="#1989fa" type="spinner" />
      </center>
    </div>
    <div class="list">
      <list-item
        v-for="item in list"
        :key="item._id"
        :date="item.startTime"
        :value="item.actions"
        :id="item._id"
        @deupClick="deupClick"
      />
    </div>
    <div class="msg" v-show="listShow">
      列表空空如也~
    </div>
  </div>
</template>
<script>
import request from "../network/request";
import Loading from "./loading";
import Center from "./Center";
import ListItem from "./ListItem";
export default {
  name: "List",
  components: {
    Loading,
    Center,
    ListItem
  },
  data() {
    return {
      list: [],
      isShow: false
    };
  },
  props: {
    newInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    async getList() {
      this.isShow = true;
      var token = localStorage.getItem("tokenasdzxcvf");
      let info = await request({
        url: "/api/findAc?token=" + token,
        method: "get"
      });
      this.isShow = false;
      this.list = info.info;
    },
    deupClick(id) {
      let index = this.list.findIndex((item, index) => {
        return item._id === id;
      });
      this.list.splice(index, 1);
      this.$store.dispatch("getCount");
    },
    addAc() {
      this.list.push(this.newInfo);
    }
  },
  computed: {
    listShow() {
      if (this.list.length === 0) {
        return true;
      } else return false;
    }
  },

  created() {
    this.getList();
  }
};
var array = [];
</script>
<style scoped>
.list {
  overflow: auto;
  padding-bottom: 50px;
}
.msg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.1rem;
  font-weight: 100;
}
</style>