<template>
  <div style="height: 600px; ">

    <!-- ★STEP4 リスト用テーブル -->
    <table>
      <thead v-pre>
        <tr>
          <th class="id">ID</th>
          <th class="comment">コメント</th>
          <th class="state">状態</th>
          <th class="button">-</th>
        </tr>
      </thead>
      <tbody>
        <!-- ★STEP5 ToDo の要素をループ -->
        <tr>
          <th>id</th>
          <td>naiyou</td>
          <td class="state">
            <!-- ★STEP10 状態変更ボタン -->
            <button >
              変更
            </button>
          </td>
          <td class="button">
            <!-- ★STEP10 削除ボタン -->
            <button >
              削除
            </button>
          </td>
        </tr>
      </tbody>
    </table>
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
