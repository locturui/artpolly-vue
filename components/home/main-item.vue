<template>
  <section>
    <div class="main-text">
      <h1>Художественная студия</h1>
      <p>
        Откройте для себя мир творчества, ведь искусство доступно всем!
      </p>
      <SharedActionButton :classes="['btn']">Записаться</SharedActionButton>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
section {
  height: 100vh;
  width: 100vw;
  background-image: url('/image/main_background_photo.jpeg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  padding: 4em;
  position: relative;
  margin: 0;
}

section::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(45, 40, 34, 0.7) 0%, rgba(45, 40, 34, 0.3) 50%, rgba(45, 40, 34, 0.1) 100%);
  pointer-events: none;
}

.main-text {
  max-width: min(500px, 45%);
  color: #fff;
  margin-bottom: 2em;
  position: relative;
  z-index: 10;
}

h1 {
  margin-bottom: 0.8em;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  font-weight: 700;
  letter-spacing: -0.02em;
  font-size: clamp(2.5rem, 5vw, 4rem);
}

p {
  margin: 0 0 2em 0;
  font-size: 1.25em;
  line-height: 1.7;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  font-weight: 300;
  max-width: 28em;
  opacity: 0.95;
}

@media (max-width: 1024px) {
  .main-text {
    max-width: 55%;
  }
}

@media (max-width: 768px) {
  section {
    height: 100vh;
    align-items: center;
    justify-content: center;
    padding: 6em 2em 4em;
  }

  .main-text {
    max-width: 100%;
    text-align: center;
    margin-bottom: 0;
  }

  h1 {
    font-size: clamp(2rem, 8vw, 3rem);
  }

  p {
    font-size: 1.1em;
    margin: 0 auto 2em;
  }
}

@media (max-width: 480px) {
  section {
    height: 100vh;
    padding: 5em 1.5em 3em;
  }

  h1 {
    font-size: clamp(1.8rem, 10vw, 2.5rem);
  }

  p {
    font-size: 1em;
  }
}
</style>

