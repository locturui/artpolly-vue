<script setup lang="ts">
import { ref, computed } from 'vue'
import ClassItem from './ClassItem.vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()

// Adjust the number of columns based on screen size
const columns = computed(() => {
  if (width.value >= 1200) return 4 // Fullscreen
  if (width.value >= 768) return 3 // Medium screen
  return 1 // Mobile screen
})

const uri = import.meta.env.VITE_BASE_URI

interface ClassItemType {
  id: number
  name: string
  price: number
  content: string
}

const classesAPI = ref<ClassItemType[]>([])
const res = await fetch(uri + '/class')
const data = await res.json()
for (let cat of data) {
  for (let a_class of cat.Classes) {
    let newClass: ClassItemType = {
      id: a_class.ID,
      name: a_class.Title,
      price: a_class.Price,
      content: a_class.Description
    }
    classesAPI.value.push(newClass)
  }
}
</script>

<template>
  <section class="bg">
    <div class="wrapper">
      <h2>Мастер классы</h2>
      <carousel :items-to-show="columns" :items-to-scroll="columns" :snap-align="'start'" :wrap-around="true">
        <slide v-for="course in classesAPI" :key="course.id">
          <ClassItem>
            <template #name>{{ course.name }}</template>
            <template #price>{{ course.price }}р/час</template>
            <template #content>{{ course.content }}</template>
          </ClassItem>
        </slide>
        <template #addons>
          <navigation />
        </template>
      </carousel>
    </div>
  </section>
</template>

<style scoped>
.bg {
  background-image: url('/image/bg-1.svg');
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  padding: 5em 0; 
  position: relative;
}

.wrapper {
  max-width: 100%;
  margin: 0 auto;
  padding: 2em 1em; /* Added padding for better spacing */
  text-align: center;
}

h2 {
  font-size: 2.7em;
  margin-bottom: 1em;
}

/* Mobile-specific styles */
@media (max-width: 768px) {
  .bg {
    padding: 3em 0; /* Reduce padding for mobile */
  }

  h2 {
    font-size: 1.5rem; /* Adjust font size */
    margin-bottom: 1em;
  }

  .wrapper {
    padding: 1em;
  }
}

@media (max-width: 480px) {
  .bg {
    padding: 5em 0; /* Further reduce padding for smaller screens */
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5em;
  }

  .wrapper {
    padding: 0.5em;
  }
}
</style>
