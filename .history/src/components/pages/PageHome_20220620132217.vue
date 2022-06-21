<template>
  <div id="top">ここがタスク管理のトップページです
    <button @click="show">basicModalShow</button>
    <page-modal></page-modal>
  </div>
  
</template>

<script>
import {mapMutations} from 'vuex'

import PageModal from '../modules/PageModal.vue'
export default {
  name: "PageHome",
  components: {
     PageModal
    },

  method:{
    
      ...mapMutations(['show'])
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
