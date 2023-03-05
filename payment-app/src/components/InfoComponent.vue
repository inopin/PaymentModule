<template>
  <section>
    <h2>info blok</h2>
  <ul>
    <li v-for="item in items" :key="item.id">{{ item.name }}</li>
  </ul>
  </section>
  
</template>

<script>
export default {
  data() {
      return {
        items: [{name: "item1"},{name: "item2"},{name: "item3"}]
      }
    }
}
</script>

<style>

</style>