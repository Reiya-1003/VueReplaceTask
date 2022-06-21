import { Bubble ,mixins} from 'vue-chartjs'





export default {
  extends: Bubble,
  mixins: [mixins.reactiveData],
  props: {
    propData: {
      type: Array,
      default: null
    },
    limitDay:{
      type: String,
      default:null
    },
    option:{
      type:Object,
      default:null
    }
  },
  data () {
    return {
      options: {}
    }
  },
  mounted () {
    this.render()
  },
  watch: {
    propData () {
      this.render()
    }
  },
  methods: {
    render () {
      this.chartData = {
        yAxisID: "y-axis-1",
        labels: ["1", "2", "3", "4", "5"],
        type: "bubble",
        datasets: this.propData
      },

      this.options= {
        responsive: true,
        legend: {
          display: false,
        },
        title: {
          display: true,
          text:  this.limitDay + "までのタスクチャート",
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
      }
    }
  }
}