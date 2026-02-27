<script setup>
const getImage= (img)=> `/images/${img}`
const products = [
  { id: 1, name: 'Laptop Pro', price: '$1200', desc: 'High performance laptop', img: 'headphone.png' },
  { id: 2, name: 'Smart Phone', price: '$800', desc: 'Latest generation phone', img: 'laptop.png' },
  { id: 3, name: 'Wireless Headphones', price: '$150', desc: 'Noise cancelling', img: 'phone.png' },
  { id: 4, name: 'Smart Watch', price: '$220', desc: 'Health tracking device', img: 'watch.png' },
]
</script>

<template>
  <div class="container">
    <!-- Header -->
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:30px;">
      <h1 class="title">Products</h1>
      <button class="btn">+ Add Product</button>
    </div>

    <!-- Product Grid -->
    <div style="display:flex; justify-content:space-evenly; flex-wrap:wrap; gap:20px;">
        <div class="card" v-for="item in products" :key="item.id" style="width: 23%; height:300px; padding:15px; box-sizing:border-box;">
          <div class="product-img" style="text-align:center; margin-bottom:5px;">
          <img :src="getImage(item.img)" alt="{{ item.name }}" style="width:100%; height:100%;" />
        </div>
        <h3>{{ item.name }}</h3>
        <p>{{ item.desc }}</p>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:15px;">
          <strong style="color:#4f46e5">{{ item.price }}</strong>
          <button class="btn">View</button>
        </div>
      </div>
    </div>

  </div>
</template>
