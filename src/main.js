import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import Home from './pages/home.vue'
import Login from './pages/login.vue'

import './assets/global.css'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login },
]

const router = createRouter( {
  history: createWebHistory(),
  routes,
} )

createApp( App ).use( router ).mount( '#app' )