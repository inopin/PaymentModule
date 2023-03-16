<template>
  <form v-on:submit.prevent>
    <h2>Выберите способ оплаты</h2>
  <main-buttons></main-buttons>
  <card-input
   @pan-submit="panToObj"
   @date-submit="dateToObj"
   @cvv-submit="cvvToObj"
  ></card-input>
  <!-- <yandex-pay></yandex-pay> -->
  <!-- <sbp-page></sbp-page> -->
  <!-- <saved-cards></saved-cards> -->
  <!-- <email-page></email-page> -->
  <amount-page></amount-page>
  <!-- <submit-button></submit-button> -->
  <section class="submit__wrapper">
    <button class="submit" @click="submitHandler">ОПЛАТИТЬ</button>
  </section>
  </form>
</template>

<script>

import MainButtons from '../../serviceComponents/mainButtons/MainButtonsPage.vue';
import CardInput from '../../serviceComponents/card/CardComponent.vue';
// import YandexPay from '../../serviceComponents/YandexPay.vue';
// import SbpPage from '../../serviceComponents/SbpPage.vue';
// import EmailPage from '../../serviceComponents/EmailPage.vue';
import AmountPage from '../../serviceComponents/amount/AmountComponent.vue';
// import SubmitButton from '../../serviceComponents/submit/SubmitComponent.vue';
// import SavedCards from '../../serviceComponents/SavedCards.vue';



export default {
  components:{
    MainButtons,
    CardInput,
    // YandexPay,
    // SbpPage,
    // EmailPage,
    AmountPage,
    // SubmitButton,
    // SavedCards
  },
  data() {
    return {
      paymentObj: {
        pan:null,
        date:null,
        cvv:null
      }
    }
  },
  methods: {
    submitHandler() {
      if(this.paymentObj.pan && this.paymentObj.date && this.paymentObj.cvv) {
        console.log('form submitted',this.paymentObj)
      } else {
        console.warn('invalid Data')
      }

    },
    panToObj(pan) {
      this.paymentObj.pan = pan
    },
    dateToObj(date) {
      this.paymentObj.date = date
    },
    cvvToObj(cvv) {
      this.paymentObj.cvv = cvv
    }
  }
}
</script>

<style src="./styles.scss" lang='scss' scoped></style>