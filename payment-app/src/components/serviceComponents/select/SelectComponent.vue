<template>
  <div class="select">
    <input type="hidden" v-model="this.selectedOption">
    <p class="title" @click="this.listVisible = !this.listVisible">{{ this.selectedOption }}</p>
    <div class="options" v-if="this.listVisible">
      <div class="search">
        <input type="text" placeholder="выберите банк" v-model="searchValue">
      </div>
      <div v-for="item in searchArray"
        :key="item.index"
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
      },
      search(val, arr) {
        let result = []
        arr.forEach(item =>{
          if(item.bankName.indexOf(val)!=-1) {
            result.push(item)
          }
        })
        this.searchArray = result
      },
    },
    watch:{
        searchValue: function() {
          this.searchArray = this.options
          this.search(this.searchValue, this.searchArray)
        }
    },
    mounted(){
      //  document.addEventListener('click', this.hideSelect.bind(this), true)
    },
    beforeUnmount(){
      // document.removeEventListener('click', this.hideSelect.bind(this), true)
    },
    data() {
      return {
        listVisible: false,
        selectedOption: 'выберите банк',
        searchValue:'',
        searchArray : this.options
      }
    }
  }
</script>

<style src="./styles.scss" lang="scss" scoped></style>