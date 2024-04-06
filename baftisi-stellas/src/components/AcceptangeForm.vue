<template> 
      <q-form
        @submit="onSubmit"
        @reset="onReset"
        v-if="invited"
        class="acceptanceForm q-pa-lg"
      >
      <q-img src="~assets/acceptanceFormText.png" />  
        <q-input 
          class="q-pt-lg q-pb-md"
          v-model="name"
          label="Όνομα"
          hint="Το ονοματεπώνυμο της οικογένειάς σας"
          outlined 
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Παρακαλώ πληκτρολογήστε το όνομα της οικογένειας σας ώστε να ξέρουμε ποιοί είστε']"
        />
  
        <q-input 
          class="q-pt-lg q-pb-md"
          type="number"
          outlined 
          v-model.number="age" 
          label="Αριθμός ατόμων"
          lazy-rules
          :rules="[
            val => val !== null && val !== '' || 'Παρακαλώ πληκτρολογήστε τον αριθμό των ατόμων που θα έρθουν στην βάφτιση',
            val => val > 0 && val < 100 || 'Δεν μπορείτε να προσκαλέσετε τόσα άτομα'
          ]"
        />
  
        <div> 
        <q-toggle v-model="accept" :label="getDecisionLagel()"/>

       
    </div>
        
    <q-input
      v-model="text"
      outlined=""
      class="q-mt-md"
      label="Μήνυμα προς την οικογένεια (προαιρετικό)"
      type="textarea"
    /> 
          <q-btn class="q-mt-md" label="Αποστολή απάντησης" type="submit" color="primary"/> 
       
      </q-form>
   
  </template>
  
  <style scoped>
  .acceptanceForm{
    margin:auto;
margin-top:10%;
  }
  </style>
  <script>
  import { useQuasar } from 'quasar'
  import { ref } from 'vue'
  
  export default {
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
  