import { Bubble ,mixins} from 'vue-chartjs'




 
// export default {
    
//  extends: Bubble,
//  props: ["chartData", "options"],
//  mixins: [mixins.reactiveProp],
 
//  mounted() {
//   this.renderChart(this.chartData, this.options)
//  }
// }

export default {
  extends: Bubble,
  mixins: [mixins.reactiveData],
  props: {
    propData: {
      type: Array,
      default: null
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
        labels: ["1", "2", "3", "4", "5"],
        type: "bubble",
        datasets: this.propData
      }
    }
  }
}