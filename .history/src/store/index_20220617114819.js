import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)


export default new Vuex.Store({
  namespaced: true,

  // `createPersistedState()`でインスタンス作成。引数に設定を書く
  plugins: [createPersistedState(
    { // ストレージのキーを指定。デフォルトではvuex
      key: 'CovidreplaceApp',
      // ストレージの種類を指定する。デフォルトではローカルストレージ
      storage: window.sessionStorage
    }
  )],
 
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
    covidjapandata: [], //日本全体・各都道府県1日分のデータ
    numberofbeds:[],    //各都道府県の病床等のデータ
    sokuhoudata:[],     //速報のデータ
    firstline:[],      //メイントピック右側部分1列目
    secondline:[],     //メイントピック右側部分2列目
    sardline:[],       //メイントピック右側部分3列目
    forthline:[],      //メイントピック右側部分4列目
    fifthline:[],      //メイントピック右側部分5列目
    sixline:[],       //メイントピック右側部分6列目
    sevenline:[],     //メイントピック右側部分7列目
    kendake:[],      //covidjapandataの県情報部分
    zero:[],        //県ごとにcovidjapandataとnumberogbedsをまとめた配列
    Allbeds:0,    //病床数の合計
    Pre:[] ,//県別ページで使うデータ
    csv:[], //入院治療を要するもののcsvのfeachデータ
    graphday:[""],//入院治療を要するもののcsvの日付だけ
    graphblueitem:[],//グラフの入院治療を要するもののデータ
    difficulttranscsv:[], //救急搬送困難のグラフデータのcsv
    transgraphday:[], //救急搬送困難のグラフデータの日付
    transgraphitem:[], //救急搬送困難のグラフのデータ
    prenyuin:[],//県ごとのグラフに使う
    tokyodata:[], //速報との比較で使用
    soutei:[],  //円グラフの想定病床のマイナス値を０とする
    Arrow:[], //右表の上下矢印の表示に使用
  },

  mutations: {
    //日本全体・各都道府県1日分のデータ
    setCovidjapandata: (state, covidjapandata) => (state.covidjapandata = covidjapandata),
    //各都道府県の病床等のデータ
    setNumberofbeds:(state,numberofbeds)=>(state.numberofbeds=numberofbeds ),
     //入院治療を要するもののcsvのfeachデータ
    setCSV:(state,csv)=>(state.csv=csv ),
    //救急搬送困難のグラフデータのcsv
    setDifficultTranCSV:(state, difficulttranscsv)=>(state.difficulttranscsv =  difficulttranscsv),
    //速報のデータ
    setSokuhoudata:(state,sokuhoudata) => (state.sokuhoudata = sokuhoudata),
    
    

    
  },
  // setTimeoutなど非同期的な処理の場合に使う
  actions: {
    //日本全体・各都道府県1日分のデータ
    async fetchCovidjapandata({ commit }) {
      const response = await axios.get('https://www.stopcovid19.jp/data/covid19japan.json')
      commit('setCovidjapandata', response.data);
    },
    //各都道府県の病床等のデータ
    async fetchNumberofbeds({ commit }) {
      const response = await axios.get('https://www.stopcovid19.jp/data/covid19japan_beds/latest.json')
      commit('setNumberofbeds', response.data);
    },
    //入院治療を要するもののcsvのfeachデータ
    async fetchCSV({ commit }) {
      const response = await axios.get('https://www.stopcovid19.jp/data/mhlw_go_jp/opendata/requiring_inpatient_care_etc_daily.csv')
      commit('setCSV', response.data);
    },
    //救急搬送困難のグラフデータのcsv
    async fetchDifficultTranCSV({ commit }) {
      const response = await axios.get('https://code4fukui.github.io/fdma_go_jp/emergencytransport_difficult_all.csv')
      commit('setDifficultTranCSV', response.data);
    },
    //速報のデータ
    async fetchSokuhoudata({ commit }) {
      const response = await axios.get('https://www.stopcovid19.jp/data/covid19japan-fast.json')
      commit('setSokuhoudata', response.data);
    },
    
  },

   // computedにいれるものはgetters
   getters: {
     //日本全体・各都道府県1日分のデータ
    allCovidjapandata: (state) => state.covidjapandata,
    //各都道府県の病床等のデータ
    allNumberofbeds: (state) => state.numberofbeds,
   //入院治療を要するもののcsvのfeachデータ
    allCSV: (state) => state.csv,
    //救急搬送困難のグラフデータのcsv
    DifficultTransCSV:(state) => state.difficulttranscsv,
     //速報のデータ
    getSokuhoudata:(state)=>state.sokuhoudata,

     //covidjapanの都道府県部分だけ
    kendake:(state,getters)=>{
      state.kendake = getters.allCovidjapandata.area
        return state.kendake
    },

     //患者数と病床数の連結
    zerorenketu:(state,getters)=>{
      if(state.zero.length === 0){
      for(let i = 0; i < getters.allNumberofbeds.length; i++){
        let colorchange = { colorchnage: getters.kendake[i].ncurrentpatients / (Number(getters.allNumberofbeds[i].入院患者受入確保病床) + Number(getters.allNumberofbeds[i].宿泊施設受入可能室数))* 100}
        
        let hairetu = Object.assign(getters.allNumberofbeds[i],getters.kendake[i],state.Clinicalengineering[i])
        let morehairetu = Object.assign(hairetu,colorchange,getters.getArrow[i])
        state.zero.push(morehairetu)
      }
    }
      return  state.zero
    }, 

    //対策病床の合計

    Allbeds:(state,getters)=>{
      if(state.Allbeds === 0){
      for(let i = 0; i < getters.allNumberofbeds.length; i++){
        state.Allbeds += (Number(getters.allNumberofbeds[i].入院患者受入確保病床) + Number(getters.allNumberofbeds[i].宿泊施設受入可能室数)) 
      }
  
      }
        return  state.Allbeds
    }, 


    //グラフ用のcsvデータをjsonの形にできた
    Graphdata:(state)=>{
      const lines = String(state.csv).split('\n')
      const header = lines[0].split(',')
      const output = lines.slice(1).map(line => {
      const fields = line.split(',') 
      return Object.fromEntries(header.map((h, i) => [h, fields[i]])) 
    })
    
    return output
    },

    //救急搬送困難のcsvデータの整形
    GraphdataTrans:(state)=>{
      const relines = String(state.difficulttranscsv).replace(/\"/g , "" )
      const day = String(relines).replace(/\-/g , "/" )
      const lines = String(day).split('\n')
      const header = lines[0].split(',')
      const output = lines.slice(1).map(line => {
      const fields = line.split(',') 
        return Object.fromEntries(header.map((h, i) => [h, fields[i]])) 
      })
      return output
    },

    //入院治療を要するもののグラフに使う年月日だけのデータ
    Graphday:(state)=>{
      const lines = String(state.csv).split('\n')
      const header = lines[0].split(',')
      const output = lines.slice(1).map(line => {
      const fields = line.split(',') 
        return Object.fromEntries(header.map((h, i) => [h, fields[i]])) 
      })
        state.graphday = output.map(item => item["Date"])
        return state.graphday
     },

    //救急搬送困難のグラフに使う年月日だけのデータ
    TransGraphday:(state)=>{
      const relines = String(state.difficulttranscsv).replace(/\"/g , "" )
      const day = String(relines).replace(/\-/g , "/" )
      const lines = String(day).split('\n')
      const header = lines[0].split(',')
      const output = lines.slice(1).map(line => {
      const fields = line.split(',') 
        return Object.fromEntries(header.map((h, i) => [h, fields[i]])) 
      })
        state.transgraphday = output.map(item => item["終了日"])
        return state.transgraphday    
    },

    //グラフに使う入院治療を要するもののデータ
    Graphblueitem:(state)=>{
      const lines = String(state.csv).split('\n')
      const header = lines[0].split(',')
      const output = lines.slice(1).map(line => {
      const fields = line.split(',') 
        return Object.fromEntries(header.map((h, i) => [h, fields[i]])) 
      })
        state.graphblueitem = output.map(item => item["(ALL) Requiring inpatient care"])
        return state.graphblueitem
    },

    //グラフに使う県ごとの入院治療を要するもののデータ
    PreNyuin:(state)=>{
      const lines = String(state.csv).split('\n')
      const header = lines[0].split(',')
      const output = lines.slice(1).map(line => {
      const fields = line.split(',') 
        return Object.fromEntries(header.map((h, i) => [h, fields[i]])) 
      })
        state.prenyuin =output.map(item => item["("+state.route.params.id+")" +" Requiring inpatient care"])
        return state.prenyuin
     },

   //円グラフ:県ごとの情報
    Prefilter: (state,getters)=>{
      state.Pre = getters.zerorenketu
      return state.Pre.filter(item =>item.name === state.route.params.id)
    },

   //救急搬送困難のグラフに使うデータ(データがないところに空きができる形)
    TransGraphitem:(state)=>{
      const relines = String(state.difficulttranscsv).replace(/\"/g , "" )
      const day = String(relines).replace(/\-/g , "/" )
      const lines = String(day).split('\n')
      const header = lines[0].split(',')
      const output = lines.slice(1).map(line => {
      const fields = line.split(',') 
        return Object.fromEntries(header.map((h, i) => [h, fields[i]])) 
      })
        const array =[]
        for(let i = 0; i < output.length; i++){
          array.push(output[i],{開始日: '', 終了日: '', 救急搬送困難事案数: null},{開始日: '', 終了日: '', 救急搬送困難事案数: null},{開始日: '', 終了日: '', 救急搬送困難事案数: null},
                    {開始日: '', 終了日: '', 救急搬送困難事案数: null},{開始日: '', 終了日: '', 救急搬送困難事案数: null},{開始日: '', 終了日: '', 救急搬送困難事案数: null})
        }
         //2020/05/09スタートにする
          const sakuzyo = array.splice(34)
          state.transgraphitem = sakuzyo.map(item => item["救急搬送困難事案数"])
            return state.transgraphitem
    },

    //速報との比較ように東京だけのデータにする
    TokyoData:(state,getters)=>{
      const tokyo = getters.zerorenketu[12]
      state.tokyodata = {患者数:getters.getSokuhoudata[0].ncurrentpatients-tokyo.ncurrentpatients,
                        累積退院者:getters.getSokuhoudata[0].nexits-tokyo.nexits,
                        死亡者数:getters.getSokuhoudata[0].ndeaths-tokyo.ndeaths,
                        PCR検査陽性者:getters.getSokuhoudata[0].npatients-tokyo.npatients}
        return state.tokyodata
    },

    //円グラフの想定病床残数がマイナスなら0を格納する
    getSoutei:(state,getters)=>{
      const soutei = Number(getters.Prefilter[0].入院患者受入確保病床) + Number(getters.Prefilter[0].宿泊施設受入可能室数) - getters.Prefilter[0].ncurrentpatients
      const zero = 0
      if(soutei > 0){
        return soutei
      }else if(soutei < 0){
        return zero
      }
    },

    //右表の矢印に使用
    getArrow:(state,getters)=>{
      //グラフデータを新しいのから二つにする
      const moto = getters.Graphdata.slice(-3)
      //オブジェクト配列化・県だけのにする
      const arr1 = Object.entries(moto[0]); //前日
      const arr2 = Object.entries(moto[1]); //最新
      const newarr1 = arr1.splice(4,arr1.length)
      const newarr2 = arr2.splice(4,arr2.length)

      //newaarr1とnewarr2を比較する
      
      if(state.Arrow.length === 0){
        const hikaku = []
      for(let i = 0; i < newarr1.length; i = i + 3){
        if(Number(newarr1[i][1]) > Number(newarr2[i][1]) ){
          let hantei = {"hantei" : "up"}
          hikaku.push(hantei)
        }else {
          let hantei = {"hantei" : "down"}
          hikaku.push(hantei)
        }
        
        
      }
      return hikaku
    }
      return state.Arrow
    },

    //一旦一個一個作って対応。分けたり再利用したりするようにする
    firstline: (state,getters)=>{
    state.firstline = getters.zerorenketu
      return state.firstline.slice(0,5)
    },
    secondline: (state,getters)=>{
      state.secondline = getters.zerorenketu
      return state.secondline.slice(5,12)
    },
    sardline:(state,getters)=>{
      state.sardline = getters.zerorenketu
      return state.sardline.slice(12,19)
    },
    forthline:(state,getters)=>{
      state.forthline = getters.zerorenketu
      return state.forthline.slice(19,26)
    },
    fifthline:(state,getters)=>{
      state.fifthline = getters.zerorenketu
      return state.fifthline.slice(26,33)
    },
    sixline:(state,getters)=>{
      state.sixline = getters.zerorenketu
      return state.sixline.slice(33,40)
    },
    sevenline:(state,getters)=>{
      state.sevenline = getters.zerorenketu
      return state.sevenline.slice(40,47)
    },
  },

  
})

