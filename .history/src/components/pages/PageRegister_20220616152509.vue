<template>
  <div style="height: 600px">
    <div>ここがタスク登録</div>

    <div class="listbox">
      <div><span>1</span><input type="text"></div>
      <div><span>2</span><input type="text"></div>
      <div><span>3</span><input type="text"></div>
      <div><span>4</span><input type="date"></div>
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
  tr{
    
  }
}
</style>
