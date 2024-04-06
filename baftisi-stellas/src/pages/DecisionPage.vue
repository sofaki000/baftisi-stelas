<template> 
<q-page class="flex page">
    <q-img src="~assets/acceptanceForm.png">  
     
     <acceptange-form />  
    </q-img>
    </q-page>
  </template>
  
  <script>
  import { useQuasar } from 'quasar'
  import { ref } from 'vue'
import AcceptangeForm from 'src/components/AcceptangeForm.vue'
  
  export default {
  components: { AcceptangeForm },
    setup () {
 
      const $q = useQuasar() 
      const name = ref(null)
      const age = ref(null)
      const invited = localStorage.getItem("invited");
      const accept = ref(false)
  
      return {
        name,
        age,
        accept,
        invited, 
  
        getDecisionLagel(){

            console.log(accept)
            if(accept.value) return "Θα έρθω!"

            else return "Δεν θα έρθω!"
        },
        onSubmit () {
          if (accept.value !== true) {
            $q.notify({
              color: 'red-5',
              textColor: 'white',
              icon: 'warning',
              message: 'You need to accept the license and terms first'
            })
          }
          else {
            $q.notify({
              color: 'green-4',
              textColor: 'white',
              icon: 'cloud_done',
              message: 'Submitted'
            })
          }
        },
  
        onReset () {
          name.value = null
          age.value = null
          accept.value = false
        }
      }
    }
  }
  </script>
  