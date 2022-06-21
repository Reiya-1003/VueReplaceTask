<template>
  <div style="height: 600px; ">

    <!-- グラフのエリア -->
    <div class="grapharea">グラフのエリア</div>
    <div class="dayitem">
        <span class="daytitle">期日</span
        ><span class="item"><input type="date" class="dateinput" /></span>
      </div>
  
    
  </div>
</template>

<script>
export default {
  name: "PageList",
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


  .dayitem {
    display: flex;
    align-items: center;
    padding: 1%;
    margin-top: 2%;
    margin-left: 10%;
    background-color: lightgray;
    width: 25%;
    .daytitle {
      margin-left: 5%;
      font-size: 24px;
      font-weight: 600;
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
