<template>
  <div class="week-schedule">
    <!-- Show the grid on larger screens -->
    <div v-if="!isMobile" class="week-grid">
      <DaySchedule
        v-for="(day, index) in weekDays"
        :key="index"
        :dayName="day.name"
        :events="day.events"
      />
    </div>

    <!-- Show the carousel on mobile screens -->
    <carousel v-else :items-to-show="columns" :items-to-scroll="columns" :snap-align="'start'" :wrap-around="true">
      <slide v-for="(day, index) in weekDays" :key="index">
        <DaySchedule :dayName="day.name" :events="day.events" />
      </slide>
      <template #addons>
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
import { useWindowSize } from '@vueuse/core'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import DaySchedule from './DaySchedule.vue'

// Get the window size to detect mobile
const { width } = useWindowSize()
const isMobile = computed(() => width.value < 768)

const weekDays = reactive([
  {
    name: 'Понедельник',
    events: [
      { time: '14:00', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      { time: '14:00', description: 'Lorem ipsum dolor sit amet' },
      { time: '14:00', description: 'Lorem ipsum dolor sit amet' }
    ]
  },
  {
    name: 'Вторник',
    events: [
      { time: '14:00', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      { time: '14:00', description: 'Lorem ipsum dolor sit amet' },
      { time: '14:00', description: 'Lorem ipsum dolor sit amet' }
    ]
  },
  {
    name: 'Среда',
    events: [
      { time: '14:00', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      { time: '14:00', description: 'Lorem ipsum dolor sit amet' },
      { time: '14:00', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
    ]
  },
  {
    name: 'Четверг',
    events: [
      { time: '14:00', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      { time: '14:00', description: 'Lorem ipsum dolor sit amet' },
      { time: '14:00', description: 'Lorem ipsum dolor sit amet' }
    ]
  },
  {
    name: 'Пятница',
    events: [
      { time: '14:00', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      { time: '14:00', description: 'Lorem ipsum dolor sit amet' },
      { time: '14:00', description: 'Lorem ipsum dolor sit amet' }
    ]
  },
  {
    name: 'Суббота',
    events: [
      { time: '14:00', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      { time: '14:00', description: 'Lorem ipsum dolor sit amet' },
      { time: '14:00', description: 'Lorem ipsum dolor sit amet' }
    ]
  },
  {
    name: 'Воскресенье',
    events: [
      { time: '14:00', description: 'Lorem ipsum dolor sit amet' },
      { time: '14:00', description: 'Lorem ipsum dolor sit amet' },
      { time: '14:00', description: 'Lorem ipsum dolor sit amet' }
    ]
  }
])
</script>

<style scoped>
.week-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(150px, 1fr));
  gap: 5em;
  width: 75%;
  margin: 0 auto;
}

.week-schedule {
  width: 100%;
}

@media (max-width: 768px) {
  .week-grid {
    display: none; 
  }
  .week-schedule {
    padding: 1em;
  }

}
</style>
