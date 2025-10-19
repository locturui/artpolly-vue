<template>
  <div class="week-schedule">
    <div class="week-grid desktop-grid">
      <ScheduleDaySchedule
        v-for="(day, index) in weekDays"
        :key="index"
        :dayName="day.name"
        :events="day.events"
      />
    </div>

    <Carousel class="mobile-carousel" :items-to-show="columns" :items-to-scroll="columns" :snap-align="'start'" :wrap-around="true">
      <Slide v-for="(day, index) in weekDays" :key="index">
        <ScheduleDaySchedule :dayName="day.name" :events="day.events" />
      </Slide>
      <template #addons>
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const columns = computed(() => 1)

interface ScheduleEvent {
  time: string
  description: string
}

interface DaySchedule {
  day: string
  events: ScheduleEvent[]
}

interface ScheduleData {
  weekSchedule: DaySchedule[]
}

const { data: scheduleData } = await useFetch<ScheduleData>('/api/schedule')

const weekDays = computed(() => {
  if (!scheduleData.value?.weekSchedule) return []
  
  return scheduleData.value.weekSchedule.map((day) => ({
    name: day.day,
    events: day.events
  }))
})
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

.desktop-grid {
  display: grid;
}

.mobile-carousel {
  display: none;
}

@media (max-width: 768px) {
  .desktop-grid {
    display: none !important;
  }
  
  .mobile-carousel {
    display: block;
  }
  
  .week-schedule {
    padding: 1em;
  }
}
</style>
