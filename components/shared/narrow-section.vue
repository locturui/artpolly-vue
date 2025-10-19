<template>
  <div class="narrow-container">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.narrow-container {
  width: min(60%, 900px);
  margin: 0 auto;
  padding: 0 2em;
}

@media (max-width: 1024px) {
  .narrow-container {
    width: 75%;
  }
}

@media (max-width: 768px) {
  .narrow-container {
    width: 100%;
    padding: 0 1.5em;
  }
}

@media (max-width: 480px) {
  .narrow-container {
    padding: 0 1em;
  }
}
</style>
