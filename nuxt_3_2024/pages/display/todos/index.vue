<script setup>
import TodoViewer from '~/components/TodoViewer'
</script>

<template>
  <TodoViewer title="This is fun!">
    <template v-slot:hero>
      <h3>Whoa this worked!</h3>
    </template>
  </TodoViewer>
</template>

<style></style>
