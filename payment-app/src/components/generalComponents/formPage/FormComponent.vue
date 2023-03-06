<template>
  <form>
    <h2>Выберите способ оплаты</h2>
  <main-buttons></main-buttons>
  <card-input></card-input>
  <!-- <yandex-pay></yandex-pay> -->
  <!-- <sbp-page></sbp-page> -->
  <!-- <saved-cards></saved-cards> -->
  <!-- <email-page></email-page> -->
  <amount-page></amount-page>
  <submit-button></submit-button>
  </form>
</template>

<script>

import MainButtons from '../../serviceComponents/mainButtons/MainButtonsPage.vue';
import CardInput from '../../serviceComponents/card/CardComponent.vue';
// import YandexPay from '../../serviceComponents/YandexPay.vue';
// import SbpPage from '../../serviceComponents/SbpPage.vue';
// import EmailPage from '../../serviceComponents/EmailPage.vue';
import AmountPage from '../../serviceComponents/amount/AmountComponent.vue';
import SubmitButton from '../../serviceComponents/submit/SubmitComponent.vue';
// import SavedCards from '../../serviceComponents/SavedCards.vue';



export default {
  components:{
    MainButtons,
    CardInput,
    // YandexPay,
    // SbpPage,
    // EmailPage,
    AmountPage,
    SubmitButton,
    // SavedCards
  }
}
</script>

<style src="./styles.scss" lang='scss' scoped></style>