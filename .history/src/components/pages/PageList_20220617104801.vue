<template>
  <div style="height: 600px">
    <!-- ★STEP4 リスト用テーブル -->
    <table style="border-collapse: separate; border-spacing: 0px 10px">
      <thead v-pre>
        <tr>
          <th class="id">内容</th>
          <th class="state">緊急度</th>
          <th class="state">重要度</th>
          <th class="state">期日</th>
        </tr>
      </thead>
      <tbody>
        <!-- ★STEP5 ToDo の要素をループ -->
        <tr style="background-color: aqua">
          <th>内容は２０字まで内容内容内容内容内容内容</th>
          <td>緊急度</td>
          <td class="state">重要度</td>
          <td class="button">2020/20/20</td>
          <td>
            <button>変更</button>
          </td>
          <td>
            <button>削除</button>
          </td>
        </tr>
        <tr style="background-color: aqua">
          <th>内容は２０字まで内容内容内容内容内容内容</th>
          <td>緊急度</td>
          <td class="state">重要度</td>
          <td class="button">2020/20/20</td>
          <td>
            <button>変更</button>
          </td>
          <td>
            <button>削除</button>
          </td>
        </tr>
        <tr style="background-color: aqua">
          <th>内容は２０字まで内容内容内容内容内容内容</th>
          <td>緊急度</td>
          <td class="state">重要度</td>
          <td class="button">2020/20/20</td>
          <td>
            <button>変更</button>
          </td>
          <td>
            <button>削除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "PageList",
  data() {
    return {
      Urgencypicked: "",
      picked: "",
    };
  },
};
</script>

<style lang="scss" type="text/css">
table {
  width: 90%;
  margin-left: 5%;
  border-collapse: separate;
  border-spacing: 0px 10px;

thead{
  tr {
    border-bottom: 2px solid #0099e4; /*#d31c4a */
    color: #0099e4;
    .id {
    width: 30%;
    text-align: center;
    
    }
    th{
      padding: 0 8px;
    line-height: 40px;
    }
    .state {
    width: 10%;
    text-align: center;
  }
  }
}
  

  
  
  // thead th.state {
  //   width: 10%;
  //   text-align: center;
  // }
  thead th.button {
    width: 60px;
  }
  tbody td.button,
  tbody td.state {
    text-align: center;
  }
  tbody tr td,
  tbody tr th {
    border-bottom: 1px solid #ccc;
    transition: all 0.4s;
    text-align: center;
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
