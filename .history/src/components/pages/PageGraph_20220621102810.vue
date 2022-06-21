<template>
  <div>
    <!-- グラフのエリア -->
    <div class="grapharea">
      <Chart :propData="values"  :height="height" :limitDay="Day" />
      
    </div>
    <div class="dayitem">
      <span class="daytitle">期日</span
      ><span class="item"
        ><input
          type="date"
          class="dateinput"
          v-model="inputDeadday"
      /></span>
      <span class="datebutton"><b-button v-on:click="reGraph">期日設定</b-button></span>
    </div>
  </div>
</template>

<script>
import Chart from "../../chart";

import { mapState, mapMutations } from "vuex";
export default {
  name: "PageGraph",
  components: {
    Chart,
  },
  data() {
    return {
      values: null,
      
     Day:null,
      height: 200,
      


 
    };
  },
  computed: {
    ...mapState(["DeadlineDay"]),
    inputDeadday: {
      get() {
        return this.DeadlineDay;
      },
      set(value) {
        this.inputdeadday(value);
      },
    },
  },
  methods: {
    ...mapMutations(["inputdeadday"]),
   
   


    reGraph() {
      console.log(this.$store.getters);
      this.values = this.$store.getters.dayComparison
      this.Day = this.$store.state.DeadlineDay
    },
  },
  created() {
    this.values = this.$store.getters.dayComparison,
    this.Day = this.$store.state.DeadlineDay
    console.log(this.$store.state);
    console.log(this.$store.getters);
  },
};
</script>

<style lang="scss" type="text/css">
div {
  .grapharea {
    width: 80%;

    margin-left: 10%;
  }

  .dayitem {
    display: flex;
    align-items: center;
    padding: 1%;
    margin-top: 2%;
    margin-left: 10%;
    width: 40%;
    height: 150px;
    .daytitle {
      margin-left: 5%;
      width: 10%;
      font-size: 24px;
      font-weight: 600;
    }
    .item {
      width: 60%;
      display: flex;
      justify-content: center;

      .dateinput {
        width: 60%;
        height: 25px;
      }
        .datebutton{  


        }
    }
  }
}
</style>
