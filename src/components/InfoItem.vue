<script setup lang="ts">
import { computed } from 'vue'
import { useWindowSize } from '@vueuse/core'

const props = defineProps<{
  imgUrl: string
  classes: string[]
}>()

// Get the window size using VueUse
const { width } = useWindowSize()

// Check if the screen is mobile-sized (less than 768px)
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
}
img {
  width: 50%;
  height: max-content;
  margin: 0em 2em;
  border-radius: 1.5em;
}
.about-text {
  width: 50%;
  padding: 0em 2em;
  display: flex;
  flex-direction: column;
}
.reverse {
  flex-direction: row-reverse;
}
.btn {
  margin-top: 0.5em;
}

/* Mobile-specific styles */
.vertical {
  flex-direction: column; /* Switch to vertical layout */
}

.vertical img {
  width: 100%;
  margin: 1em 0; /* Adjust image margin for vertical layout */
}

.vertical .about-text {
  width: 100%;
  padding: 0 1em;
}
</style>

