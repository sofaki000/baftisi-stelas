<template>  
  <q-page  class="flex flex-center">
    <img 
      alt="Quasar logo"
      src="~assets/frontPage.png"
      style="width: 70%; height: 100%; object-fit: cover;"
    > 
  </q-page>
  
</template>

<script>
 
export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      count: 0,
      invited: false
    }
  }, 
   
  methods: {
    increment() {
      this.count++
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
