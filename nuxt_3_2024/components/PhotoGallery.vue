<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router';

const route = useRoute();

let photoGallery = ref([])

const numberOfPhotos = computed(() => {
  return photoGalleryLimited.value.length
})

const photoGalleryLimited = computed(() => {
  // http://localhost:3000/display/photos?showAll=true
  if (route.query.showAll) {
    return photoGallery.value
  } else {
    return photoGallery.value.slice(0, 50)
  }

})
</script>

<template>
  <BaseDisplay :title="`Photo Gallery of ${numberOfPhotos} photos`" itemType="photos" v-model:itemList="photoGallery">
    <template v-slot:hero> </template>
    <template v-slot:items="slotProps">
      <li v-for="photo in photoGalleryLimited" :key="`photo-id-${photo.id}`">
        <img :src="photo.thumbnailUrl" />
      </li>

      <pre class="photo-gallery-item-list">{{ slotProps.itemList }}</pre>
    </template>
  </BaseDisplay>
</template>

<style lang="scss">
.photo-gallery-list {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}

.photo-gallery-item-list {
  grid-column: 1 / span 4;
}
</style>