<template>
  <div class="flex flex-col bg-gray-50">
    <!-- HEADER SLOT -->
    <header style="display:flex; margin-bottom:100px;">
    <slot name="header">
      <nav style="display:flex;width: 100%;position:fixed; gap:20px; padding:16px; background-color:white; box-shadow:0 2px 4px rgba(0,0,0,0.1);">
          <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
            <div style="display: flex; gap: 16px; font-weight: 500; font-size: 16px;">
              <router-link to="/">Home</router-link>
              <router-link to="/about">About</router-link>
              <router-link to="/product">Product</router-link>
              <router-link to="/Vbind">Vbind</router-link>
              <router-link to="/Vshow">Vshow</router-link>
            </div>
            <div>
              <router-link to="/login" style="padding: 8px 16px; color: white; background-color: #4f46e5; border-radius: 8px; text-decoration: none; font-weight: 500;" 
                        onmouseover="this.style.backgroundColor='#4338ca'" 
                        onmouseout="this.style.backgroundColor='#4f46e5'">login
              </router-link>
            </div>
          </div>
      </nav>
    </slot>
    </header>
    <!-- MAIN CONTENT -->
    <main class="flex-1 px-6 py-10 mx-auto max-w-7xl">
       <router-view /> 
      <slot />
    </main>

   <!-- ================= FOOTER SLOT ================= -->
    <!-- Footer main section -->
    <div style="
      display: flex; 
      flex-wrap: wrap; 
      justify-content: space-between; 
      gap: 20px; 
      background-color: #1f2937; 
      color: white; 
      padding: 20px;
    ">
      <!-- Column 1 -->
      <div style="flex: 1 1 200px; min-width: 200px;">
        <h3 style="font-size: 18px; font-weight: 600; color: white; margin-bottom: 8px;">VShop</h3>
        <p style="font-size: 14px; margin: 0;">Modern Vue 3 layout using slots.</p>
      </div>

      <!-- Column 2 -->
      <div style="flex: 1 1 200px; min-width: 200px;">
        <h3 style="font-size: 18px; font-weight: 600; color: white; margin-bottom: 8px;">Links</h3>
        <ul style="padding: 0; margin: 0; list-style: none;">
          <li style="margin-bottom: 4px;">Home</li>
          <li style="margin-bottom: 4px;">About</li>
          <li style="margin-bottom: 4px;">Products</li>
        </ul>
      </div>

      <!-- Column 3 -->
      <div style="flex: 1 1 200px; min-width: 200px;">
        <h3 style="font-size: 18px; font-weight: 600; color: white; margin-bottom: 8px;">Contact</h3>
        <p style="margin: 0;">Sanok@vshop.com</p>
        <p style="margin: 0;">+855 0888697720</p>
      </div>
    </div>

    <!-- Footer bottom -->
    <div style="
      margin-top: 16px; 
      text-align: center; 
      font-size: 12px; 
      color: #d1d5db;
    ">
      © 2026 VShop. All rights reserved.
    </div>

  </div>
</template>
