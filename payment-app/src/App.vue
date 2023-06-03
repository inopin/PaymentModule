<template>
  <payment-page></payment-page>
</template>

<script>
import PaymentPage from './components/generalComponents/paymentPage/PaymentComponent.vue';

export default {
  name: 'App',
  components: {
    PaymentPage
  },
  data() {
    return {
      
    }
  },
  provide: {
    options: [
        {id:1, bankName:'bank1'},
        {id:2, bankName:'bank2'},
        {id:3, bankName:'bank3'},
        {id:4, bankName:'bank4'},
        {id:5, bankName:'bank5'},
      ]
  }
}
</script>

<style src="./assets/cssFiles/mainStyles.scss" lang='scss'></style>
