<template>
  <section>
    <h2>here's the money</h2>
    <div>
      <p>Total Amount</p>
      <strong><p>{{paymentData.amount}}</p></strong>
    </div>
    <div>
      <p>Fee</p>
      <strong><p>{{paymentData.fee}}</p></strong>
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

<style>

</style>