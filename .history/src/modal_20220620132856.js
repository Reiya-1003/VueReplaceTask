import Vue from 'vue'
import VModal from 'vue-js-modal'




Vue.use(VModal);
new Vue({
  el: '#app',
  methods: {
    show : function() {
      this.$modal.show('hello-world');
    },
    hide : function () {
      this.$modal.hide('hello-world');
    },
  }
})


