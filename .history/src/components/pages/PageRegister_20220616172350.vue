<template>
  <div style="height: 600px">
    <div>ここがタスク登録</div>
    <span>緊急Picked: {{ Urgencypicked}}</span>
    <span>重要picked: {{picked}}</span>

    <div class="listbox">
      <div class="listitem">
        <span class="itemtitle">内容</span
        ><span class="item"><input type="text" class="textinput" /></span>
      </div>
      <div class="listitem">
        <span class="itemtitle">緊急度</span>
        <span class="item">
          <input type="radio" id="one" value="one" name="Urgency" class="radioinput" v-model="Urgencypicked"/><label
            for="one"
            >1</label>
          <input type="radio" id="two" value="two" name="Urgency" class="radioinput" v-model="Urgencypicked"/><label
            for="two"
            >2</label>
            <input type="radio" id="three" value="three" name="Urgency" class="radioinput" v-model="Urgencypicked"/><label
            for="three"
            >3</label>
            <input type="radio" id="four" value="four" name="Urgency" class="radioinput" v-model="Urgencypicked"/><label
            for="four"
            >4</label>
            <input type="radio" id="five" value="five" name="Urgency" class="radioinput" v-model="Urgencypicked"/><label
            for="five"
            >5</label>
         
        </span>
      </div>
      <div class="listitem">
        <span class="itemtitle">重要度</span>
        <span class="item">
          <input type="radio" id="imone" value="one" name="importance" class="radioinput" v-model="picked"/><label
            for="imone"
            >1</label>
          <input type="radio" id="imtwo" value="two" name="importance" class="radioinput" v-model="picked"/><label
            for="imtwo"
            >2</label>
            <input type="radio" id="imthree" value="three" name="importance" class="radioinput" v-model="picked"/><label
            for="imthree"
            >3</label>
            <input type="radio" id="imfour" value="four" name="importance" class="radioinput" v-model="picked"/><label
            for="imfour"
            >4</label>
            <input type="radio" id="imfive" value="five" name="importance" class="radioinput" v-model="picked"/><label
            for="imfive"
            >5</label>
         
        </span>
      </div>
      <div class="listitem">
        <span class="itemtitle">期日ま</span
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
      Urgencypicked:"",
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
      display: flex;
      justify-content: center;
      margin-left: 5%;
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
      

label:hover {
background-color: #E2EDF9; /* マウスオーバー時の背景色を指定する */
}
label {
    display: block;
    float: left;
    margin: 5px;
    width: 30px;
    height: 30px;
    text-align: center;
    color: gray;
    cursor: pointer;
    border: 2px solid;
    border-radius: 50%;
    font-size: 20px;
    margin-left: 30px;
    margin-right: 30px;
    
}
:checked + label {
  color: #ffffff;
}


      
      
    }
  }
}
</style>
