<template>
  <section>
    <div class="input__wrapper pan">
      <input  type="tel" 
              placeholder="pan" 
              name="pan" 
              required 
              v-model="pan" 
              @input="inputDigits"
              @blur="checkValidation"
              maxlength="19">
      <div class="input-error" v-if="panErrorMessage.length">{{panErrorMessage}}</div>
    </div>
    <div class="input__wrapper date">
      <input type="tel" placeholder="date" name="date" required v-model="date">
      <div class="input-error">errorr message</div>
    </div>
    <div class="input__wrapper cvv">
      <input type="tel" placeholder="cvv" name="cvv" v-model="cvv">
      <div class="input-error">errorr message</div>
    </div>
  </section>
</template>

<script>
import {formatPan} from './../../../utils.js'
export default {
  data() {
    return {
      panErrorMessage:'',
      pan: null,
      date: null,
      cvv:null,
    }
  },
  methods: {
    inputDigits() {
      this.pan = formatPan(this.pan)
      this.panErrorMessage =''
    },
    checkValidation() {
      if(!this.pan) {
        this.panErrorMessage = 'введите номер карты'
      } else if(this.pan.length < 19) {
        this.panErrorMessage ='пожалуйста, введите карту полностью'
      } else {
        this.panErrorMessage =''
      }
    }
  }
}
</script>

<style src="./styles.scss" lang="scss" scoped></style>