<script setup>
  import CardItem from './CardItem.vue';
</script>

<template>
  <div class="container">

    <!-- Hero -->
    <div class="hero">
      <h1>About VShop</h1>
      <p>VShop is a modern Vue 3 project with professional layouts, routing, and interactive UI components.</p>
    </div>

    <!-- Features Cards -->
    <div class="grid grid-3">
      <div class="card">
        <h3>🚀 Fast</h3>
        <p>Built with Vue 3 Composition API for speed and efficiency.</p>
      </div>
      <div class="card">
        <h3>🎨 Clean UI</h3>
        <p>Modern and responsive design using CSS with hover effects and shadows.</p>
      </div>
      <div class="card">
        <h3>🧩 Scalable</h3>
        <p>Layout-based architecture allows easy expansion of the app.</p>
      </div>
    </div>

    <!-- Mission -->
    <div class="card" style="margin-top:50px;">
      <h2>Our Mission</h2>
      <p>
        Our mission is to help developers understand Vue layouts, router integration,
        and professional UI design patterns through interactive and real-world examples.
      </p>
    </div>
    <div><CardItem /></div>

  </div>
</template>
