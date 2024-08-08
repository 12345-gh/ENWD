<script>
import { defineNuxtComponent } from '#app';


export default defineNuxtComponent({
  data: () => ({
    photoGallery: []
  }),
  computed: {
    numberOfPhotos() {
      return this.photoGallery.length
    },
    firstTenPhotos() {
      return this.photoGallery.slice(0, 10)
    }
  },
  methods: {
    fetchPhotoGallery() {
      fetch('https://jsonplaceholder.typicode.com/photos/')
        .then(response => response.json())
        .then(json =>
          this.photoGallery = json
        )
    }
  },
  mounted() {
    this.fetchPhotoGallery();
  }
})
</script>

<template>
  <div>
    <img src="/photo1.avif" width="600" height="300" />

    <div>{{ numberOfPhotos }} photos</div>
    <ul>
      <li v-for="photo in firstTenPhotos" :key="photo.id">
        <img :src="photo.thumbnailUrl" />
      </li>
    </ul>

  </div>
</template>
