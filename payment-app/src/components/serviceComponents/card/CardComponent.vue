<template>
  <section>
    <div class="input__wrapper pan">
      <input type="tel" placeholder="pan" name="pan">
      <div class="input-error">errorr message</div>
    </div>
    <div class="input__wrapper date">
      <input type="tel" placeholder="date" name="date">
      <div class="input-error">errorr message</div>
    </div>
    <div class="input__wrapper cvv">
      <input type="tel" placeholder="cvv" name="cvv">
      <div class="input-error">errorr message</div>
    </div>
  </section>
</template>

<script>
// import InputPage from '../input/InputPage.vue';
export default {
  // template: {
  //   InputPage
  // },
  data() {
    return {

    }
  }
}
</script>

<style src="./styles.scss" lang="scss" scoped></style>