<template>
  <div style="height: 600px">
    <div>ここがタスク登録</div>

    <div class="listbox">
      <div class="listitem">
        <span class="itemtitle">内容</span
        ><span class="item"><input type="text" class="textinput" /></span>
      </div>
      <div class="listitem">
        <span class="itemtitle">緊急度</span>
        <span class="item">
          <input type="radio" name="Urgency" class="radioinput" /><label
            for="select1"
            >あああああ</label
          >
          <input type="radio" name="Urgency" class="radioinput" /><label
            for="select2"
            >ああああああ</label
          >
          <input type="radio" name="Urgency" class="radioinput" /><label
            for="select3"
            >あああああ</label
          >
          <input type="radio" name="Urgency" class="radioinput" /><label
            for="select4"
            >ああああああ</label
          >
          <input type="radio" name="Urgency" class="radioinput" /><label
            for="select5"
            >あああああ</label
          >
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
      input[type=radio] {
display: none; /* ラジオボタンを非表示にする */

}
label {
display: block; /* ブロックレベル要素化する */
float: left; /* 要素の左寄せ・回り込を指定する */
margin: 5px; /* ボックス外側の余白を指定する */
width: 100px; /* ボックスの横幅を指定する */
height: 45px; /* ボックスの高さを指定する */
padding-left: 5px; /* ボックス内左側の余白を指定する */
padding-right: 5px; /* ボックス内御右側の余白を指定する */
color: #b20000; /* フォントの色を指定 */
text-align: center; /* テキストのセンタリングを指定する */
line-height: 45px; /* 行の高さを指定する */
cursor: pointer; /* マウスカーソルの形（リンクカーソル）を指定する */
border: 2px solid #006DD9;/* ボックスの境界線を実線で指定する */
border-radius: 5px; /* 角丸を指定する */
}


      
      
    }
  }
}
</style>
