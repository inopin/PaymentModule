<template>
  <section>
    <div class="input__wrapper pan">
      <input  type="tel"
              placeholder="pan"
              name="pan"
              required
              v-model="paymentObj.pan"
              @input="panInput"
              @blur="isPanBlur"
              maxlength="19"
              novalidate>
      <div class="input-error">{{panErrorMessage}}</div>
    </div>
    <div class="input__wrapper date">
      <input  type="tel"
              placeholder="date"
              name="date"
              required
              v-model="paymentObj.date"
              maxlength="9"
              @input="dateInput"
              @blur="isDateBlur"
              novalidate
              >
      <input type="hidden" name="month"
              th:value="${page.cardData != null && page.cardData.month != null  ? page.cardData.month : ''}"
              id="month"/>
      <input type="hidden" name="year"
              th:value="${page.cardData != null && page.cardData.year != null  ? page.cardData.year : ''}"
              id="year"/>
      <div class="input-error" v-if="dateErrorMessage.length">{{dateErrorMessage}}</div>
    </div>
    <div class="input__wrapper cvv">
      <input  type="tel"
              placeholder="cvv"
              name="cvv"
              v-model="paymentObj.cvv"
              maxlength="3"
              @input = "cvvInput"
              @blur = "isCvvBlur"
              novalidate
              >
      <div class="input-error" v-if="cvvMessageError.length">{{cvvMessageError}}</div>
    </div>
  </section>
</template>

<script>
import {formatPan, inputDigits} from './../../../utils.js'
export default {
  data() {
    return {
      paymentObject: {
        pan:null,
        date:null,
        cvv:null
      }
    }
  },
  watch:{

  },
  computed:{


    // dateErrorMessage() {
    //   let isValid = null
    //   if(this.paymentObj.date) {
    //     let splitted = this.paymentObj.date.replace(/\s/, '').split('/'), isValidDate,
    //       isMonthValid = false,
    //       isYearValid = false

    //   isMonthValid = parseInt(splitted[1]) === 22 ?
    //       parseInt(splitted[0]) >= 3 && parseInt(splitted[0]) <= 12 :
    //       parseInt(splitted[0]) > 0 && parseInt(splitted[0]) <= 12

    //   isYearValid = parseInt(splitted[1]) >= 22
    //   isValidDate = isMonthValid && isYearValid
    //   isValid = this.paymentObj.date.length >= 5 && isValidDate
    //   }

    //   if(!isValid && this.dateBlur) {
    //     return 'введите коррекную дату'
    //   } else {
    //     return ''
    //   }
    // },


  },
  methods: {

  },
}
</script>

<style src="./styles.scss" lang="scss" scoped></style>