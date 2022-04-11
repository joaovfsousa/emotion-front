<template>
  <div class="container">
    <p>Bem vindo {{name}}!</p>
    <button @click="logout"> Logout </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      name: 'name'
    })
  },
  methods: {
    logout() {
      sessionStorage.clear()
      this.$router.push('/login')
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