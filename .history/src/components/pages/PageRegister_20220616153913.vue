<template>
  <div style="height: 600px">
    <div>ここがタスク登録</div>

    <div class="listbox">
      <div class="listitem"><span>内容</span><span><input type="text"></span></div>
      <div class="listitem"><span>緊急度</span><span><input type="radio"><input type="radio"><input type="radio"><input type="radio"><input type="radio"></span></div>
      <div class="listitem"><span>重要度</span><span><input type="radio"><input type="radio"><input type="radio"><input type="radio"><input type="radio"></span></div>
      <div class="listitem"><span>期日</span><span><input type="date"></span></div>
    </div>
      
  </div>
</template>

<script>
export default {
  name: "PageRegister",
};
</script>

<style lang="scss" type="text/css">
.listbox {
  margin: 3px auto; 
  height: 400px;
  width: 60%;
  display: flex;
  flex-direction: column;
 
  .listitem{
   height: 50px;
   display: flex;
   align-items: center;
   margin-top: 5%;
   background-color:lightgray;
   text-align: center;
   span{
     margin-left: 10%;
     font-size: large;

   }
  }
  

  
 
}
</style>
