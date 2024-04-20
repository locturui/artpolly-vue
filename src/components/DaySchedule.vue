<template>
  <div class="day-schedule">
    <span>{{ dayName }}</span>
    <div class="events">
      <div v-for="(event, index) in props.events" :key="index" class="event">
        <time>{{ event.time }}</time>
        <p>{{ event.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type Event = {
  time: string
  description: string
}

const props = defineProps({
  dayName: {
    type: String,
    required: true
  },
  events: {
    type: Array as () => Event[],
    required: true
  }
})
</script>

<style scoped>
.day-schedule {
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 1em;
}

.events .event {
  display: flex;
  gap: 1em;
  align-items: baseline;
}

.events .event p {
  background-color: #fda6ae;
  padding: 0.8em;
  border-radius: 1em;
  margin-bottom: -0.2em;
  width: 80%;
  color: #252525;
}

.events .event time {
  color: #fda6ae;
  font-weight: bold;
}

span {
  font-size: 1.6em;
}
</style>
