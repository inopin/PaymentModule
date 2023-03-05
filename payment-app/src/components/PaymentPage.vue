<template>
  <section>
    <h1>Экран платежа</h1>
  <info-component></info-component>
  <main-page></main-page>
  <footer>
    <p>
      тут будут красивые иконки и прочаяя шляпа
    </p>
  </footer>
  </section>
  
</template>

<script>
import InfoComponent from './InfoComponent.vue';
import MainPage from './MainPage.vue';
  export default {
    components: {
      InfoComponent,
      MainPage,
    },
    data() {
      return {
      }
    }
  }
</script>