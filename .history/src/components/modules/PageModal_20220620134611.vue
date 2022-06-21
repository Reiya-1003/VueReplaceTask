<template>
  <modal name="modal-test" :draggable="true" :resizable="true" width="85%" height="70%">
    <h1>削除しますか</h1>

     <button v-on:click="updateTask" class="button">YES</button>
  </modal>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: "PageHome",
  
  methods: {
      ...mapMutations(["updateTask",]),
    show() {
      this.$modal.show('modal-test');
    },
    hide() {
      this.$modal.hide('modal-test');
    }
  },
  

  
};
</script>