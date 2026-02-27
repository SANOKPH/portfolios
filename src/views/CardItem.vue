<script setup>
import { useStore } from "../stores/cartStore.js";
const storeItem = useStore();
function addItem() {
  storeItem.addItem({
    name: "Apple",
    price: 2
  });
}
</script>

<template>
  <div>
    <h3>Cart Item Component</h3>
    <ul>
      <li v-for="(item, index) in storeItem.itemsCart" :key="index">
        {{ item.name }} -${{ item.price }} 
      </li>
    </ul>
    <button @click="addItem">Add Item</button>
  </div>
</template>
