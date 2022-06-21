<template>
  <div id="top">ここがタスク管理のトップページです
    <button v-on:click="show" class="button">モーダルを出す</button>

    <modal name="modal-test" :draggable="true" :resizable="true" width="85%" height="70%">
      <h1>モーダルだよー</h1>
    </modal>
  
  
  </div>
  
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

<style lang="scss" type="text/css">
#top {
  width: 100%;
  height: 100px;
  padding-top: 15%;
  padding-bottom: 15%;
  text-align: center;
}
</style>
