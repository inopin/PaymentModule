<template>
  <form ref="form" @submit.prevent = "submitHandler"
    method="post"
    action="/something"
    novalidate>
    <h2>Выберите способ оплаты</h2>
  <main-buttons></main-buttons>
  <card-input
      :is-submitted="isSubmitted"
      @card-data-change="onCardDataChanged"
  />
  <select-component
      placeholder="Выберите банк"
      :incoming-array="options"
      value-name = "bankName"
      id-name="id"
  />
  <amount-page ></amount-page>
  <section class="submit__wrapper">
    <button class="submit">ОПЛАТИТЬ</button>
  </section>
  </form>
</template>

<script>

import MainButtons from '../../serviceComponents/mainButtons/MainButtonsPage.vue';
import CardInput from '../../serviceComponents/card/CardComponent.vue';
import AmountPage from '../../serviceComponents/amount/AmountComponent.vue';
import SelectComponent from '../../serviceComponents/select/SelectComponent.vue';

export default {
  inject: {
      options: {
        type: Array,
        default() {
          return []
        }
      }
    },
  components:{
    MainButtons,
    CardInput,
    AmountPage,
    SelectComponent
  },
  data() {
    return {
      paymentObj:null,
      isPaymentDataValid: false,
      isSubmitted: false,
      selectArray:[]
    }
  },
  methods: {
    submitHandler() {
      this.isSubmitted = true
      if(this.isPaymentDataValid ) {
        alert(JSON.stringify(this.paymentObj) )
        this.$refs.form.submit()
      }
    },

    onCardDataChanged(data) {
      this.paymentObj = data
      this.isPaymentDataValid = data.isValid
    },
  }
}
</script>

<style src="./styles.scss" lang='scss' scoped></style>