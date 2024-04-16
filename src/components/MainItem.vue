<template>
  <section>
    <div class="main-text">
      <h1>Художественная студия</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla efficitur enim iaculis,
        ultrices nisi non, tincidunt mi. Aenean ultricies consequat ipsum sit amet porttitor.
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
  font-size: 3em;
  margin: 0;
}
p {
  padding: 0.4em 0;
}
</style>
