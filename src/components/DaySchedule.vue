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
  margin-bottom: 1em;
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

@media (max-width: 768px) {
  .day-schedule {
    gap: 0.5em;
  }

  .events .event {
    align-items: flex-start; /* Align text to the left */
  }

  .events .event p {
    width: 100%; /* Make the description full width on mobile */
    font-size: 1rem; /* Adjust font size for mobile */
    padding: 0.6em; /* Adjust padding for mobile */
  }

  .events .event time {
    font-size: 1rem; /* Adjust font size for mobile */
  }

  span {
    font-size: 1.4em; /* Adjust the day name font size for mobile */
  }
}

@media (max-width: 480px) {
  .day-schedule {
    gap: 0.4em;
  }

  .events .event p {
    font-size: 0.875rem; /* Further reduce description font size on smaller screens */
    padding: 0.5em;
  }

  .events .event time {
    font-size: 0.875rem; /* Adjust time font size for smaller screens */
  }

  span {
    font-size: 1.2em; /* Further reduce day name font size */
  }
}
</style>
