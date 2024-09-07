<template>
  <div class="icon">
    <img :src="props.imgUrl" alt="Фото иконки" />
    <h1><slot name="header"></slot></h1>
    <p><slot name="content"></slot></p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  imgUrl: string
}>()
</script>

<style scoped>
.icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 1em;
}

img {
  width: 4em;
  height: 4em;
  border-radius: 100%;
}

h1 {
  font-size: 1.2em;
  margin: 0;
  margin-top: 1em;
}

p {
  font-size: 1em;
  margin-top: 0.5em;
  padding: 0 1em;
}

/* Mobile-specific styles */
@media (max-width: 768px) {
  img {
    width: 3.5em; /* Reduce the image size on mobile */
    height: 3.5em;
  }

  h1 {
    font-size: 1.1em; /* Slightly reduce the header size */
  }

  p {
    font-size: 0.9em; /* Reduce the paragraph font size */
    padding: 0 0.8em; /* Adjust padding for mobile */
  }
}

@media (max-width: 480px) {
  img {
    width: 3em; /* Further reduce the image size */
    height: 3em;
  }

  h1 {
    font-size: 1em; /* Further reduce the header size */
  }

  p {
    font-size: 0.875em; /* Smaller font size for smaller screens */
    padding: 0 0.5em; /* Adjust padding for smaller mobile screens */
  }
}
</style>
