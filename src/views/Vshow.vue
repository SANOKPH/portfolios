<template>
  <div v-show="showDiv">this will hidden when clicked
  <p v-for="(many, index) in manyFoods">
  {{ many.name }}{{ many.url }}
    </p>
  </div>
  <button @click="showDiv = !showDiv">Toggle button</button>
</template>
<script setup>
import { data } from 'autoprefixer';
import { reactive, ref } from 'vue'
const showDiv = ref(false)

const manyFoods = reactive([
       {name: 'kaka', url: 'img_burrito.svg'},
        {name: 'Salad', url: 'img_salad.svg'},
        {name: 'Cake', url: 'img_cake.svg'},
        {name: 'Soup', url: 'img_soup.svg'},
        {name: 'Fish', url: 'img_fish.svg'},
        {name: 'Pizza', url: 'img_pizza.svg'},
        {name: 'Rice', url: 'img_rice.svg'}
      ]
    )

    

      
    
</script>