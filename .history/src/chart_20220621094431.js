import { Bubble ,mixins} from 'vue-chartjs'




 
export default {
    
 extends: Bubble,
 props: ["chartData", "options"],
 mixins: [mixins.reactiveProp],
 data () {
    return {
      options: {}
    }
  },
 
 mounted() {
  this.renderChart(this.chartData, this.options)
 }
}