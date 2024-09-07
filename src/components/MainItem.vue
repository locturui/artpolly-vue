<template>
  <section>
    <div class="main-text">
      <h1>Художественная студия</h1>
      <p>
        Откройте для себя мир творчества, ведь искусство доступно всем!
      </p>
      <ActionButton :classes="['btn']">Записаться</ActionButton>
    </div>
  </section>
</template>

<script setup lang="ts">
import ActionButton from './ActionButton.vue'
</script>

<style scoped>
section {
  height: 45rem;
  background-image: url('/image/main_background_photo.jpeg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
}

.main-text {
  margin: 4rem;
  max-width: 45%;
  color: #fff;
}

h1 {
  margin: 0;
}

p {
  padding: 0.4em 0;
}

/* Mobile-friendly adjustments */
@media (max-width: 768px) {
  section {
    height: auto;
    min-height: 100vh;
    padding: 2rem;
    align-items: center; /* Center content vertically on mobile */
  }

  .main-text {
    margin: 2rem;
    max-width: 80%; /* Allow more space for text on mobile */
    text-align: left; /* Center the text for a better mobile appearance */
  }

  h1 {
    font-size: 2rem; /* Decrease heading size for mobile */
  }

  p {
    font-size: 1rem; /* Decrease paragraph size for mobile */
    padding: 0.6em 0;
  }
}

@media (max-width: 480px) {
  section {
    padding: 1rem;
  }

  .main-text {
    margin: 1rem;
    max-width: 90%; /* Even more space for smaller screens */
  }

  h1 {
    font-size: 1.8rem;
  }

  p {
    font-size: 0.9rem;
  }
}
</style>

