import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)


export default new Vuex.Store({
  namespaced: true,

 
  state: {
    //臨床工学士のデータは手入力するしかない
    Clinicalengineering:[
      {id:"01" ,ken: "北海道" ,Gishi:788, Kokyu:1073, ECMO:59},{id:"02" ,ken: "青森県" ,Gishi:154, Kokyu:368, ECMO:15},{id:"03" ,ken: "岩手県" ,Gishi:"-", Kokyu:583, ECMO:13},{id:"04" ,ken: "宮城県" ,Gishi:209, Kokyu:348, ECMO:20},
      {id:"05" ,ken: "秋田県" ,Gishi:140, Kokyu:300, ECMO:12},{id:"06" ,ken: "山形県" ,Gishi:206, Kokyu:494, ECMO:15},{id:"07" ,ken: "福島県" ,Gishi:198, Kokyu:341, ECMO:14},{id:"08" ,ken: "茨城県" ,Gishi:262, Kokyu:611, ECMO:13},
      {id:"09" ,ken: "栃木県" ,Gishi:79, Kokyu:219, ECMO:11},{id:"10" ,ken: "群馬県" ,Gishi:246, Kokyu:458, ECMO:31},{id:"11" ,ken: "埼玉県" ,Gishi:1072, Kokyu:1586, ECMO:74},{id:"12" ,ken: "千葉県" ,Gishi:839, Kokyu:1519, ECMO:69},
      {id:"13" ,ken: "東京都" ,Gishi:1652, Kokyu:3802, ECMO:196},{id:"14" ,ken: "神奈川県" ,Gishi:491, Kokyu:1013, ECMO:63},{id:"15" ,ken: "新潟県" ,Gishi:249, Kokyu:474, ECMO:22},{id:"16" ,ken: "富山県" ,Gishi:54, Kokyu:128, ECMO:10},
      {id:"17" ,ken: "石川県" ,Gishi:50, Kokyu:123, ECMO:9},{id:"18" ,ken: "福井県" ,Gishi:106, Kokyu:208, ECMO:6},{id:"19" ,ken: "山梨県" ,Gishi:115, Kokyu:289, ECMO:10},{id:"20" ,ken: "長野県" ,Gishi:203, Kokyu:226, ECMO:9},
      {id:"21" ,ken: "岐阜県" ,Gishi:788, Kokyu:1073, ECMO:59},{id:"22" ,ken: "静岡県" ,Gishi:788, Kokyu:1073, ECMO:59},{id:"23" ,ken: "愛知県" ,Gishi:788, Kokyu:1073, ECMO:59},{id:"24" ,ken: "三重県" ,Gishi:788, Kokyu:1073, ECMO:59},
      {id:"25" ,ken: "滋賀県" ,Gishi:171, Kokyu:298, ECMO:15},{id:"26" ,ken: "京都府" ,Gishi:451, Kokyu:565, ECMO:40},{id:"27" ,ken: "大阪府" ,Gishi:634, Kokyu:1281, ECMO:103},{id:"28" ,ken: "兵庫県" ,Gishi:306, Kokyu:731, ECMO:47},
      {id:"29" ,ken: "奈良県" ,Gishi:225, Kokyu:435, ECMO:21},{id:"30" ,ken: "和歌山県" ,Gishi:62, Kokyu:187, ECMO:12},{id:"31" ,ken: "鳥取県" ,Gishi:98, Kokyu:273, ECMO:13},{id:"32" ,ken: "島根県" ,Gishi:115, Kokyu:379, ECMO:14},
      {id:"33" ,ken: "岡山県" ,Gishi:481, Kokyu:707, ECMO:38},{id:"34" ,ken: "広島県" ,Gishi:426, Kokyu:846, ECMO:35},{id:"35" ,ken: "山口県" ,Gishi:226, Kokyu:630, ECMO:24},{id:"36" ,ken: "徳島県" ,Gishi:170, Kokyu:258, ECMO:5},
      {id:"37" ,ken: "香川県" ,Gishi:788, Kokyu:1073, ECMO:59},{id:"38" ,ken: "愛媛県" ,Gishi:788, Kokyu:1073, ECMO:59},{id:"39" ,ken: "高知県" ,Gishi:788, Kokyu:1073, ECMO:59},{id:"40" ,ken: "福岡県" ,Gishi:788, Kokyu:1073, ECMO:59},
      {id:"41" ,ken: "佐賀県" ,Gishi:69, Kokyu:218, ECMO:11},{id:"42" ,ken: "長崎県" ,Gishi:134, Kokyu:410, ECMO:20},{id:"43" ,ken: "熊本県" ,Gishi:326, Kokyu:660, ECMO:19},{id:"44" ,ken: "大分県" ,Gishi:206, Kokyu:389, ECMO:18},
      {id:"45" ,ken: "宮崎県" ,Gishi:136, Kokyu:397, ECMO:11},{id:"46" ,ken: "鹿児島県" ,Gishi:217, Kokyu:530, ECMO:28},{id:"47" ,ken: "沖縄県" ,Gishi:333, Kokyu:563, ECMO:35},
    ],
  },

  mutations: {
    //日本全体・各都道府県1日分のデータ
    setCovidjapandata: (state, covidjapandata) => (state.covidjapandata = covidjapandata),
    
    
    

    
  },
  // setTimeoutなど非同期的な処理の場合に使う
  actions: {
    //日本全体・各都道府県1日分のデータ
    async fetchCovidjapandata({ commit }) {
      const response = await axios.get('https://www.stopcovid19.jp/data/covid19japan.json')
      commit('setCovidjapandata', response.data);
   
    
  },
},

   // computedにいれるものはgetters
   getters: {
     //日本全体・各都道府県1日分のデータ
    allCovidjapandata: (state) => state.covidjapandata,
   }
})

