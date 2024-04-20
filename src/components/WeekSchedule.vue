<template>
  <div class="week-schedule">
    <DaySchedule
      v-for="(day, index) in weekDays"
      :key="index"
      :dayName="day.name"
      :events="day.events"
    />
  </div>
</template>

<script setup>
import DaySchedule from './DaySchedule.vue'
import { reactive } from 'vue'

const weekDays = reactive([
  {
    name: 'Понедельник',
    events: [
      { time: '14:00', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' },
      { time: '14:00', description: 'Lorem ipsum dolor sit amet' },
      { time: '14:00', description: 'Lorem ipsum dolor sit amet' }
    ]
  },
  {
    name: 'Вторник',
    events: [
      { time: '14:00', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' },
      { time: '14:00', description: 'Lorem ipsum dolor sit amet' },
      { time: '14:00', description: 'Lorem ipsum dolor sit amet' }
    ]
  },
  {
    name: 'Среда',
    events: [
      { time: '14:00', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' },
      { time: '14:00', description: 'Lorem ipsum dolor sit amet' },
      { time: '14:00', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' }
    ]
  },
  {
    name: 'Четверг',
    events: [
      { time: '14:00', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' },
      { time: '14:00', description: 'Lorem ipsum dolor sit amet' },
      { time: '14:00', description: 'Lorem ipsum dolor sit amet' }
    ]
  },
  {
    name: 'Пятница',
    events: [
      { time: '14:00', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' },
      { time: '14:00', description: 'Lorem ipsum dolor sit amet' },
      { time: '14:00', description: 'Lorem ipsum dolor sit amet' }
    ]
  },
  {
    name: 'Суббота',
    events: [
      { time: '14:00', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' },
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
.week-schedule {
  display: grid;
  grid-template-columns: repeat(3, minmax(150px, 1fr));
  gap: 5em;
  width: 75%;
  margin: 0 auto;
}
</style>
