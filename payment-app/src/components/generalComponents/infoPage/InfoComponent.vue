<template>
  <section>
    <div class="information">
      <div class="information__logo">
        <img src="../../../assets/images/mainLogo.svg" alt="logo">
        <span class="information__logo-text">Наименование компании</span>
      </div>
      

      <h1>Оплата заказа</h1>
      <ul class="information__list">
        <li 
          class="information__list-item" 
          v-for="item in items" 
          :key="item.id">
            <span>{{ item.name }}</span>
            <span>{{ item.title }}</span>
        </li>
      </ul>
      <div class="information__bottom-logo">
        <img src="../../../assets/images/bottomLogo.svg" alt="logo">
      </div>
    </div>
  <form-page-component></form-page-component>
  </section>
  
</template>

<script>
import FormPageComponent from '../formPage/FormComponent.vue'
export default {
  components: {
    FormPageComponent
  },
  data() {
      return {
        items: [{
          name: "Описание заказа", 
          title: 'Оплата заказа №2347775в магазине'
        },
        {
          name: "Номер заказа",
          title: "3123 3123 12312"
        },
        {
          name: "ФИО",
          title: "Петров Петр Петрович"
        }]
      }
    }
}
</script>

<style src="./styles.scss" lang='scss' scoped></style>