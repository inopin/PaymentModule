<template>
  <section>
    <div class="input__wrapper pan">
      <input  type="tel"
              placeholder="pan"
              name="pan"
              required
              v-model="pan"
              @input="panInput"
              @blur="checkPanValidation"
              maxlength="19"
              novalidate>
      <div class="input-error" v-if="panErrorMessage.length">{{panErrorMessage}}</div>
    </div>
    <div class="input__wrapper date">
      <input  type="tel"
              placeholder="date"
              name="date"
              required
              v-model="date"
              maxlength="9"
              @input="dateInput"
              @blur="checkCardDateValidation"
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
              v-model="cvv"
              maxlength="3"
              @input = "cvvInput"
              @blur = "checkCvvValidation"
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
      cvvMessageError:'',
      panErrorMessage:'',
      dateErrorMessage:'',
      pan: null,
      date: null,
      cvv:null,
    }
  },
  methods: {
    panInput() {
      this.pan = inputDigits(this.pan)
      this.pan = formatPan(this.pan)
      this.panErrorMessage =''
    },

    checkPanValidation() {
      if(!this.pan) {
        this.panErrorMessage = '?????????????? ?????????? ??????????'
      } else if(this.pan.length < 19) {
        this.panErrorMessage ='????????????????????, ?????????????? ?????????? ??????????????????'
      } else {
        this.panErrorMessage =''
      }
    },

    dateInput(e) {
      if (e.inputType === 'deleteContentBackward') return
      this.dateErrorMessage = ''
      this.date = inputDigits(this.date)
      this.date = this.date.length > 4 ? this.date.substring(0, 2) + this.date.substring(4, 6) : this.date.substring(0, 4);

      if(this.date.length >= 3) {
        this.date = this.date.substring(0, 2) + ' / ' + this.date.substring(2, 4)
      }
      if(this.date.length === 2) {
        this.date = this.date + ' / '
      }
      if(this.date.length > 2) {
        if(parseInt(this.date.split(' / ')[0]) === 0) {
          this.date = '01' + this.date.substring(2, 4)
        }

        if(parseInt(this.date.split(' / ')[0]) > 12) {
          this.date = 12 + this.date.substring(2, 4)
        }
      }
    },

    checkCardDateValidation() {
      let isValid = null
      if(this.date) {
        let splitted = this.date.replace(/\s/, '').split('/'), isValidDate,
          isMonthValid = false,
          isYearValid = false

      isMonthValid = parseInt(splitted[1]) === 22 ?
          parseInt(splitted[0]) >= 3 && parseInt(splitted[0]) <= 12 :
          parseInt(splitted[0]) > 0 && parseInt(splitted[0]) <= 12

      isYearValid = parseInt(splitted[1]) >= 22
      isValidDate = isMonthValid && isYearValid
      isValid = this.date.length >= 5 && isValidDate
      }

      if(!isValid) {
        this.dateErrorMessage = '?????????????? ?????????????????? ????????'
      } else {
        this.dateErrorMessage = ''
      }
    },

    cvvInput() {
      this.cvv = inputDigits(this.cvv)
      this.cvvMessageError = ''
    },

    checkCvvValidation() {
      if(!this.cvv) {
        this.cvvMessageError = '???????????????????? ?????????????? ?????? ??????????'
      } else if (this.cvv.length < 3) {
        this.cvvMessageError = '???????????????????? ?????????????? ???????????? ?????? ??????????'
      } else {
        this.cvvMessageError = ''
      }
    }
  }
}
</script>

<style src="./styles.scss" lang="scss" scoped></style>