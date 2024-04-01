<template>
    <div class="q-pa-md flex flex-center" style="max-width: 100%">
  
        <q-form
        style="width: 500%"
        @submit="onSubmitCode" 
      >
      <q-input
          filled
          v-model="inviteCode"
          label="Κωδικός πρόσκλησης"
          hint="Πληκτρολογήστε τον κωδικό πρόσκλησή σας. Αν έχετε έγκυρο κωδικό θα μπορείτε να δείτε τα στοιχεία της βάφτισης"
          outlined 
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Παρακαλώ πληκτρολογήστε τον κωδικό πρόσκλησή σας ώστε να καταγράψουμε την απάντησή σας. Αν έχετε έγκυρο κωδικό θα μπορείτε να δείτε τα στοιχεία της βάφτισης']"
        />

        <div class="q-mt-md q-pb-md">
          <q-btn    label="Επιβεβαίωση κωδικού" type="submit" color="primary"/> 
        </div>
      </q-form>


      <q-form
        @submit="onSubmit"
        @reset="onReset"
        v-if="invited"
        class="q-gutter-md q-pt-md q-pb-md"
      >
      
        <q-input
          filled
          v-model="name"
          label="Όνομα"
          hint="Το ονοματεπώνυμο της οικογένειάς σας"
          outlined 
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Παρακαλώ πληκτρολογήστε το όνομα της οικογένειας σας ώστε να ξέρουμε ποιοί είστε']"
        />
  
        <q-input
          filled
          class="q-pt-md q-pb-md"
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
        <div class="q-pt-md q-pb-md" style="max-width: 100%">
    <q-input
      v-model="text"
      filled
          label="Μήνυμα προς την οικογένεια (προαιρετικό)"
      type="textarea"
    />
  </div>

        <div>
          <q-btn label="Αποστολή απάντησης" type="submit" color="primary"/>
          <q-btn label="Διαγραφή στοιχείων" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>
  
    </div>
  </template>
  
  <script>
  import { useQuasar } from 'quasar'
  import { ref } from 'vue'
  
  export default {
    setup () {

        let invited = false
      const $q = useQuasar() 
      const name = ref(null)
      const age = ref(null)
      const inviteCode = ""
      const accept = ref(false)
  
      return {
        name,
        age,
        accept,
        invited,
        inviteCode,

        onSubmitCode(){

            console.log(invited)
            if(inviteCode=="INVITED") {
                invited = true;
            }else{
                invited =false;
            }
        },
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
  