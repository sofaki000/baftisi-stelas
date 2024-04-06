<template>  
  <q-page class="flex flex-start page">
    <img 
      alt="Quasar logo"
      src="~assets/landingPage.jpg"
      style="width: 100%; height: 100%;"
    > 
  </q-page> 
</template>

<script>
 
export default { 
  data() {
    return { 
      invited: false
    }
  },  

  // Lifecycle hooks are called at different stages
  // of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {
    var isInvited= localStorage.getItem("invited");
    console.log(`are u invited ${isInvited}.`)
  }
}
</script>

<style scoped>

.page{
  background-color: rgb(250 248 251);
}
</style>