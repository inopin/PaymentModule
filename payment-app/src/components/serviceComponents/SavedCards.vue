<template>
    <section>
      <h1>Экран сохраненных карт</h1>
    <ul>
        <li v-for="card in savedCardsArr" :key="card.id"> {{ card }}</li>
    </ul>
    
    </section>
    
  </template>
  
  <script>
    export default {
      data() {
        return {
            savedCardsArr: ['1', '2', '3']
        }
      }
    }
  </script>