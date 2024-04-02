<template>
  <q-item
    clickable
    tag="a"
    target="_blank"
    :href="props.link"
  >

  
    <q-item-section
      v-if="props.icon"
      avatar
    > 
    <q-img :src="imageName"/> 
    </q-item-section>

    <q-item-section> 
      <q-item-label>{{ props.title }}</q-item-label>
      <q-item-label caption>{{ props.caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script  >

export default{
  name: 'EssentialLink',
  computed:{
    imageName(){
      return $`../assets/` + this.props.icon
    }
  }, 
  props:{
    title: {
    type: String,
    required: true
  },

  caption: {
    type: String,
    default: ''
  },

  link: {
    type: String,
    default: '#'
  },

  icon: {
    type: String,
    default: ''
  }
  }
} 
 
</script>
