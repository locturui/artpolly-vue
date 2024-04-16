<template>
  <main class="home-wrapper">
    <MainItem></MainItem>
  </main>
</template>

<script setup>
import MainItem from './MainItem.vue'
</script>

<style scoped>
.home-wrapper {
  display: flex;
  flex-direction: column;
}
</style>
