<template>
  <modal name="modal-test" :draggable="true" :resizable="true" width="85%" height="70%">
    <h1>モーダルだよー</h1>
  </modal>
</template>

<script>

export default {
  name: "PageHome",
  
  methods: {
    show() {
      this.$modal.show('modal-test');
    },
    hide() {
      this.$modal.hide('modal-test');
    }
  },
  

  
};
</script>