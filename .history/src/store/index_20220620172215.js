import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);
var today = new Date();

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
      {id:"1",name:"サーキットトレーニング",urgency:3,impotance:2,day:"2022-06-29"},
      {id:"2",name:"５対５",urgency:2,impotance:2,day:"2022-07-03"},
      {id:"3",name:"ウエイトトレーニング",urgency:1,impotance:2,day:"2022-07-04"},
      {id:"4",name:"紅白戦",urgency:5,impotance:4,day:"2022-06-25"},
      {id:"5",name:"読書感想文作成",urgency:2,impotance:1,day:"2022-07-10"},
      {id:"6",name:"レポート作成",urgency:5,impotance:5,day:"2022-06-21"},
    ],
    //idで検索したTask
    EachIdTask:[],
    newName : "",
    newUrgency:0,
    newImpotance:0,
    newDay:"",
    onlyUregen:[],
    onlyImpo:[],
    graphdata:[],
    onlyname:[],
    daycompa:true,
    DeadlineDay:String(today.getFullYear()) + "-" + String((today.getMonth()+1)) + "-" + String(today.getDate()),
    DeadlineArray:[],


  
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
    inputdeadday: function(state, child) {
      state.DeadlineDay = child;
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
      //入力値が何もなかったら進まない
      let name = state.newName
      if(name === ""){
        const moto = state.Task.filter(item =>item.id === state.route.params.id)
        name = moto[0].name
      }
      //idは個別のid
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

      
      const newarray = state.Task.filter(item =>item.id !== state.route.params.id)
      console.log(newarray)
      const updateTask={
        id: id,
        name: name,
        urgency: urgency,
        impotance :impotance,
        day : day

      };
    
      //編集後を挿入する
      newarray.push(updateTask)
      state.Task = newarray
      
    },
    

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

    },
    getOnlyUregen:(state)=>{
      state.onlyUregen = state.Task.map(item => String(item["urgency"]))
      return state.onlyUregen
    },
    getOnlyImpo:(state)=>{
      state.onlyImpo = state.Task.map(item => String(item["impotance"]))
      return state.onlyImpo
    },
    getOnlyName:(state)=>{
      state.onlyname = state.Task.map(item => String(item["name"]))
      return state.onlyname
    },

    dayComparison:(state,getters)=>{
      if(state.DeadlineArray.length === 0){
        const array= []
        for(let i = 0; i < state.Task.length; i++){
          if(new Date(state.Task[i].day) < new Date(state.DeadlineDay)){
            const obj = {data:[{"x": getters.getOnlyImpo[i], "y": getters.getOnlyUregen[i], "r": 10,}],
                      backgroundColor: ["rgb(255, 99, 132)"],
                      label: getters.getOnlyName[i],}
            array.push(obj)
            console.log("回りました")
          }
         
        }
        return array
        
      }
      return state.DeadlineArray
    },

    getGraphData:(state,getters)=>{
      if(state.graphdata.length === 0){
        const array= []
      
      for(let i = 0; i < state.Task.length; i++){
        const obj = {data:[{"x": getters.getOnlyImpo[i], "y": getters.getOnlyUregen[i], "r": 10,}],
                      backgroundColor: ["rgb(255, 99, 132)"],
                      label: getters.getOnlyName[i],}
        array.push(obj)
        console.log("回りました")
      }
      return array
    }
      return state.graphdata
    },

    
  },
});
