<template>
<div style="height:600px">
  <div >ここがタスク登録</div>

  <div class="listbox">
    <div class="listitem">内容</div>
    <div class="listitem">緊急度</div>
    <div class="listitem">重要度</div>
    <div class="listitem">期日</div>
  </div>

</div>
</template>

<script>
export default {
  name: "PageRegister",
};
</script>

<style lang="scss" type="text/css">
.listbox{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 400px;
  .listitem{
    background-color: aqua;
    width: 60%;
    margin-left: 20%;
    height: 15%;
  }
}

</style>
