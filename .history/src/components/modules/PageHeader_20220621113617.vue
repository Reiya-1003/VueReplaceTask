<template>
  <header id="headerblock">
    <h1 id="title"><router-link to="/">楽楽業務</router-link></h1>
  </header>
</template>

<script>
export default {
  name: "PageHeader",
};
</script>

<style lang="scss" type="text/css">
#headerblock {
  height: 10%;
  width: 100%;
  background-color: #ffd700;
  h1 {
    margin: 0;
    text-align: center;
    padding: 2%;
    color: white;
    font-size: 10vh;
    font-weight: normal;
    a {
      cursor: pointer;
      color: inherit;
      text-decoration: none;
    }
  }
}
</style>
