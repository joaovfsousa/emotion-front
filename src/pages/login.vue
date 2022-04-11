<template>
<div class="container">
  <span class="error-message" v-if="errorMessage !== null">{{errorMessage}}</span>
  <input
    :value="username"
    @input="event => username = event.target.value"
    type="text"
    placeholder="Nome de usuário" 
    @keyup.enter="login"
  />
  <input
    :value="password"
    @input="event => password = event.target.value"
    type="password"
    placeholder="Senha"
    @keyup.enter="login"
  />
  <button @click="login">Logar</button>
</div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      errorMessage: null
    }
  },
  methods: {
    async login(){
      const loader = this.$loading.show({container: null, color: '#0095ff', loader: 'spinner'})
      try {
        await this.$store.dispatch('login', {username: this.username, password: this.password})
        this.$router.push({path:'/'})
      } catch(err) {
        if(err.response?.data) {
          this.errorMessage = err.response.data.message
        } else {
          this.errorMessage = "Não foi possível fazer o seu login, tente mais tarde"
        }
      } finally {
        loader.hide()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 100vh !important;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
  .error-message {
    max-width: 190px;
    margin-bottom: 8px;
    border: 1px solid red;
    background-color: #ff000022;
    border-radius: 10px;
    color: grey;
    padding: 2px 8px;
  }
  input {
    margin-bottom: 16px;
    width: 200px;
  }
  button {
    background-color: #0095ff;
    &:hover, &:focus {
      background-color: #07c;
    }
    padding: 4px 16px;
    border: 0;
    border-radius: 10px;
    color: white;
  }
}

</style>
