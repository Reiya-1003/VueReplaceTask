<template>
  <div style="height: 600px; ">

    <!-- グラフのエリア -->
    <div class="grapharea">グラフのエリア</div>
    <div class="listitem">
        <span class="itemtitle">期日</span
        ><span class="item"><input type="date" class="dateinput" /></span>
      </div>
  
    
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
  margin-left: 10%;
}


  .listitem {
    display: flex;
    align-items: center;
    padding: 1%;
    margin-top: 2%;
    margin-left: 10%;
    background-color: lightgray;
    width: 25%;
    .itemtitle {
      margin-left: 5%;
      font-size: 24px;
    }
    .item {
      width: 80%;
      display: flex;
      justify-content: center;
      
      .dateinput {
        width: 60%;
        height: 25px;
      }
}
  }
}


  
</style>
