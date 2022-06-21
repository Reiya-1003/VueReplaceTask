import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,

  state: {
    //タスクのリスト
    Task: [
      {id:1,name:"サーキットトレーニング",urgency:3,impotance:2,day:"2020-02-02"},
      {id:2,name:"５対５",urgency:2,impotance:2,day:"2020-02-02"},
      {id:3,name:"ウエイトトレーニング",urgency:1,impotance:2,day:"2020-02-04"},
      {id:4,name:"紅白戦",urgency:5,impotance:4,day:"2020-02-04"},
      {id:5,name:"読書感想文作成",urgency:2,impotance:1,day:"2020-02-05"},
      {id:6,name:"レポート作成",urgency:5,impotance:5,day:"2020-02-05"},
    ],
    //idで検索したTask
    EachIdTask:[{id:0,name:"",urgency:0,impotance:0,day:""}]
  },

  mutations: {
    //日本全体・各都道府県1日分のデータ
    setCovidjapandata: (state, covidjapandata) =>
      (state.covidjapandata = covidjapandata),
  },
  setEachIdTask:(state, EachIdTask)=> {state.EachIdTask = EachIdTask},
  // setTimeoutなど非同期的な処理の場合に使う
  actions: {
    //日本全体・各都道府県1日分のデータ
    async fetchCovidjapandata({ commit }) {
      commit("setCovidjapandata", "setされる");
    },
    getEachIdTask: function({ commit },state) {
      state.EachIdTask = state.Task
      const array =state.EachIdTask.filter(item =>item.id === state.route.params.id) 
      commit('setEachIdTask', array)
    },
  },

  // computedにいれるものはgetters
  getters: {
    //日本全体・各都道府県1日分のデータ
    allCovidjapandata: (state) => state.covidjapandata,

    //idによって[{idのあってるオブジェクト}]にする
    getEachIdTask:(state)=>{ 
      state.EachIdTask = state.Task
      return  state.EachIdTask.filter(item =>item.id === state.route.params.id)

    }
  },
});
