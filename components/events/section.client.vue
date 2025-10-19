<template>
  <section class="events-section">
      <div class="section-header">
        <div class="header-accent"></div>
        <h1>Ближайшие события</h1>
        <p class="subtitle">Присоединяйтесь к нашим мастер-классам и выставкам</p>
      </div>
    <div class="event-wrapper">
      <Carousel :items-to-show="columns" :items-to-scroll="columns" :snap-align="'start'" :wrap-around="true">
        <Slide v-for="event of events" :key="event.id">
          <EventsItem :imgUrl="event.url">
            <template #name>{{ event.name }}</template>
            <template #content>{{ event.content }} </template>
          </EventsItem>
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>
  </section>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()

const columns = computed(() => {
  if (width.value >= 1200) return 4 
  if (width.value >= 768) return 3
  return 1
})

interface Event {
  ID: number
  Title: string
  Description: string
  ImageURL: string
}

const { data: eventsData } = await useFetch<Event[]>('/api/event')

const events = computed(() => {
  if (!eventsData.value) return []
  
  return eventsData.value.map((e: Event) => ({
    id: e.ID,
    name: e.Title,
    content: e.Description,
    url: e.ImageURL
  }))
})
</script>

<style scoped>
.events-section {
  padding: 5em 2em;
  background: linear-gradient(135deg, var(--sage) 0%, var(--sage-light) 50%, var(--accent) 100%);
  position: relative;
  overflow: hidden;
}

.events-section::before {
  content: '';
  position: absolute;
  top: -40%;
  left: -15%;
  width: 700px;
  height: 700px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}

.events-section::after {
  content: '';
  position: absolute;
  bottom: -35%;
  right: -10%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(45, 40, 34, 0.04) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}

.section-header {
  text-align: center;
  margin-bottom: 4em;
  position: relative;
  z-index: 10;
}

.header-accent {
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent);
  margin: 0 auto 1.5em;
  border-radius: 2px;
}

h1 {
  color: white;
  margin-bottom: 0.5em;
}

.subtitle {
  font-size: 1.1em;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 400;
  margin-top: 0.8em;
}

.event-wrapper {
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
  padding: 0 1em 2em;
  overflow: visible;
}

.event-wrapper :deep(.carousel) {
  overflow: visible;
}

.event-wrapper :deep(.carousel__viewport) {
  overflow: visible;
}

.event-wrapper :deep(.carousel__track) {
  padding: 1em 0 2em;
}

@media (max-width: 768px) {
  .events-section {
    padding: 5em 1.5em;
  }

  .section-header {
    margin-bottom: 3em;
  }

  .header-accent {
    width: 60px;
    margin-bottom: 1em;
  }

  .subtitle {
    font-size: 1em;
  }
}

@media (max-width: 480px) {
  .events-section {
    padding: 4em 1em;
  }

  .section-header {
    margin-bottom: 2.5em;
  }

  .event-wrapper {
    padding: 0 0.5em 2em;
  }

  .events-section::before,
  .events-section::after {
    display: none;
  }
}
</style>
