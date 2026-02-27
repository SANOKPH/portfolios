<template>
<p>The browser sets the font-size based on the value of 'size' in the Vue instance.</p>

<div id="app" v-bind:style="{ height:app.height, width:app.width, color: app.color, backgroundColor: app.backGroundcolor }">
  <div v-bind:style="{ fontSize: size }">Text example</div>
  <div>
  <img :src="url" alt="image" style="width: 400px; height: 200px;" />
  </div>
</div>

</template>

<script setup>
import { reactive, ref } from 'vue';
const size = ref("50px");
const app = reactive(
  {
    width: "400px",
    height:"300px",
    margin: "200px",
    padding: "200px",
    color:"red",
    backGroundcolor:"black",

  }
)
const url = ref( "https://www.w3schools.com/w3css/img_beach3.jpg" );
</script>

