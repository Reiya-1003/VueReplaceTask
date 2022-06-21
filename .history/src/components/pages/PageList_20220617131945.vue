<template>
  <div style="height: 600px">
    <!-- ★STEP4 リスト用テーブル -->
    <table >
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
        <tr style="background-color: lightgray">
          <th>内容は２０字まで内容内容内容内容内容内容</th>
          <td class="state"><div>2</div></td>
          <td class="state"><div>2</div></td>
          <td class="button">2020/20/20</td>
          <td style="background-color: white;"> 
            <b-button variant="primary" style="width:100%; padding: 10px; "><router-link to="/graph">変更</router-link></b-button>
          </td>
          <td style="background-color: white;">
            <b-button variant="danger" style="width:100%; padding: 10px;">削除</b-button>
          </td>
        </tr>
        <tr style="background-color: lightgray">
          <th>内容は２０字まで内容内容内容内容内容内容</th>
          <td class="state"><div>2</div></td>
          <td class="state"><div>2</div></td>
          <td class="button">2020/20/20</td>
          <td style="background-color: white;">
            <b-button variant="primary" style="width:100%; padding: 10px;">変更</b-button>
          </td>
          <td style="background-color: white;">
            <b-button variant="danger" style="width:100%; padding: 10px;">削除</b-button>
          </td>
        </tr>
        <tr style="background-color: lightgray">
          <th>内容は２０字まで内容内容内容内容内容内容</th>
          <td class="state"><div>2</div></td>
          <td class="state"><div>2</div></td>
          <td class="button">2020/20/20</td>
          <td style="background-color: white;">
          <b-button variant="primary" style="width:100%; padding: 10px;">変更</b-button>
          </td>
          <td style="background-color: white;">
            <b-button variant="danger" style="width:100%; padding: 10px;">削除</b-button>
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
div{
table {
  width: 90%;
  margin-left: 5%;
  border-collapse: separate;
  border-spacing: 0px 20px;
  

thead{
  tr {
    border-bottom: 2px solid #0099e4; /*#d31c4a */
    
    .id {
    width: 30%;
    text-align: center;
    
    }
    th{
      padding: 0 8px;
    line-height: 40px;
    }
    .state {
    width: 16%;
    text-align: center;
  }
  }
}
tbody{
  td{
    .button,.state{
      text-align: center;
    }
  }
  tr{
    td,th{
    transition: all 0.4s;
    text-align: center;
    padding: 0.5%;
    }
    .body{
      th{
        background: #f8f8f8;
        color: #bbb;
      }
      td{
        background: #f8f8f8;
        color: #bbb;
      }
    }
    .state{
    
    padding-left: 7%;
     div{
    width: 30px;
    height: 30px;
    text-align: center;
    color: gray;
    border: 2px solid;
    border-radius: 50%;
    font-size: 17px;
    
     }

    }
  }
  // :hover{
  //   td,th{
  //     background: #f4fbff;
  //   }
  // }
  
}
  
}
}
</style>
