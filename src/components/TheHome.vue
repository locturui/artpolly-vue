<template>
  <main class="home-wrapper">
    <MainItem></MainItem>
    <AboutItem></AboutItem>
    <IconItem>
      <template #header>Творчество рядом</template>
      <template #content>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </template>
    </IconItem>
  </main>
</template>

<script setup>
import MainItem from './MainItem.vue'
import AboutItem from './AboutItem.vue'
import IconItem from './IconItem.vue'
</script>

<style scoped>
.home-wrapper {
  display: flex;
  flex-direction: column;
}
</style>
