<template>
  <div class="login-container">
    <div class="login-card">
      <h2 class="login-title">Welcome Back</h2>
      <p class="login-subtitle">Sign in to your account</p>

     <form @submit.prevent="handleLogin">
    <div class="input-group">
      <label for="email">Email</label>
      <input
        type="email"
        id="email"
        v-model="email"
        placeholder="Enter your email"
        required
      />
    </div>

    <div class="input-group">
      <label for="password">Password</label>
      <input
        type="password"
        id="password"
        v-model="password"
        placeholder="Enter your password"
        required
      />
    </div>
        <button type="submit" class="login-btn">Login</button>
      </form>
    <p class="signup-text">
      If you don't have an account,
      <router-link to="/signup">Sign Up</router-link>
    </p>
    </div>
  </div>
</template>
<script setup>
import "../assets/index.css";
import { ref } from "vue";
import { useUserStore } from "../stores/user";
import { useRouter } from "vue-router";

const userStore = useUserStore();
const router = useRouter();

const email = ref("");
const password = ref("");

function handleLogin() {
  if (
    email.value === "payangsanok@gmail.com" &&
    password.value === "12345"
  ) {
    userStore.login({
      email: email.value,
      isAdmin: false
    });

    alert(`Welcome back, ${email.value}`);

    // ✅ redirect after successful login
    router.push("/");
  } else {
    alert("Invalid email or password!");
  }
}
</script>

<style scoped>
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body, html {
  height: 100%;
  background: linear-gradient(to right, #4facfe, #00f2fe);
}

/* Center the login form */
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.login-card {
  background-color: #fff;
  padding: 40px 30px;
  border-radius: 15px;
  box-shadow: 0 15px 25px rgba(0,0,0,0.2);
  width: 350px;
  text-align: center;
}

.login-title {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #333;
}

.login-subtitle {
  font-size: 14px;
  margin-bottom: 30px;
  color: #777;
}

.input-group {
  margin-bottom: 20px;
  text-align: left;
}

.input-group label {
  display: block;
  margin-bottom: 5px;
  color: #555;
  font-size: 14px;
}

.input-group input {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
  transition: 0.3s;
}

.input-group input:focus {
  border-color: #4facfe;
  box-shadow: 0 0 5px rgba(79,172,254,0.5);
}

.login-btn {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background: #4facfe;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}

.login-btn:hover {
  background: #00f2fe;
}

.signup-text {
  margin-top: 20px;
  font-size: 14px;
  color: #555;
}

.signup-text a {
  color: #4facfe;
  text-decoration: none;
  font-weight: 500;
}

.signup-text a:hover {
  text-decoration: underline;
}


</style>
