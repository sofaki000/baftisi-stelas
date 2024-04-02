<template>  
  <q-page  class="flex flex-center"> 
    <LoginForm />
  </q-page>
  
</template>

<script>

import LoginForm from "../components/LoginForm.vue"

export default {  
  data() {
    return { 
      invited: false
    }
  },
  components:{
    LoginForm
  } 
}
</script>
