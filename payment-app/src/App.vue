<template>
  <payment-page></payment-page>
</template>

<script>
import PaymentPage from './components/PaymentPage.vue';

export default {
  name: 'App',
  components: {
    PaymentPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
section {
  border: 1px solid blue;
}
form {
  border: 1px solid red;
}
</style>
