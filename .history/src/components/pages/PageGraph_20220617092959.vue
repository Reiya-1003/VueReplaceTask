<template>
  <div style="height: 600px; text-align:-webkit-center;">

    <!-- グラフのエリア -->
    <div class="grapharea">グラフのエリア</div>
    <div>日付</div>
  
    
  </div>
</template>

<script>
export default {
  name: "PageGraph",
  data(){
    return{
      Urgencypicked:"",
      picked:""
    }
  }
};
</script>

<style lang="scss" type="text/css">
div{
.grapharea{
  background-color: lightgray;
  width: 80%;
  height: 500px;
  
}
}

  
</style>
