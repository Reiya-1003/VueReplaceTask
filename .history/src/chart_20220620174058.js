import { Bubble } from 'vue-chartjs'



 
export default {
    
 extends: Bubble,
 props: ["chartData", "options"],
 mixins: [reqctiveProp],
 mounted() {
  this.renderChart(this.chartData, this.options)
 }
}