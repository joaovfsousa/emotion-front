<template>
<div class="container">
  <input
    :value="username"
    @input="event => username = event.target.value"
    type="text"
    placeholder="Nome de usuário"
  />
  <input
    :value="password"
    @input="event => password = event.target.value"
    type="password"
    placeholder="Senha"
  />
  <button @click="login">Logar</button>
</div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async login(){
      await this.$store.dispatch('login', {username: this.username, password: this.password})
      this.$router.push({path:'/'})
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
  input {
    margin-bottom: 16px;
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
