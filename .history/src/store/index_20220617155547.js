import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,

  // `createPersistedState()`でインスタンス作成。引数に設定を書く
  plugins: [createPersistedState(
    { // ストレージのキーを指定。デフォルトではvuex
      key: 'TaskreplaceApp',
      paths: [
        'EachIdTask',
        'userId',
        'getEachIdTask'
      ],
      // ストレージの種類を指定する。デフォルトではローカルストレージ
      storage: window.sessionStorage
    }
  )],

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
    EachIdTask:[]
  },

  mutations: {
  },
  // setTimeoutなど非同期的な処理の場合に使う
  actions: {
    
    
  },

  // computedにいれるものはgetters
  getters: {
    

    //idによって[{idのあってるオブジェクト}]にする
    getEachIdTask:(state)=>{ 
      const array = state.Task.filter(item => item.id === state.route.params.id)
      
      return  array

    }
  },
});
