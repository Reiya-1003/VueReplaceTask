<template>
  <div id="footblock">
    <div class="flexitem1">
      <p><router-link to="/">楽楽業務</router-link></p>
    </div>
    <div class="flexitem2">
      <div>
        <!-- roter-linkになると思う -->
        <p><router-link to="/register">業務登録</router-link></p>
        <p><router-link to="/graph">業務分析</router-link></p>
      </div>
      <div class="item">
        <p><router-link to="/list">業務一覧</router-link></p>
        <p>業務申請</p>
      </div>
    </div>
    <div class="flexitem3">
      <p>メンバー管理</p>
      <p>承認依頼</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageFooter",
};
</script>

<style lang="scss" type="text/css">
#footblock {
  background-color: #d2b48c;
  color: white;
  display: flex;
  justify-content: space-around;

  .flexitem1 {
    width: 100%;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
    a {
      cursor: pointer;
      color: inherit;
      text-decoration: none;
    }
  }
  .flexitem2 {
    width: 100%;
    display: flex;
    padding-top: 10px;
    padding-bottom: 10px;
    justify-content: flex-start;
    a {
      cursor: pointer;
      color: inherit;
      text-decoration: none;
    }
    .item {
      padding-left: 20%;
    }
  }
  .flexitem3 {
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 5%;
    width: 100%;
    a {
      cursor: pointer;
      color: inherit;
      text-decoration: none;
    }
  }
}
</style>
