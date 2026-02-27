import { defineStore } from "pinia";
import { ref } from "vue";

export const useStore = defineStore("cart", () => {
    const itemsCart = ref([]);
    function addItem(item) {
        itemsCart.value.push(item);
    }
    return { itemsCart, addItem }

})

