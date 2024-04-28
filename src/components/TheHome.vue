<template>
  <main class="home-wrapper">
    <MainItem></MainItem>
    <NarrowSection><AboutItem /></NarrowSection>
    <NarrowSection><InfoIcons /></NarrowSection>
    <Suspense>
      <ClassesSection></ClassesSection>
      <template #fallback> Loading... </template>
    </Suspense>
    <ScheduleSection></ScheduleSection>
    <Suspense>
      <EventsSection></EventsSection>
      <template #fallback> Loading... </template>
    </Suspense>
    <MapSection></MapSection>
    <ContactSection id="contacts"></ContactSection>
    <TheFooter></TheFooter>
  </main>
</template>

<script setup>
import MainItem from './MainItem.vue'
import NarrowSection from './NarrowSection.vue'
import InfoIcons from './InfoIcons.vue'
import AboutItem from './AboutItem.vue'
import EventsSection from './EventsSection.vue'
import ClassesSection from './ClassesSection.vue'
import MapSection from './MapSection.vue'
import ContactSection from './ContactSection.vue'
import TheFooter from './TheFooter.vue'
import ScheduleSection from './ScheduleSection.vue'
</script>

<style scoped>
.home-wrapper {
  display: flex;
  flex-direction: column;
}
</style>
