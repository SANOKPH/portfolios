
<script setup>
    import { computed, reactive, ref} from 'vue'
    import Card from '@/components/Card.vue';
    import '../assets/index.css';
    import Childe from '../components/componentVmodel.vue'
    import secondChild from '../components/secondChild.vue';
    import card from './card.vue';
  
    const Cards = reactive([
        { id: 1, name: 'John', prize: '1000$' , brand: 'Adidas',color: 'blue'},
        { id: 2, name: 'Doe', prize: '1500$' , brand: 'Nike',color: 'red'},
        { id: 3, name: 'Smith', prize: '1200$' , brand: 'Puma',color: 'white'},
        { id: 4, name: 'John', prize: '1000$' , brand: 'Adidas',color: 'blue'},
        { id: 5, name: 'Doe', prize: '1500$' , brand: 'Nike',color: 'red'},
        { id: 6, name: 'Smith', prize: '1200$' , brand: 'Puma',color: 'white'},
          { id: 7, name: 'John', prize: '1000$' , brand: 'Adidas',color: 'blue'},
        { id: 8, name: 'Doe', prize: '1500$' , brand: 'Nike',color: 'red'},
        { id: 9, name: 'justin', prize: '1600$' , brand: 'Nike',color: 'black'},
        { id: 10, name: 'Daron', prize: '1400$' , brand: 'Nike',color: 'yellow'}
    ])
    const addCard = ()=>{
        Cards.push(
            {
                id: Cards.length + 1,
                name:'Vannda',
                prize:'2000$',
                brand: 'Next Brand',
                color: 'yellow'
            }
        )
    }

const deleteCard = (id) => {
    for (let i = 0; i < Cards.length; i++) {
        if (Cards[i].id === id) {
            Cards.splice(i, 1);
            break;
        }
    }
}
const buttonChange = () => {
    for (let i = 0; i < Cards.length; i++) {
            Cards[i].name = "kaka",
            Cards[i].prize = "2000$",
            Cards[i].brand = "New Brand",
            Cards[i].color = "Black"
    }
}

const buttonChangeColor = ()=>{
    for ( let i =0; i<Cards.length; i++){
        Cards[i].color =  Cards[i].color === 'red' ? 'blue' : 'red'
    }
}
const title = ref("");
const Capitalize = computed(() => {
    return title.value.toUpperCase();
});
const message = ref("");
const checked = ref(false);
const checkedNames = ref([]);
const picked = ref("");
const selected = ref("");
const options = ref([
    { text: "One", value: "A"},
    { text: "Two", value: "B"},
    { text: "Three", value: "C"},
])

const say = (event)=>{
    alert(event);
}

const warn = (message,event)=>{
   // now we have access to the native event
  if (event) {
    event.preventDefault()
  }
  alert(message)
    
}
const msg = ref('');
</script>
<template>
  <RouterView>
     <!-- ================= HEADER SLOT ================= -->
    <template #header>
    <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 20px; background-color: #f9fafb;">
      <h1 style="font-size: 24px; font-weight: bold; color: #4f46e5;">
        Hello sanok 412 🎉 VShop
      </h1>
    </div>
  </template>

    <!-- ======================================page content====================================== -->
    <div style="display: flex; flex-wrap: wrap;">
    <Card 
      v-for="card in Cards" 
      :key="card.id" 
      :id="card.id" 
      :name="card.name" 
      :prize="card.prize"
      :brand="card.brand"
      :card="card"
      :style="{ color: card.color }"
       @remove="deleteCard"
       @change="buttonChange"
       @changeColor="buttonChangeColor"
    />
    </div>
    <button @click="addCard">Add Card</button>
    <div>
    <h2 class="bg-red-300">{{ Capitalize }}</h2>
    <input v-model="title" />
    </div> 
  <div class="form-container">
    <!-- Multiline message -->
    <div class="form-group">
      <span>Multiline message is:</span>
      <p class="message-box">{{ message }}</p>
      <textarea v-model="message" placeholder="Add multiple lines" class="textarea"></textarea>
    </div>

    <!-- Single checkbox -->
    <div class="form-group checkbox-group">
      <input type="checkbox" id="checkbox" v-model="checked" />
      <label for="checkbox">Checked: {{ checked }}</label>
    </div>

    <!-- Multiple checkboxes -->
    <div class="form-group">
      <span>Checked names: {{ checkedNames }}</span>
      <div class="checkbox-list">
        <div>
          <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
          <label for="jack">Jack</label>
        </div>
        <div>
          <input type="checkbox" id="john" value="John" v-model="checkedNames" />
          <label for="john">John</label>
        </div>
        <div>
          <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
          <label for="mike">Mike</label>
        </div>
        <div>
          <input type="checkbox" id="nana" value="Nana" v-model="checkedNames" />
          <label for="nana">Nana</label>
        </div>
      </div>
    </div>

    <!-- Radio buttons -->
    <div class="form-group">
      <span class="radio-title">Radio checked name: {{ picked }}</span>
      <div class="radio-list">
        <div>
          <input type="radio" id="one" value="One" v-model="picked" />
          <label for="one">One</label>
        </div>
        <div>
          <input type="radio" id="two" value="Two" v-model="picked" />
          <label for="two">Two</label>
        </div>
        <div>
          <input type="radio" id="three" value="Three" v-model="picked" />
          <label for="three">Three</label>
        </div>
      </div>
    </div>

    <!-- Select dropdown -->
    <div class="form-group">
      <span>Selected: {{ selected }}</span>
      <select v-model="selected" class="select">
      <option v-for="option in options" :value="option.value" :key="option.value">
        {{ option.text }}
   
      </option>
        
      </select>
    </div>
    <select v-model="selected">
  <!-- inline object literal -->
  <option :value="{ number: 123 }">123</option>
 </select>
 <!-- Calling Methods in Inline Handlers  -->
 <div>
	<button @click="say('hello')">Say hello</button>
	<button @click="say('bye')">Say bye</button>
	<button @click="say('Morning')">Say Morning</button>
	<button @click="say('Evening')">Say Evening</button>
	<button @click="say('Good night')">Say Good night</button>
 </div>

  <!-- Accessing Event Argument in Inline Handlers -->
  <div>
  <!-- using $event special variable -->
  <button @click="warn('Form cannot be submitted yet.', $event)">
    Submit
  </button>
  <!-- using inline arrow function -->
  <button @click="(event) => warn('Form cannot be submitted yet.', event)">
    Submit
  </button>
  </div>
  <!-- componentVmodel -->
  <div>
  <h1>{{ msg }}</h1>
    <Childe v-model="msg" />
  </div>
  <div>
  <secondChild :modelValue="foo" @update:modelValue="$event => (foo = $event)" />

  </div>
  </div>
  <div>
    <h2>Card Component with Pinia Store</h2>
    <card />
  </div>
  
  </RouterView>
</template>
