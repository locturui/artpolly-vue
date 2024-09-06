<template>
  <main class="home-wrapper">
    <MainItem></MainItem>

    <!-- Conditionally render AboutItem based on screen size -->
    <template v-if="!isMobile">
      <NarrowSection><AboutItem /></NarrowSection>
    </template>
    <template v-else>
      <AboutItem />
    </template>

    <!-- Conditionally render InfoIcons based on screen size -->
    <template v-if="!isMobile">
      <NarrowSection><InfoIcons /></NarrowSection>
    </template>
    <template v-else>
      <InfoIcons />
    </template>

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

    <Suspense>
      <ContactSection id="contacts"></ContactSection>
    </Suspense>

    <TheFooter></TheFooter>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { useWindowSize } from '@vueuse/core'
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

// Get window size using VueUse's useWindowSize
const { width } = useWindowSize()

// Determine if the screen is mobile (less than 768px)
const isMobile = computed(() => width.value < 768)
</script>

<style scoped>
.home-wrapper {
  display: flex;
  flex-direction: column;
}
</style>

