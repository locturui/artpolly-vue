<script setup lang="ts">
import { computed } from 'vue'
import { useWindowSize } from '@vueuse/core'

const props = defineProps<{
  imgUrl: string
  classes: string[]
}>()

const { width } = useWindowSize()

const isMobile = computed(() => width.value < 768)
</script>

<template>
  <div :class="['about', isMobile ? 'vertical' : ''].concat(props.classes)">
    <div class="about-text">
      <h2><slot name="header"></slot></h2>
      <p><slot name="content"></slot></p>
      <div class="btn"><slot name="button"></slot></div>
    </div>
    <img :src="props.imgUrl" alt="Фото керамического изделия" />
  </div>
</template>

<style scoped>
.about {
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 1.5em;
}

h2 {
  margin: 0;
  font-size: 2.5em;
}

img {
  width: 50%;
  height: max-content;
  margin: 0 2em;
  border-radius: 1.5em;
}

.about-text {
  width: 50%;
  padding: 0 2em;
  display: flex;
  flex-direction: column;
}

.reverse {
  flex-direction: row-reverse;
}

.btn {
  margin-top: 0.5em;
}

.vertical {
  flex-direction: column; 
}

.vertical img {
  width: 100%;
  margin: 1em 0;
}

.vertical .about-text {
  width: 100%;
  padding: 0 1em;
}

/* Mobile-specific styles */
@media (max-width: 768px) {

  h2 {
    font-size: 1.5em; /* Adjust heading size for mobile */
  }

  .about-text {
    padding: 0 1em; /* Reduce padding for mobile */
  }

  img {
    width: 100%; /* Make the image full-width on mobile */
  }
}

@media (max-width: 480px) {
  
  h2 {
    font-size: 1.3em; /* Further reduce heading size */
  }

  .about-text {
    padding: 0 0.5em;
  }

  img {
    width: 100%; /* Ensure the image is still full width on smaller screens */
  }
}
</style>


