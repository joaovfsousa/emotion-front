import { createStore } from 'vuex'
import LoginService from './services/login'


const store = createStore( {
  state () {
    return {
      token: sessionStorage.getItem( 'token' ),
      username: null,
      name: null,
      userId: null
    }
  },
  actions: {
    async login ( { commit }, { username, password } ) {
      const { data: { token } } = await LoginService.post( 'login', {
        username, password
      } )
      commit( 'setToken', token )
      sessionStorage.setItem( 'token', token )
    }
  },
  mutations: {
    setToken ( state, token ) {
      state.token = token
    }
  }
} )

export default store