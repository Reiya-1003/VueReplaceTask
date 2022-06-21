<template>
  <div>
    <!-- グラフのエリア -->
    <div class="grapharea">
      <Chart :chartData="chartItems" :options="chartOptions" :height="height" />
    </div>
    <div class="dayitem">
      <span class="daytitle">期日</span
      ><span class="item"><input type="date" class="dateinput" /></span>
    </div>
  </div>
</template>

<script>
import Chart from "../../chart";
export default {
  name: "PageGraph",
  components: {
    Chart,
  },
  data() {
    return {
      height: 200,
      chartItems: {
        labels: ["1", "2", "3", "4", "5"],
        type: "bubble",
        datasets: [
          {
            yAxisID: "y-axis-1",
            label: "業務水準"+ this.$store.getters.getOnlyName,
            data: this.$store.getters.getGraphData,
            backgroundColor: "rgb(255, 99, 132)",
          },
        ],
      },

      // 後程オプションを記述
      chartOptions: {
        responsive: true,
        legend: {
          display: true,
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
            }
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
      },
    };
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
