<template>
  <section class="schedule-section">
    <div class="section-header">
      <div class="header-accent"></div>
      <h1>Расписание</h1>
      <p class="subtitle">Выберите удобное время для занятий</p>
    </div>
    <Suspense>
      <ScheduleWeekSchedule />
      <template #fallback>
        <div class="loading">
          <p>Загрузка расписания...</p>
        </div>
      </template>
    </Suspense>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.schedule-section {
  padding: 5em 2em;
  background: linear-gradient(135deg, var(--cream) 0%, var(--warm-white) 50%, #ffffff 100%);
  position: relative;
  overflow: hidden;
}

.schedule-section::before {
  content: '';
  position: absolute;
  top: -30%;
  left: -10%;
  width: 550px;
  height: 550px;
  background: radial-gradient(circle, rgba(139, 115, 85, 0.06) 0%, transparent 70%);
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
  background: linear-gradient(90deg, transparent, var(--primary), transparent);
  margin: 0 auto 1.5em;
  border-radius: 2px;
}

h1 {
  margin-bottom: 0.5em;
  color: var(--text-primary);
}

.subtitle {
  font-size: 1.1em;
  color: var(--text-secondary);
  font-weight: 400;
  margin-top: 0.8em;
}

.loading {
  text-align: center;
  padding: 3em 0;
}

.loading p {
  color: var(--primary);
  font-size: 1.1em;
}

@media (max-width: 768px) {
  .schedule-section {
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
  .schedule-section {
    padding: 4em 1em;
  }

  .section-header {
    margin-bottom: 2.5em;
  }

  .schedule-section::before {
    display: none;
  }
}
</style>
