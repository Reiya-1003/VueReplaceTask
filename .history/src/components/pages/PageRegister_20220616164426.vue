<template>
  <div style="height: 600px">
    <div>ここがタスク登録</div>
    <span>Picked: {{ picked }}</span>

    <div class="listbox">
      <div class="listitem">
        <span class="itemtitle">内容</span
        ><span class="item"><input type="text" class="textinput" /></span>
      </div>
      <div class="listitem">
        <span class="itemtitle">緊急度</span>
        <span class="item">
          <input type="radio" id="one" value="one" name="Urgency" class="radioinput" v-model="picked"/><label
            for="one"
            >1</label>
          <input type="radio" id="two" value="two" name="Urgency" class="radioinput" v-model="picked"/><label
            for="two"
            >ああああああ</label>
         
        </span>
      </div>
      <div class="listitem">
        <span class="itemtitle">重要度</span
        ><span class="item"
          ><input type="radio" /><input type="radio" /><input
            type="radio" /><input type="radio" /><input type="radio"
        /></span>
      </div>
      <div class="listitem">
        <span class="itemtitle">期日</span
        ><span class="item"><input type="date" class="dateinput" /></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageRegister",
  data(){
    return{
      picked:""
    }
  }
};
</script>

<style lang="scss" type="text/css">
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
      .textinput {
        width: 60%;
        height: 25px;
      }
      .dateinput {
        width: 60%;
        height: 25px;
      }
      .radioinput{
        display: none;
      }
      
input[type="radio"]::checked + label {
background: #31A9EE;/* マウス選択時の背景色を指定する */
color: #ffffff; /* マウス選択時のフォント色を指定する */
}
label:hover {
background-color: #E2EDF9; /* マウスオーバー時の背景色を指定する */
}
label {
    display: block;
    float: left;
    margin: 5px;
    width: 30px;
    height: 30px;
    /* padding-left: 5px; */
    /* padding-right: 5px; */
    color: #b20000;
    text-align: center;
    /* line-height: 45px; */
    cursor: pointer;
    border: 2px solid #006DD9;
    border-radius: 50%;
    font-size: 20px;
}


      
      
    }
  }
}
</style>
