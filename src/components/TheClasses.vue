<template>
  <div class="content-wrapper">
    <div v-if="!isMobile">
      <NarrowSection>
        <div v-for="(cat, i) in data" class="wrapper" :key="cat.ID">
          <InfoItem imgUrl="/image/photo_about.jpeg" :classes="[i % 2 == 1 ? '' : 'reverse']">
            <template #header>{{ cat.Title }}</template>
            <template #content>{{ cat.Description }} </template>
            <template #button>
              <ActionButton :classes="['btn', 'dark-btn']">Записаться</ActionButton>
            </template>
          </InfoItem>
        </div>
      </NarrowSection>
    </div>

    <!-- Display content without NarrowSection on mobile -->
    <div v-else>
      <div v-for="(cat, i) in data" class="wrapper" :key="cat.ID">
        <InfoItem imgUrl="/image/photo_about.jpeg" :classes="[i % 2 == 1 ? '' : 'reverse']">
          <template #header>{{ cat.Title }}</template>
          <template #content>{{ cat.Description }} </template>
          <template #button>
            <ActionButton :classes="['btn', 'dark-btn']">Записаться</ActionButton>
          </template>
        </InfoItem>
      </div>
    </div>

    <TheFooter></TheFooter>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useWindowSize } from '@vueuse/core'
import InfoItem from './InfoItem.vue'
import ActionButton from './ActionButton.vue'
import NarrowSection from './NarrowSection.vue'
import TheFooter from './TheFooter.vue'

const { width } = useWindowSize()
const isMobile = computed(() => width.value < 768)

const uri = import.meta.env.VITE_BASE_URI
const res = await fetch(uri + '/class')
const data = await res.json()
</script>

<style scoped>
.wrapper {
  margin-bottom: 8em;
}

/* Add padding-top to the content wrapper */
.content-wrapper {
  padding-top: 3em; /* Adjust this value based on the height of your fixed navbar */
}

/* Mobile-specific padding adjustments */
@media (max-width: 768px) {
  .content-wrapper {
    padding-top: 6em; /* Adjust padding for mobile if necessary */
  }
}
</style>
