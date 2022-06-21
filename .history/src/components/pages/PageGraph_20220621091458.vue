<template>
  <div>
    <!-- グラフのエリア -->
    <div class="grapharea">
      <Chart :chartData="chartItems" :options="chartOptions" :height="height" v-if="!loading"/>
    </div>
    <div class="dayitem">
      <span class="daytitle">期日</span
      ><span class="item"
        ><input
          type="date"
          class="dateinput"
          v-model="inputDeadday"
          v-on:click="kakunin"
      /></span>
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
      loding:true,
      height: 200,
      chartItems: {
        labels: ["1", "2", "3", "4", "5"],
        type: "bubble",
        datasets: this.$store.getters.dayComparison,
      },

      // 後程オプションを記述
      chartOptions: {
        responsive: true,
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: "タスクチャート",
        },
        scales: {
          xAxes: [
            {
              ticks: {
                // 目盛り
                min: 0, // 最小値
                max: 5, // 最大値
                stepSize: 1, // 軸間隔
                fontSize: 14, // フォントサイズ
              },
            },
          ],
          yAxes: [
            // Ｙ軸設定
            {
              id: "y-axis-1",
              position: "left",
              scaleLabel: {
                // 軸ラベル
                display: true, // 表示の有無
                labelString: "", // ラベル
                fontFamily: "sans-serif",
                ontSize: 16, // フォントサイズ
              },
              gridLines: {
                // 補助線
                zeroLineColor: "black", // y=0（Ｘ軸の色）
              },
              ticks: {
                // 目盛り
                min: 0, // 最小値
                max: 5, // 最大値
                stepSize: 1, // 軸間隔
                fontSize: 14, // フォントサイズ
              },
            },
          ],
        },
        tooltips: {
          callbacks: {
            label: function (t, d) {
              return (
                d.datasets[t.datasetIndex].label +
                ": (重要度:" +
                t.xLabel +
                ", 緊急度:" +
                t.yLabel +
                ")"
              );
            },
          },
        },
      },
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
    kakunin() {
      console.log(this.$store.getters);
    },
  },
  created() {
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
    background-color: lightgray;
    width: 25%;
    .daytitle {
      margin-left: 5%;
      font-size: 24px;
      font-weight: 600;
    }
    .item {
      width: 80%;
      display: flex;
      justify-content: center;

      .dateinput {
        width: 60%;
        height: 25px;
      }
    }
  }
}
</style>
