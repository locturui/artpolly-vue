<template>
  <section>
    <h2>Расписание</h2>
    <h3>Пока что нет ближайших событий</h3>
    
    <!-- <WeekSchedule></WeekSchedule> -->
  </section>
</template>

<script setup lang="ts">
import WeekSchedule from './WeekSchedule.vue'
</script>

<style scoped>
section {
  margin-top: 10em;
}

h2 {
  text-align: center;
  margin-bottom: 2em;
}

h3 {
  text-align: center;
  margin-bottom: 4em;
}

@media (max-width: 768px) {
  section {
    margin-top: 2em; 
  }

  h2 {
    font-size: 1.5rem;
  }

  
  WeekSchedule {
    padding: 0 1.5em;
  }
}
</style>
