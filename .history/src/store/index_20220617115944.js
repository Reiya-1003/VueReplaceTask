import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,

  state: {
    //
    Task: [
      {name:"サーキットトレーニング",urgency:3,impotance:2,day:"2020/02/02"},
      {name:"５対５",urgency:2,impotance:2,day:"2020/02/02"},
      {name:"ウエイトトレーニング",urgency:1,impotance:2,day:"2020/02/04"},
      {name:"紅白戦",urgency:5,impotance:4,day:"2020/02/04"},
      {name:"読書感想文作成",urgency:2,impotance:1,day:"2020/02/05"},
      {name:"レポート作成",urgency:5,impotance:5,day:"2020/02/05"},
    ],
  },

  mutations: {
    //日本全体・各都道府県1日分のデータ
    setCovidjapandata: (state, covidjapandata) =>
      (state.covidjapandata = covidjapandata),
  },
  // setTimeoutなど非同期的な処理の場合に使う
  actions: {
    //日本全体・各都道府県1日分のデータ
    async fetchCovidjapandata({ commit }) {
      commit("setCovidjapandata", "setされる");
    },
  },

  // computedにいれるものはgetters
  getters: {
    //日本全体・各都道府県1日分のデータ
    allCovidjapandata: (state) => state.covidjapandata,
  },
});
