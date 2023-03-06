<template>
  <section class="amount">
    <div class="amount__item">
      <p>Fee</p>
      <p>{{paymentData.fee}}</p>
    </div>

    <div class="amount__item">
      <p>Total Amount</p>
      <p>{{paymentData.amount}}</p>
    </div>
    
  </section>
</template>

<script>
export default {
  data() {
   return {
    paymentData:{
      amount: 1000,
      fee: 10
    }
   } 
  }
}
</script>

<style src="./styles.scss" lang="scss" scoped></style>