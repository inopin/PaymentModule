<template>
  <section>
    <div class="input__wrapper pan">
      <input  type="tel"
              placeholder="pan"
              name="pan"
              required
              v-model="paymentData.pan"
              @input="panInput"
              @blur="checkInputValidation('panBlur')"
              maxlength="19"
              novalidate>
      <div class="input-error" v-if="(panBlur || isSubmitted) && panError">{{panError}}</div>
    </div>
    <div class="input__wrapper date">
      <input  type="tel"
              placeholder="date"
              name="date"
              required
              v-model="paymentData.date"
              maxlength="9"
              @input="dateInput"
              @blur="checkInputValidation('dateBlur')"
              novalidate
              >
      <input type="hidden" name="month"
              th:value="${page.cardData != null && page.cardData.month != null  ? page.cardData.month : ''}"
              id="month"/>
      <input type="hidden" name="year"
              th:value="${page.cardData != null && page.cardData.year != null  ? page.cardData.year : ''}"
              id="year"/>
      <div class="input-error" v-if="(dateBlur || isSubmitted) && dateError">{{dateError}}</div>
    </div>
    <div class="input__wrapper cvv">
      <input  type="tel"
              placeholder="cvv"
              name="cvv"
              v-model="paymentData.cvv"
              maxlength="3"
              @input = "cvvInput"
              @blur = "checkInputValidation('cvvBlur')"
              novalidate
              >
      <div class="input-error" v-if="(cvvBlur || isSubmitted) && cvvError">{{cvvError}}</div>
    </div>
  </section>
</template>

<script>
import {formatPan, inputDigits} from './../../../utils.js'
export default {
  data() {
    return {
      panBlur: false,
      dateBlur: false,
      cvvBlur:false,
      paymentData: {
        pan: null,
        date: null,
        cvv: null,
      }
    }
  },

  watch: {
    isValid(value){
          if(value) {
            this.$emit('card-data-change',{data:this.paymentData, isValid:value} )
          }
      }
  },
  props:{
    isSubmitted:{
      type: Boolean,
      required:true
    }
  },
  computed: {
    isValid() {
      return !(this.panError && this.dateError && this.cvvError)  //добавить тачтд
    },

    panError() {
      if(!this.paymentData.pan) {
        return 'введите карту'
      } else if(this.paymentData.pan.length < 19) {
        return 'введите карту полностью'
      } return ''
    },

    dateError() {
      let isValid = null
      if(this.paymentData.date) {
        let splitted = this.paymentData.date.replace(/\s/, '').split('/'), isValidDate,
          isMonthValid = false,
          isYearValid = false

      isMonthValid = parseInt(splitted[1]) === 22 ?
          parseInt(splitted[0]) >= 3 && parseInt(splitted[0]) <= 12 :
          parseInt(splitted[0]) > 0 && parseInt(splitted[0]) <= 12

      isYearValid = parseInt(splitted[1]) >= 22
      isValidDate = isMonthValid && isYearValid
      isValid = this.paymentData.date.length >= 5 && isValidDate
      }

      if(!isValid) {
        return 'введите коррекную дату'
      } else {
        return ''
      }
    },
    cvvError() {
      if(!this.paymentData.cvv) {
        return 'пожалуйста введите код карты'
      } else if (this.paymentData.cvv.length < 3) {
        return'пожалуйста введите полный код карты'
      } else {
        return ''
      }
    }
  },

  methods: {
    panInput() {
      this.paymentData.pan = inputDigits(this.paymentData.pan)
      this.paymentData.pan = formatPan(this.paymentData.pan)
    },

    checkInputValidation(inputName) {
      this[inputName] = true
    },

    dateInput(e) {
      if (e.inputType === 'deleteContentBackward') return
      this.dateErrorMessage = ''
      this.paymentData.date = inputDigits(this.paymentData.date)
      this.paymentData.date = this.paymentData.date.length > 4 ? this.paymentData.date.substring(0, 2) + this.paymentData.date.substring(4, 6) : this.paymentData.date.substring(0, 4);

      if(this.paymentData.date.length >= 3) {
        this.paymentData.date = this.paymentData.date.substring(0, 2) + ' / ' + this.paymentData.date.substring(2, 4)
      }
      if(this.paymentData.date.length === 2) {
        this.paymentData.date = this.paymentData.date + ' / '
      }
      if(this.paymentData.date.length > 2) {
        if(parseInt(this.paymentData.date.split(' / ')[0]) === 0) {
          this.paymentData.date = '01' + this.paymentData.date.substring(2, 4)
        }

        if(parseInt(this.paymentData.date.split(' / ')[0]) > 12) {
          this.paymentData.date = 12 + this.paymentData.date.substring(2, 4)
        }
      }
    },

    cvvInput() {
      this.paymentData.cvv = inputDigits(this.paymentData.cvv)
      this.cvvMessageError = ''
    },




  },
  emits: ['card-data-change']
}
</script>

<style src="./styles.scss" lang="scss" scoped></style>