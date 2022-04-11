import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import store from './store'

import App from './App.vue'
import Home from './pages/home.vue'
import Login from './pages/login.vue'

import './assets/global.css'

import SessionService from './services/session'

const routes = [
  {
    path: '/', name: 'Home', component: Home, meta: {
      requiresAuth: true
    }
  },
  { path: '/login', name: 'Login', component: Login },
]

const router = createRouter( {
  history: createWebHistory(),
  routes,
} )

createApp( App ).use( store ).use( router ).mount( '#app' )

router.beforeEach( async ( to, from, next ) => {
  const token = sessionStorage.getItem( 'token' )
  if ( to.matched.some( ( record ) => record.meta.requiresAuth ) ) {
    if ( token === null ) {
      next( {
        path: '/login'
      } );
    } else {
      try {
        SessionService.defaults.headers[ 'authorization' ] = token;
        const { data } = await SessionService.get( 'session' );
        store.dispatch( 'setUserInfo', data )
        next();
      } catch ( err ) {
        console.log( err )
        next( {
          path: '/login',
          params: { nextUrl: to.fullPath },
        } );
      }
    }
  } else {
    next();
  }
} );