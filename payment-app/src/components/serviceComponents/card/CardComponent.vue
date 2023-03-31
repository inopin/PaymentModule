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
      panBlur:false,
      dateBlur:false,
      cvvBlur:false,
      paymentObj: {
        pan:null,
        date:null,
        cvv:null
      }
    }
  },
  watch:{
    paymentObj: {
      handler() {
        let panMessage = this.panErrorMessage,
            dateMessage = this.dateErrorMessage,
            cvvMessage = this.cvvMessageError
        console.log(panMessage && this.panBlur && dateMessage && this.dateBlur && cvvMessage &&)
        if(errorMessage === '' && this.panBlur) {
          alert('true')
        }
      },
      deep: true
    }
  },
  computed:{
    panErrorMessage() {
      let errorMessagePan
      if(!this.paymentObj.pan) {
        errorMessagePan = 'введите номер карты'
      } else if (this.paymentObj.pan.length < 19) {
        errorMessagePan = 'пожалуйста, введите карту полностью'
      } else {
        errorMessagePan = ''
      }
      return this.panBlur? errorMessagePan: ''
    },

    dateErrorMessage() {
      let isValid = null
      if(this.paymentObj.date) {
        let splitted = this.paymentObj.date.replace(/\s/, '').split('/'), isValidDate,
          isMonthValid = false,
          isYearValid = false

      isMonthValid = parseInt(splitted[1]) === 22 ?
          parseInt(splitted[0]) >= 3 && parseInt(splitted[0]) <= 12 :
          parseInt(splitted[0]) > 0 && parseInt(splitted[0]) <= 12

      isYearValid = parseInt(splitted[1]) >= 22
      isValidDate = isMonthValid && isYearValid
      isValid = this.paymentObj.date.length >= 5 && isValidDate
      }

      if(!isValid && this.dateBlur) {
        return 'введите коррекную дату'
      } else {
        return ''
      }
    },

    cvvMessageError() {
      let errorMessageCvc
      if(!this.paymentObj.cvv) {
        errorMessageCvc = 'введите код карты'
      } else if (this.paymentObj.cvv.length < 3) {
        errorMessageCvc = 'введите полный код карты'
      } else {
        errorMessageCvc = ''
      }
      return this.cvvBlur?  errorMessageCvc : ''
    }
  },
  methods: {
    panInput() {
      // console.log(Object.keys(this.paymentObj))
      this.paymentObj.pan = inputDigits(this.paymentObj.pan)
      this.paymentObj.pan = formatPan(this.paymentObj.pan)
      this.panBlur = false
    },

    isPanBlur() {
      this.panBlur = true
    },

    isDateBlur() {
      this.dateBlur = true
    },

    isCvvBlur() {
      this.cvvBlur = true
    },

    dateInput(e) {
      if (e.inputType === 'deleteContentBackward') return
      this.dateErrorMessage = ''
      this.paymentObj.date = inputDigits(this.paymentObj.date)
      this.paymentObj.date = this.paymentObj.date.length > 4 ? this.paymentObj.date.substring(0, 2) + this.paymentObj.date.substring(4, 6) : this.paymentObj.date.substring(0, 4);

      if(this.paymentObj.date.length >= 3) {
        this.paymentObj.date = this.paymentObj.date.substring(0, 2) + ' / ' + this.paymentObj.date.substring(2, 4)
      }
      if(this.paymentObj.date.length === 2) {
        this.paymentObj.date = this.paymentObj.date + ' / '
      }
      if(this.paymentObj.date.length > 2) {
        if(parseInt(this.paymentObj.date.split(' / ')[0]) === 0) {
          this.paymentObj.date = '01' + this.paymentObj.date.substring(2, 4)
        }

        if(parseInt(this.paymentObj.date.split(' / ')[0]) > 12) {
          this.paymentObj.date = 12 + this.paymentObj.date.substring(2, 4)
        }
      }
      this.dateBlur = false
    },

    cvvInput() {
      this.paymentObj.cvv = inputDigits(this.paymentObj.cvv)
      this.cvvBlur = false
    },

  },
  emits: ['pan-submit','date-submit','cvv-submit']
}
</script>

<style src="./styles.scss" lang="scss" scoped></style>