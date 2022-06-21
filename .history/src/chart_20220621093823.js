import { Bubble ,mixins} from 'vue-chartjs'




 
export default {
    
 extends: Bubble,
 props: ["chartItems", "options"],
 mixins: [mixins.reactiveProp],
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
      this.chartItems= {
        labels: ["1", "2", "3", "4", "5"],
        type: "bubble",
        datasets: this.$store.getters.dayComparison,
      }
    }
}
}