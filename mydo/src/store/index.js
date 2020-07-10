import Vue from 'vue';
import Vuex from 'vuex';
import request from '@/network/request';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    login: false,
    token: '',
    Success: '',//用户完成和未完成量
    noSuccess: ''
  },
  mutations: {
    modifyState(state, payload) {
      state.login = payload;
    },
    token(state, payload) {
      state.token = payload;
    },
    modifyCounts(state, payload) {
      state.Success = payload.Success;
      state.noSuccess = payload.noSuccess;
    }
  },
  actions: {
    async getCount({ state, commit }) {
      let { count } = await request({
        url: `/api/countAc?token=${state.token}`,
      });
      commit("modifyCounts", count);
    }
  }
})

export default store;