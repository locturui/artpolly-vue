<template>
  <main class="home-wrapper">
    <MainItem></MainItem>
    <AboutItem></AboutItem>
  </main>
</template>

<script setup>
import MainItem from './MainItem.vue'
import AboutItem from './AboutItem.vue'
</script>

<style scoped>
.home-wrapper {
  display: flex;
  flex-direction: column;
}
</style>
