<template>
  <section>
    <h2>buttons</h2>
    <button v-for="method in paymentsMethods" :key="method.id" type="button">{{ method.name }}</button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      paymentsMethods: [
        {id:'card', name:'оплата картой'},{id:'yap', name: 'оплата через Яндекс'},{id:'sbp', name: 'оплата через СБП'}
      ],
    }
  }
}
</script>

<style>

</style>