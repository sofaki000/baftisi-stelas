<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Βάφτιση της Στέλας
        </q-toolbar-title>

        <div>Θα χαρούμε να σας δούμε εκεί!</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Μενού
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

defineOptions({
  name: 'MainLayout'
})

const linksList = [
  {
    title: 'Πληφοροφίες',
    caption: 'Τοποθεσία βάφτισης, επικοινωνήστε μαζί μας',
    icon: 'event',
    link: 'http://localhost:9000/#/information'
  },
  {
    title: 'Αποδεχτείται την πρόσκληση',
    caption: 'Πείτε μας αν θα μπορέσετε να έρθετε για να υπολογίσουμε τον αριθμό των καλεσμένων',
    icon: 'done',
    link: 'http://localhost:9000/#/decision'
  },
  
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
