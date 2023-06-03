<template>
  <div class="select">
    <input type="hidden" v-model="this.selectedOption">
    <p class="title" @click="this.listVisible = !this.listVisible">{{ this.selectedOption }}</p>
    <div class="options" v-if="this.listVisible">
      <div v-for="item in options"
        :key="item.id"
        class="item"
        @click="selectItem(item)">
        <p>{{ item.bankName }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    inject: {
      options: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      selectItem(item) {
        this.selectedOption = item.bankName,
        this.hideSelect()
      },
      hideSelect() {
        this.listVisible= false
      }
    },
    mounted(){
       document.addEventListener('click', this.hideSelect.bind(this), true)
    },
    beforeUnmount(){
      document.removeEventListener('click', this.hideSelect.bind(this), true)
    },
    data() {
      return {
        listVisible: false,
        selectedOption: 'выберите банк'
      }
    }
  }
</script>

<style src="./styles.scss" lang="scss" scoped></style>