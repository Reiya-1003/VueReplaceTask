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
        'getEachIdTask'
      ],
      // ストレージの種類を指定する。デフォルトではローカルストレージ
      storage: window.sessionStorage
    }
  )],

  state: {
    //タスクのリスト
    Task: [
      {id:"1",name:"サーキットトレーニング",urgency:3,impotance:2,day:"2020-02-02"},
      {id:"2",name:"５対５",urgency:2,impotance:2,day:"2020-02-02"},
      {id:"3",name:"ウエイトトレーニング",urgency:1,impotance:2,day:"2020-02-04"},
      {id:"4",name:"紅白戦",urgency:5,impotance:4,day:"2020-02-04"},
      {id:"5",name:"読書感想文作成",urgency:2,impotance:1,day:"2020-02-05"},
      {id:"6",name:"レポート作成",urgency:5,impotance:5,day:"2020-02-05"},
    ],
    //idで検索したTask
    EachIdTask:[],
    newTask : "",
    newUrgency:0,
    newImpotance:0,
    newDay:"",
  },

  mutations: {
    input: function(state, child) {
      state.newTask = child;
    },
    inputurgency: function(state, child) {
      state.newUrgency = child;
    },
    inputimportance: function(state, child) {
      state.newImpotance = child;
    },
    inputday: function(state,child){
      state.newDay = child
    },
    addTask: function(state) {
      let text = state.newTask && state.newTask.trim();
      if (!text) {
        return;
      }
      const last = state.Task.slice(-1)[0].id // ★これ
      const id = String(Number(last) + 1)
      let urgency = state.newUrgency
      let impotance = state.newImpotance
      let day = state.newDay
      state.Task.push({
        id: id,
        name: text,
        urgency: Number(urgency),
        impotance :Number(impotance),
        day : day

      });
      state.newTodo = "";
    },
    updateTask: function(state) {
      let text = state.newTask && state.newTask.trim();
      if (!text) {
        return;
      }
      const id = state.route.params.id
      let urgency = state.newUrgency
      //変更しなかったら元々のを返す
      if(urgency === 0){
        const moto = state.Task.filter(item =>item.id === state.route.params.id)
        console.log(moto)
        urgency = moto[0].urgency
      }
   
      let impotance = state.newImpotance
      if(impotance === 0){
        const moto = state.Task.filter(item =>item.id === state.route.params.id)
      impotance = moto[0].impotance
      }
      let day = state.newDay
      if(day === ""){
        const moto = state.Task.filter(item =>item.id === state.route.params.id)
        day = moto[0].day
      }

      //編集前を削除する paramのidがあってるものを削除する
      // state.Task.splice(Number(id)-1,1);
      state.Task.filter(function( array ) {
        
        return array.id !== id;
        
      });
      console.log(state.Task)
      const updateTask={
        id: id,
        name: text,
        urgency: urgency,
        impotance :impotance,
        day : day

      };
    
      //編集後を挿入する
      state.Task.push(updateTask)
     
    },
  //   removeTask: function(index) {
  //     if(confirm('削除しますか?')){ //確認をとる
        // state.Task.splice(index, 1);
  //       console.log(index)

  //   }
  // }
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
