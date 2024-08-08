<script setup>
const route = useRoute();

</script>

<template>
  <h2>This is task id: {{ route.params.id }}</h2>
</template>

<style lang="css" scoped></style>
