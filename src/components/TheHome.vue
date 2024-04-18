<template>
  <main class="home-wrapper">
    <MainItem></MainItem>
    <NarrowSection><AboutItem /></NarrowSection>
    <NarrowSection><InfoIcons /></NarrowSection>
    <ClassesSection></ClassesSection>
    <TheFooter></TheFooter>
  </main>
</template>

<script setup>
import MainItem from './MainItem.vue'
import NarrowSection from './NarrowSection.vue'
import InfoIcons from './InfoIcons.vue'
import AboutItem from './AboutItem.vue'
import ClassesSection from './ClassesSection.vue'
import TheFooter from './TheFooter.vue'
</script>

<style scoped>
.home-wrapper {
  display: flex;
  flex-direction: column;
}
</style>
