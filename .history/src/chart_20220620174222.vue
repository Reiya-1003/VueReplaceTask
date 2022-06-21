<script>
import { Bubble } from 'vue-chartjs'
const { reactiveProp } = mixins




 
export default {
    
 extends: Bubble,
 props: ["chartData", "options"],
 mixins: [reqctiveProp],
 mounted() {
  this.renderChart(this.chartData, this.options)
 }
}
</script>