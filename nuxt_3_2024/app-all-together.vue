<script setup>
import { ref, reactive } from "vue";
import PhotoGallery from './components/PhotoGallery'
import TodoViewer from './components/TodoViewer'

// https://stackoverflow.com/questions/61452458/ref-vs-reactive-in-vue-3
//  initialize a ref with any JavaScript primitive e.g. String, Number, Object, etc.
let newPhotoRef = ref({
  id: 123,
  title: 'Best photo ever 1!'
});
// // !!!!! I normally use ref as I find it more flexible.
// newPhotoRef.value.title

// reactive can only be initialized with an object
let newPhotoReactive = reactive({
  id: 123,
  title: 'Best photo ever 2!'
});
// newPhotoReactive.title
// // >>> Wrong - Don't destructure reactive
// let { title } = newPhotoReactive
// title = "new name"
// // >>> Right
// newPhotoReactive.title = "new name"
</script>

<template>
  <div class="container">
    <div class="section">
      <div class="columns">
        <div class="column">
          <TodoViewer title="This is fun!">
            <template v-slot:hero>
              <h3>Whoa this worked!</h3>
            </template>
          </TodoViewer>
        </div>
        <div class="column">
          <PhotoGallery />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import 'bulma/css/bulma.min.css';
</style>

<style lang="scss">
@import './assets/styles/main.scss';
</style>
