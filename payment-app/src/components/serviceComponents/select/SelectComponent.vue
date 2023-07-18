<template>
  <div class="select">
    <div class="search">
        <input type="text" v-bind:placeholder="placeholder"
        v-model="itemName"
        @click="listVisible = !listVisible">
    </div>
    <div class="options" v-if="listVisible">
      <div v-for="item in filteredOptions"
        :key="item[idName]"
        class="item"
        @click="selectedItem(item)">
        <p>{{ item[valueName] }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import { ref,computed } from 'vue'
  export default {

    props:{
      placeholder:String,
      incomingArray:{
        type:Array,
        required: true
      },
      idName:{
        type:String,
        required: true
      },
      valueName: {
        type: String,
        required: true
      }
    },
    setup(props) {
      console.log(props)
      let listVisible = ref(false)
      let itemName = ref('')

      const selectedItem = (item) =>{
        console.log(item)
        itemName = item[this.valueName]
        hideSelect
      }
      const hideSelect = () => {
        this.listVisible= false
      }
      const filteredOptions = computed(()=>{
        return props.incomingArray.filter(option => {
          return option[props.valueName].toLowerCase().includes(itemName.value.toLowerCase())
        })
      })

      return {
        listVisible,
        itemName,
        selectedItem,
        filteredOptions
      }
    }
    // data() {
    //   return {
    //     listVisible: false,
    //     itemName: ''

    //   }
    // },
    // methods: {
    //   selectItem(item) {
    //     this.itemName = item[this.valueName]
    //     this.hideSelect()
    //   },
    //   hideSelect() {
    //     this.listVisible= false
    //   }
    // },
    // computed: {
    //   filteredOptions(){
    //     return this.incomingArray.filter(option => {
    //       return option[this.valueName].toLowerCase().includes(this.itemName.toLowerCase())
    //     })
    //   }
    // },
    // mounted(){
    //    document.addEventListener('click', this.hideSelect.bind(this), true)
    // },
    // beforeUnmount(){
    //   document.removeEventListener('click', this.hideSelect.bind(this), true)
    // }

  }
</script>

<style src="./styles.scss" lang="scss" scoped></style>