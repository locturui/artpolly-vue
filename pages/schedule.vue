<template>
  <div class="page-wrapper">
    <section id="schedule" class="page-container">
    <div class="schedule-content">
      <h2>Расписание</h2>
      <p>Полное расписание появится скоро</p>
    </div>
    </section>
    <LayoutFooter />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
</script>

<style scoped>
.page-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

section {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10em 2em 6em;
  background: linear-gradient(135deg, var(--cream) 0%, var(--warm-white) 50%, #ffffff 100%);
  position: relative;
  overflow: hidden;
}

section::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(139, 115, 85, 0.06) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}

.schedule-content {
  max-width: 600px;
  position: relative;
  z-index: 10;
  background: rgba(250, 248, 246, 0.9);
  backdrop-filter: blur(10px);
  padding: 3em;
  border-radius: 2em;
  box-shadow: 0 8px 30px rgba(139, 115, 85, 0.12);
  border: 1px solid var(--soft-gray);
}

h2 {
  margin-bottom: 1.5em;
  color: var(--text-primary);
}

p {
  font-size: 1.2em;
  color: var(--text-secondary);
  line-height: 1.6;
}

@media (max-width: 768px) {
  section {
    padding: 8em 1.5em 5em;
  }

  .schedule-content {
    padding: 2.5em;
  }

  p {
    font-size: 1.1em;
  }
}

@media (max-width: 480px) {
  section {
    padding: 6em 1em 4em;
  }

  .schedule-content {
    padding: 2em;
  }
  
  section::before {
    display: none;
  }
  
  p {
    font-size: 1em;
  }
}
</style>
