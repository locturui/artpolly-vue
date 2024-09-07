<template>
  <div class="box">
    <div class="header">
      <h3><slot name="name"></slot></h3>
      <span><slot name="price"></slot></span>
    </div>
    <div class="content">
      <p><slot name="content"></slot></p>
      <ActionButton :classes="['btn', 'green']">Выбрать</ActionButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import ActionButton from './ActionButton.vue'
</script>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
  border-collapse: separate;
  width: 100%;
  margin: 0.4em;
  text-align: start;
}

.header {
  background-color: #83a165;
  color: white;
  padding: 2em 2em 2em 1.4em;
  border-radius: 2em 2em 0 0;
  font-weight: bold;
  font-size: 0.8em;
  width: 100%;
}

.content {
  background-color: white;
  color: inherit;
  border-radius: 0 0 2em 2em;
  padding: 2em 1.4em;
  font-size: 0.9em;
}

p {
  margin-bottom: 5rem;
}

h3 {
  margin: 0;
  font-size: 1.7em;
}

/* Mobile-specific styles */
@media (max-width: 768px) {
  .header {
    padding: 1.5em 1.2em; /* Reduce padding on mobile */
  }

  .content {
    padding: 1.5em 1.2em; /* Adjust padding for mobile */
  }

  h3 {
    font-size: 1.5em; /* Slightly smaller font size for the heading */
  }

  p {
    margin-bottom: 3rem; /* Reduce space below the paragraph */
  }
}

@media (max-width: 480px) {
  .header {
    padding: 1.2em; /* Further reduce padding on smaller screens */
  }

  .content {
    padding: 1.2em; /* Further reduce padding on smaller screens */
  }

  h3 {
    font-size: 1.3em; /* Further reduce the heading size */
  }

  p {
    margin-bottom: 2rem; /* Reduce the margin for even smaller screens */
  }
}
</style>

