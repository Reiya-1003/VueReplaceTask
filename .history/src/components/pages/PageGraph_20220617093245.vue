<template>
  <div style="height: 600px; text-align:-webkit-center;">

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
  
}

.listbox {
  margin: 3px auto;
  height: 400px;
  width: 60%;
  display: flex;
  flex-direction: column;

  .listitem {
    height: 50px;
    display: flex;
    align-items: center;
    margin-top: 5%;
    background-color: lightgray;
    text-align: center;
    .itemtitle {
      margin-left: 5%;
      font-size: large;
    }
    .item {
      width: 80%;
      display: flex;
      justify-content: center;
      margin-left: 5%;
      .dateinput {
        width: 60%;
        height: 25px;
      }
}
  }
}
}

  
</style>
