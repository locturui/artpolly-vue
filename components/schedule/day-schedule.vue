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
  transition: transform 0.2s ease;
}

.events .event:hover {
  transform: translateX(4px);
}

.events .event p {
  background: linear-gradient(135deg, var(--secondary) 0%, var(--secondary-light) 100%);
  padding: 0.8em 1em;
  border-radius: 1em;
  margin-bottom: -0.2em;
  width: 80%;
  color: white;
  box-shadow: 0 3px 12px rgba(212, 165, 154, 0.25);
  transition: all 0.2s ease;
  line-height: 1.5;
}

.events .event:hover p {
  box-shadow: 0 5px 18px rgba(212, 165, 154, 0.35);
  transform: translateY(-2px);
}

.events .event time {
  color: var(--secondary);
  font-weight: bold;
  font-size: 0.95em;
}

span {
  font-size: 1.6em;
  font-weight: 600;
  color: var(--text-primary);
}

@media (max-width: 768px) {
  .day-schedule {
    gap: 0.5em;
  }

  .events .event {
    align-items: flex-start;
  }

  .events .event p {
    width: 100%;
    font-size: 1rem;
    padding: 0.6em;
  }

  .events .event time {
    font-size: 1rem;
  }

  span {
    font-size: 1.4em;
  }
}

@media (max-width: 480px) {
  .day-schedule {
    gap: 0.4em;
  }

  .events .event p {
    font-size: 0.875rem;
    padding: 0.5em;
  }

  .events .event time {
    font-size: 0.875rem;
  }

  span {
    font-size: 1.2em;
  }
}
</style>
