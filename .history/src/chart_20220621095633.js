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
        labels: ["2021年4月", "2021年5月", "2021年6月"],
        datasets: [
          {
            label: "売上",
            data: this.propData
          }
        ]
      }
    }
  }
}