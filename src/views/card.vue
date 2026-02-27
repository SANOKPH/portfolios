<script setup>
import { useCounterStore } from "../stores/counter";

const counter = useCounterStore();

function increase() {
  counter.increment();
}

function decrease() {
  counter.decrement();
}
function reset(){
  counter.reset();
}

</script>

<template>
  <div>
    <h2>Count: {{ counter.count }}</h2>
    <button @click="increase">+</button>
    <button @click="decrease">-</button>
    <button @click="reset">Reset</button>
  </div>
</template>
