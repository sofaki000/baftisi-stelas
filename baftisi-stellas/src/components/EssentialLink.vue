<template>
  <q-item
    clickable
    tag="a"
    target="_blank"
    :href="this.link"
  >  
    <q-item-section
    v-if="this.icon"
      avatar
    > 
    <q-img   spinner-color="white" :src="imageName"/> 
    </q-item-section>

    <q-item-section> 
      <q-item-label>{{ this.title }}</q-item-label>
      <q-item-label caption>{{ this.caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script  >

export default{
  props: ['title', "caption", "link", "icon"],
  name: 'EssentialLink',
  computed:{
    imageName(){  
      return this.icon
    }
  }
} 
 
</script>
