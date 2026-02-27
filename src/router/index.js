import { createRouter, createWebHistory } from 'vue-router'
import DefualtLayouts from '../layouts/DefualtLayouts.vue'
import AuthLayout from '../layouts/AuthLayout.vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Product from '../views/Product.vue'
import login from '../views/login.vue'
import Vbind from '@/views/Vbind.vue'
import Vshow from '@/views/Vshow.vue'


const routes = [
  {
    path: '/',
    component: DefualtLayouts,
    children: [
      {
        path: '',
        component: Home,
        meta: {
          footerText: 'Home Footer Content'
        }

      },
      {
        path: 'about',
        component: About,
        meta: {
          footerText: 'About Footer Content'
        }
      },
      {
        path: 'product',
        component: Product,
        meta: {
          footerText: 'Product Footer Content'
        }
        
      },
      {
        path:"Vbind",
        component:Vbind,
        meta: {
          footerText: 'Vbind Footer Content'
        }
      },
      {
        path:"Vshow",
        component:Vshow,
        meta: {
          footerText: 'Vshow Footer Content'
        }
      },
     
    ]
  },
  {
    path: '/login',
    component: AuthLayout,
    children: [
      { path: '', component: login }
    ]
  },
  {
    path: '/signup',
    component: AuthLayout,
    children: [ 
      {path: '', component: () => import('../views/signup.vue') }
    ]
  },

]

export default createRouter({
  history: createWebHistory(),
  routes
})
