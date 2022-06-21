<template>
  <div style="height: 600px">
    <div>ここがタスク登録</div>

    <table class="listbox">
      <tr>
        <th class="contact-item">名前</th>
        <td class="contact-body">
          <input type="text" name="名前" class="form-text" />
        </td>
      </tr>
      <tr>
        <th class="contact-item">名前</th>
        <td class="contact-body">
          <input type="text" name="名前" class="form-text" />
        </td>
      </tr>
      <tr>
        <th class="contact-item">名前</th>
        <td class="contact-body">
          <input type="text" name="名前" class="form-text" />
        </td>
      </tr>
      <tr>
        <th class="contact-item">名前</th>
        <td class="contact-body">
          <input type="text" name="名前" class="form-text" />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "PageRegister",
};
</script>

<style lang="scss" type="text/css">
.listbox {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 400px;
  .listitem {
    background-color: aqua;

    width: 60%;
    margin-left: 20%;
    height: 15%;
  }
}
</style>
