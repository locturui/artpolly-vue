<script setup>
import TheClasses from '../components/TheClasses.vue'
import NavBar from '../components/NavBar.vue'
</script>

<template>
  <NavBar />
  <Suspense><TheClasses></TheClasses></Suspense>
</template>

<style scoped>
section {
  width: 100%;
}
</style>
