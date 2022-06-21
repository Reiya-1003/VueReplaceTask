<template>
  <div id="top">ここがタスク管理のトップページです
    <button v-on:click="show" class="button">モーダルを出す</button>

    <Modal />
  
  
  </div>
  
</template>

<script>
import Modal from "../modules/PageModal"
export default {
  name: "PageHome",
  components: {
    Modal
  },
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
