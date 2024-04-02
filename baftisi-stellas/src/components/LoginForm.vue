<template>
    <div class="q-pa-md flex flex-center" style="max-width: 100%">
  
        <q-form
        style="width: 500%"
        @submit="onSubmitCode" 
      > 
      <q-input   
          v-model="inviteCode"
          label="Κωδικός πρόσκλησης"
          hint="Πληκτρολογήστε τον κωδικό πρόσκλησή σας. Αν έχετε έγκυρο κωδικό θα μπορείτε να δείτε τα στοιχεία της βάφτισης"
          outlined 
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Παρακαλώ πληκτρολογήστε τον κωδικό πρόσκλησή σας ώστε να καταγράψουμε την απάντησή σας. Αν έχετε έγκυρο κωδικό θα μπορείτε να δείτε τα στοιχεία της βάφτισης']"
        />

        <div class="q-mt-md q-pb-md">
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
