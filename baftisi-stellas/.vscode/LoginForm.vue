<template>
    <div class="q-pa-md q-pa-md flex flex-center">
        <q-form 
        @submit="onSubmitCode" 
      > 

      <div  class="q-pb-md"> 
      <q-input   
          v-model="inviteCode"
          label="Κωδικός πρόσκλησης"
          hint="Πληκτρολογήστε τον κωδικό πρόσκλησή σας. Αν έχετε έγκυρο κωδικό θα μπορείτε να δείτε τα στοιχεία της βάφτισης"
          outlined 
          lazy-rules
          class="q-pa-md"
          :rules="[ val => val && val.length > 0 || 'Παρακαλώ πληκτρολογήστε τον κωδικό πρόσκλησή σας ώστε να καταγράψουμε την απάντησή σας. Αν έχετε έγκυρο κωδικό θα μπορείτε να δείτε τα στοιχεία της βάφτισης']"
        />
      </div>

        <div class="q-mt-lg">
          <q-btn @click="onSubmitCode" label="Επιβεβαίωση κωδικού" type="submit" color="primary"/> 
        </div>
      </q-form>
 </div>

  </template>
   
   <script>  
export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
        invited:false,
        inviteCode:""
    }
  },
  computed:{ 

    isInvited(){
      return localStorage.getItem("invited");
    } 
  },
  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event handlers in templates.
  methods: {
    onSubmitCode(){ 
            console.log(this.invited)
            console.log(this.inviteCode) 
            if(this.inviteCode=="INVITED") {
              this.invited = true;
              localStorage.setItem("invited", true);

              this.$router.push({ path: '/invited' });
            }else{
              this.invited =false;
            }
        } 
  },

  // Lifecycle hooks are called at different stages
  // of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
}
</script>
