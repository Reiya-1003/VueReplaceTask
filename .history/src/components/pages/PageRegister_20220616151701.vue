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
  margin: 3px auto; 
  height: 400px;
  width: 60%;
  background-color: aqua
  ;
  tr{
    
  }
}
</style>
