<!-- Card.vue -->
<script setup>
    import { defineProps } from 'vue';
const Cards = defineProps({
  id: Number,
  name: String,
  prize: String,
  brand: String,
  Cards: Object,
})

const emit = defineEmits(['remove', 'change','changeColor']);
</script>
<template>
    <div 
      style="margin: 5px; padding: 10px; border: 1px solid #000; background-color: green; color: white; border-radius: 10px;"
    >
      <p>ID: {{ Cards.id }}</p>
      <p>Name: {{ Cards.name }}</p>
      <p>Prize: {{ Cards.prize }}</p>
      <p>Brand: {{ Cards.brand }}</p>   
       <button @click="emit('remove', Cards.id)">
      Delete
    </button>
       <button @click="emit('change', Cards.name, Cards.prize, Cards.brand)">
      Change Title
    </button>
       <button @click="emit('changeColor', Cards.name, Cards.prize, Cards.brand)">
      Change Color
    </button>
    </div>

    
    
</template>

<style scoped></style>

