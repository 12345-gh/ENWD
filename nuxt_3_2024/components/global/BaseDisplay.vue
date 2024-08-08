<script setup>
import { defineEmits, defineProps, ref } from 'vue'

const props = defineProps({
  itemList: {
    type: Array,
    default: () => []
  },
  itemType: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['update:itemList'])

// const fetchItemList = async () => {
// !!!!! use "use..." func as hooks on top level
// useAsyncData(`${props.itemType}Query`, () => {
//   $fetch(`https://jsonplaceholder.typicode.com/${props.itemType}`)
//     .then(response => {
//       // Еміте пропс в модель v-model:itemList="photoGallery" де можна засетити локальне значення photoGallery
//       emit('update:itemList', response)
//     })
// })

// OR

// const data = await $fetch(`https://jsonplaceholder.typicode.com/${props.itemType}`)
// emit('update:itemList', data)
// }

// OR

const { data, execute } = useFetch(`https://jsonplaceholder.typicode.com/${props.itemType}`, {
  method: 'GET',
  immediate: false,
  watch: false
})

emit('update:itemList', data)

onMounted(() => {
  // fetchItemList();
  execute();
})
</script>

<template>
  <!-- Generic Template -->
  <div class="section">
    <slot name="hero" />
    <h1 class="title">{{ title }}</h1>
    <!-- <div>
      <button @click="fetchItemList">Fetch Data</button>
    </div> -->
    <slot name="metrics" />
    <ul class="photo-gallery-list">
      <!-- :itemList="itemList" - відправляє пропс назад в <template v-slot:items="slotProps"> -->
      <slot name="items" :itemList="itemList" />
    </ul>
  </div>
</template>

<style></style>