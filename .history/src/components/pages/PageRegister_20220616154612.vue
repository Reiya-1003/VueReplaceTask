<template>
  <div style="height: 600px">
    <div>ここがタスク登録</div>

    <div class="listbox">
      <div class="listitem"><span class="itemtitle">内容</span><span class="item"><input type="text" class="textinput"></span></div>
      <div class="listitem"><span class="itemtitle">緊急度</span><span class="item"><input type="radio"><input type="radio"><input type="radio"><input type="radio"><input type="radio"></span></div>
      <div class="listitem"><span class="itemtitle">重要度</span><span class="item"><input type="radio"><input type="radio"><input type="radio"><input type="radio"><input type="radio"></span></div>
      <div class="listitem"><span class="itemtitle">期日</span><span class="item"><input type="date" class="dateinput"></span></div>
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
   .itemtitle{
     margin-left: 5%;
     font-size: large;
   }
   .item{
     width: 80%;
       .textinput{
         width: 60%;
       }
     }
  }
  

  
 
}
</style>
