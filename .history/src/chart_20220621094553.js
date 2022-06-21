import { Bubble ,mixins} from 'vue-chartjs'




 
export default {
    
 extends: Bubble,
 props: ["chartData", "chartOption"],
 mixins: [mixins.reactiveProp],
 
 mounted() {
  this.renderChart(this.chartData, this.chartOption)
 }
}