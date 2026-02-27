import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useUserStore = defineStore("user", () => {
  // state
  const user = ref(null);
  const isLoggedIn = ref(false);

  // getters (computed)
  const userEmail = computed(() => user.value?.email || "");

  const isAdmin = computed(() => user.value?.isAdmin || false);

  // actions
  function login(userData) {
    user.value = userData;
    isLoggedIn.value = true;
  }

  function logout() {
    user.value = null;
    isLoggedIn.value = false;
  }

  // must return everything
  return {
    user,
    isLoggedIn,
    userEmail,
    isAdmin,
    login,
    logout
  };
});
