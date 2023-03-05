<template>
  <form>
    <h2>main Page</h2>
  <main-buttons></main-buttons>
  <card-input></card-input>
  <yandex-pay></yandex-pay>
  <sbp-page></sbp-page>
  <email-page></email-page>
  <amount-page></amount-page>
  <submit-button></submit-button>
  </form>
</template>

<script>

import MainButtons from './MainButtons.vue';
import CardInput from './CardInput.vue';
import YandexPay from './YandexPay.vue';
import SbpPage from './SbpPage.vue';
import EmailPage from './EmailPage.vue';
import AmountPage from './AmountPage.vue';
import SubmitButton from './SubmitButton.vue';



export default {
  components:{
    MainButtons,
    CardInput,
    YandexPay,
    SbpPage,
    EmailPage,
    AmountPage,
    SubmitButton
  }
}
</script>

<style>

</style>