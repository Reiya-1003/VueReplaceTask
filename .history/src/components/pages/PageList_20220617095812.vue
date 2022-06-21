<template>
  <div style="height: 600px; ">

    <!-- ★STEP4 リスト用テーブル -->
    <table>
      <thead v-pre>
        <tr>
          <th class="id">内容</th>
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
table {
  width: 100%;
  border-collapse: collapse;
  thead th {
  border-bottom: 2px solid #0099e4; /*#d31c4a */
  color: #0099e4;
}
  th,
th {
  padding: 0 8px;
  line-height: 40px;
}
thead th.id {
  width: 50px;
}
thead th.state {
  width: 100px;
}
thead th.button {
  width: 60px;
}
tbody td.button, tbody td.state {
  text-align: center;
}
tbody tr td,
tbody tr th {
  border-bottom: 1px solid #ccc;
  transition: all 0.4s;
}
tbody tr.done td,
tbody tr.done th {
  background: #f8f8f8;
  color: #bbb;
}
tbody tr:hover td,
tbody tr:hover th {
  background: #f4fbff;
}
}



  
</style>
