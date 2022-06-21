<template>
  <div>
      <PageHeader />

        <!-- <PageHome /> -->
        <router-view />

      <PageFooter />
  </div>
</template>

<script>
import PageHeader from "./components/modules/PageHeader";
import PageFooter from "./components/modules/PageFooter";


export default {
  name: 'App',
  components: {
    PageHeader,
    PageFooter,
   
    
  },
 
}
</script>

<style>

</style>
