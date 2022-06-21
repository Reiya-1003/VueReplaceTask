<template>
  <modal
    name="modal-test"
    :draggable="true"
    :resizable="true"
    width="85%"
    height="70%"
  >
    <h1>削除しますか</h1>

    <button v-on:click="deleteItem" class="button">YES</button>
  </modal>
</template>

<script>
export default {
  name: "PageHome",

  methods: {
    deleteItem: function (index) {
      if (confirm("削除しますか?")) {
        //確認をとる
        this.task.splice(index, 1);
      }
    },
    show() {
      this.$modal.show("modal-test");
    },
    hide() {
      this.$modal.hide("modal-test");
    },
  },
};
</script>
